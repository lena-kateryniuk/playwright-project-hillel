import { LoginSteps } from "./loginSteps"
import { SomeSteps } from "./someSteps"
import { applyMixins } from "../helpers/utils";
import { BaseSteps } from "./baseStep";

class Steps extends BaseSteps{};

interface Steps extends LoginSteps, SomeSteps {}

applyMixins(Steps, [LoginSteps, SomeSteps]);

export { Steps };