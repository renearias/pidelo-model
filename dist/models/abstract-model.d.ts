import IKeyable from '../interfaces/keyable';
export declare class Model implements IKeyable {
    /**
     * Document ID.
     */
    key?: string;
    constructor(fields: any);
}
