import { uniq } from "lodash";

export function filterRecord<KeyType extends string | number | symbol, ValueType>(record: Record<KeyType, ValueType>, keys: KeyType[], valueDefault: ValueType) {
    return Object.fromEntries(keys.map(key => [key, record[key] == undefined ? valueDefault : record[key]]))
}

export function getOrDefault<KeyType extends string | number | symbol, ValueType>(record: Record<KeyType, ValueType>, key: KeyType, defaultValue: ValueType): ValueType {
    return record[key] == undefined ? defaultValue : record[key];
}

export function diffRecords<KeyType extends string | number | symbol, ValueType, OutValueType>(
    a: Record<KeyType, ValueType>, 
    b: Record<KeyType, ValueType>, 
    diffFunc: (a: ValueType|undefined, b:ValueType|undefined) => OutValueType
): Record<KeyType, OutValueType> {
    let keys: KeyType[] = uniq(Object.keys(a).concat(Object.keys(b))) as KeyType[];

    return Object.fromEntries(keys.map(key => [key, diffFunc(a[key], b[key])])) as Record<KeyType, OutValueType>
}