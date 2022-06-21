export function stairsInNYears(days: number[][], years: number): number {

    if ( years <= 0 ){
        return 0;
    }
    
    return Math.trunc(stepCounter(days) * years);
}

export function stepCounter(days: number[][]): number{

    return days.reduce((acumulatorSteps, currentDay) =>  {

        let steps = currentDay.reduce( (acumulator, currentStep) => acumulator + currentStep, 0);
    
        return acumulatorSteps + steps;
    
    }, 0);
}

export function isAllNumbersPositiveIntegers(days: number[][]): boolean {
    days.forEach(day => {
        day.forEach(steps => {
            Number.isInteger(steps) 
        });
    });
    return true;
}