const lengthFactors = {
    meters: 1,
    kilometers: 1000,
    centimeters: 0.01,
    millimeters: 0.001,
    inches: 0.0254,
    feet: 0.3048,
    yards: 0.9144,
    miles: 1609.34
};
export function convertLength(fromUnit, toUnit, value) {
    
    if (!lengthFactors.hasOwnProperty(fromUnit) || !lengthFactors.hasOwnProperty(toUnit)) {
        throw new Error('Unsupported length unit.');
    }
    const metersValue = value * lengthFactors[fromUnit];
    const convertedValue = metersValue / lengthFactors[toUnit];
    return convertedValue;
}
