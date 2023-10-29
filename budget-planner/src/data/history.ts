
type ChangeArray<Object, TimeType> = Array<{time: TimeType, prevValuesOfChangedElements: Partial<Object>}>

interface HistoryOf<Object, TimeType = number> {
    currentValue: Object,
    changes: ChangeArray<Object, TimeType>
}

abstract class HistoryOf<Object, TimeType> {

    constructor(original: Object)
    constructor(curentValue: Object, changes: ChangeArray<Object, TimeType> = [])
    {
        this.currentValue = curentValue;
        this.changes = changes;
    }

    abstract getValue(time: TimeType) : Object
    abstract setValue(object: Object) : Partial<Object> // The previous values of changed data
    abstract setValue(keys: string[], value: any) : boolean // If succeeded
}

// Note from Vishal
/*
Budget data should be stored as a history to allow changes
Recurring transactions (of any type) should be stored as histories
Amount of money in each bucket is a history (with bucket transactions being the changes)
Amount of money in each account is a history (with internal and external transactions being changes)
*/