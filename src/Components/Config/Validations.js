const errorFunctions = {}

const required = params => value => value ? undefined : 'Ingrese ' + params;

const number = params => value => value && isNaN(Number(value)) ? params + ' solo puede ser numérica' : undefined;

const minValue = min => value =>
    value && value < min ? `Must be at least ${min}` : undefined

const minValue18 = minValue(18);

const test = params => console.log(params);



const formatValidateArray = (validate) => {
    if (!validate) return;

    var validateFunction = [];

    validate.map((functionName, index) => {
        validateFunction.push(eval(functionName));
    })

    return validateFunction;
}


const validations = {
    age: [number('Su edad '), minValue(18), required('su edad')]
} 

const messageError = {
    required : "Ingrese"
}

export {formatValidateArray, errorFunctions, validations};

