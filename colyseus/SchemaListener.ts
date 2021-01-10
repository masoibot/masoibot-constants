import {ArraySchema, MapSchema} from "@colyseus/schema";

export interface ISchemaListener<I extends number | string, T, P> {
    onItemAdd?: (index: I, item: T, parent?: P) => void;
    onItemChanged?: (index: I, item: T, parent?: P) => void;
    onItemRemoved?: (index: I, item: T, parent?: P) => void;
    onItemAnyChanged?: (parent: P) => void;
    onParentChanged?: (parent: P) => void;
}

export class SchemaListener<I extends number | string, T, P> implements ISchemaListener<I, T, P> {
    public static deboundTimeoutValue = 100;
    public deboundSetTimeout = setTimeout(() => {}, SchemaListener.deboundTimeoutValue);

    constructor(public listener: ISchemaListener<I, T, P>) {}

    callDebound(callback: (...args: any[]) => any) {
        console.log("[debug]callDebound", Date.now());
        clearTimeout(this.deboundSetTimeout);
        this.deboundSetTimeout = setTimeout(callback, SchemaListener.deboundTimeoutValue);
    }

    onItemAdd(index: I, item: T, parent?: P) {
        if (this.listener.onItemAdd) this.listener.onItemAdd(index, item, parent);
    }

    onItemChanged(index: I, item: T, parent?: P) {
        if (this.listener.onItemChanged) this.listener.onItemChanged(index, item, parent);
    }

    onItemRemoved(index: I, item: T, parent?: P) {
        if (this.listener.onItemRemoved) this.listener.onItemRemoved(index, item, parent);
    }

    onItemAnyChanged(parent: P) {
        if (this.listener.onItemAnyChanged) {
            this.callDebound(() => {
                console.log("[debug]debound called", Date.now());
                if (this.listener.onItemAnyChanged) this.listener.onItemAnyChanged(parent);
            });
        }
    }

    onParentChanged(parent: P) {
        if (this.listener.onParentChanged) this.listener.onParentChanged(parent);
    }
}

export class SchemaListenerManager<L extends SchemaListener<any, any, any>> {
    constructor(private listeners: L[]) {}

    addListener(listener: L): void {
        this.listeners.push(listener);
    }

    removeListener(listener: L): void {
        const index = this.listeners.indexOf(listener);
        if (index !== -1) this.listeners.splice(index, 1);
    }
}

export function arraySchemaListener<S, T>(source: ArraySchema<S>) {
    const listeners: SchemaListener<number, S, ArraySchema<S>>[] = [];
    source.onAdd = (item, key) => {
        listeners.forEach((listener) => {
            listener.onItemAdd(key, item);
            listener.onItemAnyChanged(source);
        });
    };
    source.onChange = (item, key) => {
        listeners.forEach((listener) => {
            listener.onItemChanged(key, item);
            listener.onItemAnyChanged(source);
        });
    };
    source.onRemove = (item, key) => {
        listeners.forEach((listener) => {
            listener.onItemRemoved(key, item);
            listener.onItemAnyChanged(source);
        });
    };
    return new SchemaListenerManager(listeners);
}

export function mapSchemaListener<S>(source: MapSchema<S>) {
    const listeners: SchemaListener<string, S, MapSchema<S>>[] = [];
    source.onAdd = (item, key) => {
        listeners.forEach((listener) => {
            listener.onItemAdd(key, item);
            listener.onItemAnyChanged(source);
        });
    };
    source.onChange = (item, key) => {
        listeners.forEach((listener) => {
            listener.onItemChanged(key, item);
            listener.onItemAnyChanged(source);
        });
    };
    source.onRemove = (item, key) => {
        listeners.forEach((listener) => {
            listener.onItemRemoved(key, item);
            listener.onItemAnyChanged(source);
        });
    };
    return new SchemaListenerManager(listeners);
}
