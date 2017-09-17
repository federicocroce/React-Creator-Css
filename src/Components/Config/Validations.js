const errorFunctions = {}

const required = params => value => value ? undefined : 'Ingrese ' + params;

const number = params => value => value && isNaN(Number(value)) ? params + ' solo puede ser numérica' : undefined;

const minValue = (min, label) => value => value && value < min ? label : undefined;

const formatValidateArray = (validate) => {
    if (!validate) return;

    var validateFunction = [];

    validate.map((functionName, index) => {
        validateFunction.push(eval(functionName));
    })

    return validateFunction;
}


const validations = {
    age: [number('Su edad '), minValue(18, 'Su edad debe ser igual o mayor a 18 años'), required('su edad')]
} 

const messageError = {
    required : "Ingrese"
}

export {formatValidateArray, errorFunctions, validations};

