import {ArraySchema, MapSchema} from "@colyseus/schema";
import {Action} from "./State";
import {IAction} from "./Message";

export class Random {
    static random(min: number, max: number) {
        return Math.floor(Math.random() * max) + min;
    }

    /**
     * xếp 1 vị trí ngẫu nhiên vào cuối mảng, giống bubble_sort nhưng là bubble_exchange :v
     * http://stackoverflow.com/questions/962802#962890
     * @param array
     */
    static shuffleArray(array: Array<any>) {
        let tmp,
            current,
            top = array.length;
        if (top)
            while (--top) {
                current = Math.floor(Math.random() * (top + 1));
                tmp = array[current];
                array[current] = array[top];
                array[top] = tmp;
            }
        return array;
    }
}

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

    for (const number of source) {
        if (typeof result[number.toString()] != "number") {
            result[number.toString()] = 1;
        } else {
            result[number] += 1;
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
    if (keyList.length == 0) return "";
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
