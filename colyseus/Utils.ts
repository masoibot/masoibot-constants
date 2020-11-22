import {ArraySchema, MapSchema, SetSchema} from "@colyseus/schema";
import {IAction} from "./MessageTypes";
import {Random} from "../utils/Random";
import {Action} from "./state/Event";

export function array2ArraySchema<T>(source: T[]): ArraySchema<T> {
    if (source == null || !source.length) return new ArraySchema<T>();
    return new ArraySchema<T>(...source);
    // let result = new ArraySchema();
    // for (const item of source) {
    //     result.push(item);
    // }
    // return result;
}

export function setSchema2Array<T>(source: SetSchema<T>): T[] {
    if (source == null || !source.size) return [];
    let result: T[] = [];
    source.forEach((value) => result.push(value));
    return result;
}

export function setSchema2Set<T>(source: SetSchema<T>): Set<T> {
    return new Set<T>(setSchema2Array(source));
}

export function array2SetSchema<T>(source: T[]): SetSchema<T> {
    return new SetSchema<T>(source);
}

export function set2SetSchema<T>(source: Set<T>): SetSchema<T> {
    return new SetSchema<T>([...source]);
}

export function arraySchema2Array<T>(source: ArraySchema<T>): T[] {
    if (source == null || !source.length) return [];
    return source.map((v) => v);
    // let result: T[] = [];
    // for (const item of source) {
    //     result.push(item);
    // }
    // return result;
}

export function mapSchemaNumber2Array(source: MapSchema<number>): number[] {
    let result: number[] = [];
    try {
        source.forEach((count, key) => {
            for (let i = 0; i < count; i++) {
                result.push(parseInt(key));
            }
        });
    } catch {}
    return result;
}

/**
 * arrayNumber2MapSchema for converting setup only
 * @param source
 */
export function arrayNumber2MapSchema(source: number[]): MapSchema<number> {
    let result: MapSchema<number> = new MapSchema<number>();
    if (source == null || !source.length) return result;

    for (const num of source) {
        const val = num.toString();
        if (typeof result.get(val) !== "number") {
            result.set(val, 1);
        } else {
            const count = result.get(val);
            result.set(val, count + 1);
        }
    }
    return result;
}

export function mapSchema2Map<T>(source: MapSchema<T>): Map<string, T> {
    //
    let result: Map<string, T> = new Map();
    // try {
    source.forEach((value, key) => {
        result.set(key, value);
    });
    // } catch {}
    //
    return result;
}

export function map2MapSchema<T>(source: Map<string, T>): MapSchema<T> {
    return new MapSchema<T>(source);
    // let result: MapSchema<T> = new MapSchema<T>();
    // try {
    //     for (const key of source.keys()) {
    //         result[key] = source.get(key);
    //     }
    // } catch {}
    //
    // return result;
}

export function getRandomKeyFromMapSchema<T>(source: MapSchema<T>): string {
    let keyList = [...source.keys()];
    if (keyList.length === 0) return "";
    let randomIndex = Random.random(0, keyList.length);
    return keyList[randomIndex];
}

export function getMultipleUniqueRandomKeyFromMapSchema<T>(
    source: MapSchema<T>,
    count: number = 1,
    exceptionList: string[] = []
): string[] {
    const result: string[] = [];
    let i = 0;
    exceptionList.forEach((item) => source.delete(item));
    while (i < count) {
        const key = getRandomKeyFromMapSchema(source);
        source.delete(key);
        result[i++] = key;
    }
    return result;
}

export function action2IAction(source: Action): IAction {
    return <IAction>{
        from: source.from,
        targets: setSchema2Array(source.targets),
        skill: source.name
    };
}

export function iAction2Action(source: IAction): Action {
    return new Action()._assign(source.skill, source.from, array2ArraySchema<string>(source.targets));
}

export function mapSchema2Array<T>(source: MapSchema<T>): T[] {
    return [...source.values()];
    // let result: T[] = [];
    // try {
    //     source.forEach((value, key) => {
    //         result.push(value);
    //     })
    // } catch {}
    // return result;
}

export function mapSchemaAssign<T>(src: MapSchema<T>, des: MapSchema<T>) {
    des.forEach((value, desKey) => {
        if (!src.has(desKey)) {
            des.delete(desKey); // if src don't contains desKey, remove the key
        }
    });
    src.forEach((value, srcKey) => {
        des.set(srcKey, src.get(srcKey));
    });
}

export function object2MapSchema(src: Object): MapSchema<string> {
    const result = new MapSchema<string>();
    const keys = Object.keys(src);
    const values = Object.values(src);
    for (let i = 0; i < keys.length; i++) {
        const stringifyValue = String(values[i]);
        if (values[i] !== "[object Object]" && stringifyValue === "[object Object]") {
            throw Error("Value at key " + keys[i] + " is Object which is not supported");
        }
        if (Array.isArray(values[i])) {
            if (values[i].every((item: any) => !String(item).includes(",") && !String(item).includes("\0"))) {
                result.set(keys[i], String([...values[i], "\0"]));
            } else {
                throw Error(
                    "Your string array at key " +
                        keys[i] +
                        " contains nested array or includes '\\0' or ',' which is forbidden"
                );
            }
        } else if (!stringifyValue.includes(",") && !stringifyValue.includes("\0")) {
            if (typeof values[i] === "number") {
                result.set(keys[i], (values[i] >= 0 ? "+" : "-") + String(values[i]));
            } else {
                result.set(keys[i], stringifyValue);
            }
        } else {
            throw Error("Value at key " + keys[i] + " includes '\\0' or ',' which is forbidden");
        }
    }
    return result;
}

function string2RealType(s: string | "true" | "false" | "null" | "undefined") {
    if (s === "\0") return [];
    if (s === "undefined") return undefined;
    if (s === "null") return null;
    if (s === "true") return true;
    if (s === "false") return false;
    const array = s.split(",");
    if (array.length > 1) {
        return array.slice(0, array.length - 1);
    }
    if (s[0] === "+" || s[0] === "-") {
        const num = parseInt(s.slice(1));
        if (!isNaN(num)) return num;
    }
    return s;
}

export function mapSchema2Object<T>(src: MapSchema<string>): T {
    // Code from https://gist.github.com/lukehorvat/133e2293ba6ae96a35ba
    let obj = Array.from(mapSchema2Map<string>(src)).reduce((obj, [key, value]) => {
        let valueInRealType;
        try {
            valueInRealType = string2RealType(value);
        } catch {
            valueInRealType = value;
        }
        return Object.assign(obj, {[key]: valueInRealType});
    }, {});
    return (obj as unknown) as T;
}

export function objectMapSchema2Object<T>(src: {[key: string]: any}): T {
    const result = {...src};
    for (const key in src) {
        (result as any)[key] = string2RealType(src[key]);
    }
    return result as T;
}
