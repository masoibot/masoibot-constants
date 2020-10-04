export function arrayNullUndefinedFilter<TValue>(value: TValue | null | undefined): value is TValue {
    return value !== null && value !== undefined;
}

export async function wait(timeInMillis: number) {
    return new Promise<void>((resolve) => {
        global.setTimeout(resolve, timeInMillis);
    });
}
