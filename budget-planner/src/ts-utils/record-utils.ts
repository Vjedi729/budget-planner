export function filterRecord<KeyType extends string | number | symbol, ValueType>(record: Record<KeyType, ValueType>, keys: KeyType[], valueDefault: ValueType) {
    return Object.fromEntries(keys.map(key => [key, record[key] == undefined ? valueDefault : record[key]]))
}