import { step } from "../helpers/step";

export class SomeSteps {
    @step ('Some Step 1')
    async someStep1() {
        console.log('Steps 1 for testing typeScript mixins')
    }

    @step ('Some Step 2')
    async someStep2() {
        console.log('Using if test suit has more than 1 files with steps')
    }
}