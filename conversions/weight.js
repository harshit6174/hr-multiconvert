const weightFactors = {
    kilograms: 1,
    grams: 0.001,
    milligrams: 0.000001,
    pounds: 0.453592,
    ounces: 0.0283495,
    tons: 907.185
};
export function convertWeight(fromUnit, toUnit, value) {
    
    if (!weightFactors.hasOwnProperty(fromUnit) || !weightFactors.hasOwnProperty(toUnit)) {
        throw new Error('Unsupported weight unit.');
    }
    const kilogramsValue = value * weightFactors[fromUnit];
    const convertedValue = kilogramsValue / weightFactors[toUnit];
    return convertedValue;
}
