import { ReactNode } from "react";
import { ConditionalStyles, Media, TableColumn } from "react-data-table-component";
import { ColumnSortFunction, Format, Primitive, Selector } from "react-data-table-component/dist/src/DataTable/types";

export class MyTableColumn<T> implements TableColumn<T> {
    allowOverflow?: boolean | undefined;
    button?: boolean | undefined;
    cell?: ((row: T, rowIndex: number, column: TableColumn<T>, id: string | number) => ReactNode) | undefined;
    center?: boolean | undefined;
    compact?: boolean | undefined;
    conditionalCellStyles?: ConditionalStyles<T>[] | undefined;
    format?: Format<T> | undefined;
    grow?: number | undefined;
    hide?: number | ((value: number) => /*CSSObject*/any) | Media | undefined;
    id?: string | number | undefined;
    ignoreRowClick?: boolean | undefined;
    maxWidth?: string | undefined;
    minWidth?: string | undefined;
    name?: ReactNode;
    omit?: boolean | undefined;
    reorder?: boolean | undefined;
    right?: boolean | undefined;
    selector?: Selector<T> | undefined;
    sortField?: string | undefined;
    sortFunction?: ColumnSortFunction<T> | undefined;
    sortable?: boolean | undefined;
    style?: any;
    width?: string | undefined;
    wrap?: boolean | undefined;

    constructor(columnData: TableColumn<T>) {
        this.allowOverflow = columnData.allowOverflow;
        this.button = columnData.button;
        this.cell = columnData.cell;
        this.center = columnData.center;
        this.compact = columnData.compact;
        this.conditionalCellStyles = columnData.conditionalCellStyles;
        this.format = columnData.format;
        this.grow = columnData.grow;
        this.hide = columnData.hide;
        this.id = columnData.id;
        this.ignoreRowClick = columnData.ignoreRowClick;
        this.maxWidth = columnData.maxWidth;
        this.minWidth = columnData.minWidth;
        this.name = columnData.name;
        this.omit = columnData.omit;
        this.reorder = columnData.reorder;
        this.right = columnData.right;
        this.selector = columnData.selector;
        this.sortField = columnData.sortField;
        this.sortFunction = columnData.sortFunction;
        this.sortable = columnData.sortable;
        this.style = columnData.style;
        this.width = columnData.width;
        this.wrap = columnData.wrap;
    }
}

type MySelector<T, D extends Primitive> = (row: T, rowIndex?: number) => D
type ImprovedFormat<T, D extends Primitive> = (value: D, row: T, rowIndex?: number) => ReactNode


export class SimpleColumn<T, D extends Primitive> extends MyTableColumn<T> {
    selectedValues: D[]
    selector?: MySelector<T, D>

    constructor(
        columnData: TableColumn<T>, 
        overrides: {
            selector?: MySelector<T, D>,
            format?: ImprovedFormat<T, D>
        }
    ) {
        super(columnData);

        this.selectedValues = []
        this.selector = overrides.selector != undefined ? this.toSavingSelector(overrides.selector) : undefined;
        this.format = overrides.format ? this.toFormat(overrides.format) : undefined
    }

    protected getValue(rowIndex: number | undefined, row: T) : D
    protected getValue(rowIndex: number | undefined, row: T | undefined, defaultValue: D) : D
    protected getValue(rowIndex?: number, row?: T) : D | undefined
    protected getValue(rowIndex?: number, row?: T, defaultValue?: D) : D | undefined {
        let savedValue = (rowIndex != undefined && rowIndex >= 0) ? this.selectedValues[rowIndex] : undefined
        let calculatedValue = ((row != undefined && this.selector) ? this.selector(row, rowIndex) : undefined)
        return savedValue || calculatedValue || defaultValue
    }

    protected setValue(value: D, rowIndex: number | undefined) : boolean {
        if(rowIndex != undefined) { this.selectedValues[rowIndex] = value; return true}
        return false;
    }

    protected toSavingSelector(selector: MySelector<T, D>) : MySelector<T, D> {
        return (row: T, rowIndex?: number) => {
            let val = selector(row, rowIndex)
            this.setValue(val, rowIndex)
            return val
        }
    }
    
    protected toFormat(format: ImprovedFormat<T, D>) : Format<T> {
        return (row: T, rowIndex?: number) => {
            return this.selector ? format(this.getValue(rowIndex, row), row, rowIndex) : undefined;
        }
    }
}

export type SimpleAccumulatingSelector<T, D extends Primitive> = (prevVal: D, row: T, rowIndex?: number) => D

export class SimpleCumulativeTableColumn<T, D extends Primitive> extends SimpleColumn<T, D> {
    accumulatorStart: D

    constructor(
        columnData: TableColumn<T>,
        overrides: {
            accumulatingSelector: SimpleAccumulatingSelector<T, D> | undefined,
            accumulatorStart: D,
            format?: ImprovedFormat<T, D>
        }
    ) {
        super(columnData, {format: overrides.format});

        this.selector = (overrides.accumulatingSelector != undefined) ? this.toSavingSelector(this.accumulatingSelectorToSelector(overrides.accumulatingSelector)) : undefined
        this.accumulatorStart = overrides.accumulatorStart
        this.sortable = false;
    }

    protected accumulatingSelectorToSelector(accumulatingSelector: (prevVal: D, row: T, rowIndex?: number) => D) : MySelector<T, D> {
        return (row: T, rowIndex?: number) => {
            let prev = this.getValue(rowIndex != undefined ? rowIndex-1 : undefined, undefined, this.accumulatorStart)
            return accumulatingSelector(prev, row, rowIndex);
        }
    }
}

export type AccumulatingSelector<T, A, D extends Primitive> = (accumVal: A, row: T, rowIndex?: number) => { val: D, accum: A }

export class CumulativeTableColumn<T, A, D extends Primitive> extends SimpleColumn<T, D> {
    accumulatingSelector?: AccumulatingSelector<T, A, D>;
    accumulatorStart: A
    accumulations: Array<A | undefined>
    mostRecentAccumulationIndex: number;
    
    constructor(
        columnData: TableColumn<T>,
        overrides: {
            accumulatingSelector: AccumulatingSelector<T, A, D> | undefined,
            accumulatorStart: A,
            format?: ImprovedFormat<T, D>
        }
    ) {
        super(columnData, {format: overrides.format});

        this.accumulatingSelector = overrides.accumulatingSelector;
        this.selector = (overrides.accumulatingSelector != undefined) ? this.toSavingSelector(this.accumulatingSelectorToSelector(overrides.accumulatingSelector)) : undefined
        this.accumulatorStart = overrides.accumulatorStart
        this.accumulations = []
        this.mostRecentAccumulationIndex = -1;
    }

    precalculate(sortedRows: T[]) {
        // Clear old values
        this.selectedValues = [];
        this.accumulations = [];

        // Calculate new values
        if(this.selector != undefined) {
            console.log("Precalculating")
            let selector = this.selector
            sortedRows.forEach((row, index) => selector(row, index))
        }
    }

    protected getAccumulation(rowIndex?: number, row?: T) : A | undefined
    protected getAccumulation(rowIndex: number | undefined, row: T | undefined, defaultValue: A) : A
    protected getAccumulation(rowIndex?: number, row?: T, defaultValue?: A) : A | undefined {
        rowIndex = rowIndex || this.mostRecentAccumulationIndex
        return (rowIndex != undefined && rowIndex >= 0) ? this.accumulations[rowIndex] : undefined || defaultValue
    }

    protected setAccumulation(value: A, rowIndex: number | undefined) : boolean {
        if(rowIndex != undefined) { this.accumulations[rowIndex] = value; return true}
        return false;
    }

    protected accumulatingSelectorToSelector(accumulatingSelector: AccumulatingSelector<T, A, D>) : MySelector<T, D> {
        return (row: T, rowIndex?: number) => {
            let prev = this.getAccumulation(rowIndex != undefined ? rowIndex-1 : undefined, undefined, this.accumulatorStart)
            // console.log("accumulatingSelectorToSelector", row, rowIndex, prev, JSON.parse(JSON.stringify(this.accumulations)))
            let x = accumulatingSelector(prev, row, rowIndex);
            // console.log(x)
            this.setAccumulation(x.accum, rowIndex);
            return x.val;
        }
    }
}