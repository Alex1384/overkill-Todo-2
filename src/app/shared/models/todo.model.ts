export class Todo {
    id?: string;
    content: string;
    done: boolean;
    description: string;

    constructor(values: Object = {}) {
        Object.assign(this, values);
    }
}
