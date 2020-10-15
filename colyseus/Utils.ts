import {ArraySchema, MapSchema} from "@colyseus/schema";
import {IAction} from "./MessageTypes";
import {Random} from "../utils/Random";
import {Action} from "./state/Action";

export function array2ArraySchema<T>(source: T[]): ArraySchema<T> {
    if (source == null || !source.length) return new ArraySchema<T>();
    let result = new ArraySchema();
    for (const item of source) {
        result.push(item);
    }
    return result;
}

export function arraySchema2Array<T>(source: ArraySchema<T>): T[] {
    if (source == null || !source.length) return [];
    let result: T[] = [];
    for (const item of source) {
        result.push(item);
    }
    return result;
}

export function mapSchemaNumber2Array(source: MapSchema<number>): number[] {
    let result: number[] = [];
    try {
        for (const key in source) {
            if (source.hasOwnProperty(key)) {
                let count = source[key];
                for (let i = 0; i < count; i++) {
                    result.push(parseInt(key));
                }
            }
        }
    } catch {}
    return result;
}

export function arrayNumber2MapSchema(source: number[]): MapSchema<number> {
    let result: MapSchema<number> = new MapSchema<number>();
    if (source == null || !source.length) return result;

    for (const num of source) {
        if (typeof result[num.toString()] !== "number") {
            result[num.toString()] = 1;
        } else {
            result[num] += 1;
        }
    }
    return result;
}

export function mapSchema2Map<T>(source: MapSchema<T>): Map<string, T> {
    let result: Map<string, T> = new Map();
    try {
        for (const key in source) {
            if (source.hasOwnProperty(key)) result.set(key, source[key]);
        }
    } catch {}

    return result;
}

export function map2MapSchema<T>(source: Map<string, T>): MapSchema<T> {
    let result: MapSchema<T> = new MapSchema<T>();
    try {
        for (const key of source.keys()) {
            result[key] = source.get(key);
        }
    } catch {}

    return result;
}

export function getRandomKeyFromMapSchema<T>(source: MapSchema<T>): string {
    let keyList = Object.keys(source);
    if (keyList.length === 0) return "";
    let randomIndex = Random.random(0, keyList.length);
    return keyList[randomIndex];
}

export function action2IAction(source: Action): IAction {
    return {
        from: source.from,
        targets: arraySchema2Array(source.targets),
        skill: source.skill
    };
}

export function iAction2Action(source: IAction): Action {
    return new Action(source.from, source.skill, array2ArraySchema<string>(source.targets));
}

export function mapSchema2Array<T>(source: MapSchema<T>): T[] {
    let result: T[] = [];
    try {
        for (const sourceKey in source) {
            result.push(source[sourceKey]);
        }
    } catch {}
    return result;
}

export function mapSchemaAssign<T>(src: MapSchema<T>, des: MapSchema<T>) {
    for (const desKey in des) {
        if (src[desKey] == null) {
            delete des[desKey]; // if src don't contains desKey, remove the key
        }
    }
    for (const srcKey in src) {
        des[srcKey] = src[srcKey];
    }
}

export function object2MapSchema(src: Object): MapSchema<string> {
    const result = new MapSchema<string>();
    const keys = Object.keys(src);
    const values = Object.values(src);
    for (let i = 0; i < keys.length; i++) {
        if (typeof values[i] === "number") {
            result[keys[i]] = values[i];
            continue;
        }
        const stringifyValue = String(values[i]);
        if (values[i] !== "[object Object]" && stringifyValue === "[object Object]") {
            throw Error("Value at key " + keys[i] + " is Object which is not supported");
        }
        if (Array.isArray(values[i])) {
            if (values[i].every((item: any) => !String(item).includes(",") && !String(item).includes("\0"))) {
                result[keys[i]] = String([...values[i], "\0"]);
            } else {
                throw Error(
                    "Your string array at key " +
                        keys[i] +
                        " contains nested array or includes '\\0' or ',' which is forbidden"
                );
            }
        } else if (!stringifyValue.includes(",") && !stringifyValue.includes("\0")) {
            result[keys[i]] = stringifyValue;
        } else {
            throw Error("Value at key " + keys[i] + " includes '\\0' or ',' which is forbidden");
        }
    }
    return result;
}

function string2RealType(s: string | "true" | "false" | "null" | "undefined" | number) {
    if (typeof s === "number") {
        return s;
    } else {
        if (s === "\0") return [];
        if (s === "undefined") return undefined;
        if (s === "null") return null;
        if (s === "true") return true;
        if (s === "false") return false;
        const array = s.split(",");
        if (array.length > 1) {
            return array.slice(0, array.length - 1);
        }
        // const num = parseInt(s);
        // if (!isNaN(num)) return num;
        return s;
    }
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
