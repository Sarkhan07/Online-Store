import { BehaviorSubject } from "rxjs";
// import { State } from './State';

export class store {
    static isExits = false;
    static instance: store;

    public $render = new BehaviorSubject(true);

    constructor () {
        if (store.isExits) {
            return store.instance;
        }

        store.isExits = true;
        store.instance = this;
    }
}

export const Store = new store();