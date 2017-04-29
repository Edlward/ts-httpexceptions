/**
 * @module clientErrors
 */ /** */
import {Exception} from "../Exception";
const CODE = 416;

export class RequestedRangeUnsatisfiable extends Exception {

    name: string = 'REQUESTED_RANGE_UNSATISFIABLE';
    status: number = CODE;

    constructor(message: string) {
        super(CODE, message);
    }
}