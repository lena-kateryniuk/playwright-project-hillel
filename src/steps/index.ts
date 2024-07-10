import { LoginSteps } from "./loginSteps"
import { SomeSteps } from "./someSteps"
import { applyMixins } from "../helpers/utils";

class Steps {};

interface Steps extends LoginSteps, SomeSteps {}

applyMixins(Steps, [LoginSteps, SomeSteps]);

export { Steps };