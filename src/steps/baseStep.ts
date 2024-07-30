import { API } from "../helpers/api";
import { APP } from "../helpers/app";

export abstract class BaseSteps {
    constructor (readonly app: APP, readonly api: API) {}
}