export interface ISet<V> {
    add(value: V): number | false | this;
    delete(item: V): boolean;
    clear(): void;
    has(value: V): boolean;
    forEach(callbackfn: (value: V, key: number | V, set: this) => void, thisArg?: any): void;
    readonly size: number;
}

export function ISetToArray<V>(source: ISet<V>): V[] {
    const target: V[] = [];
    source.forEach((value) => target.push(value));
    return target;
}

export function ISetCopy<V, T extends ISet<V> = ISet<V>>(source: ISet<V>, target: T): T {
    source.forEach((value) => target.add(value));
    return target;
}
