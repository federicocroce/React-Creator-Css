const required = value => value ? undefined : 'Required';

const number = value => value && isNaN(Number(value)) ? 'Must be a number' : undefined;

const minValue = min => value =>
    value && value < min ? `Must be at least ${min}` : undefined

const minValue18 = minValue(18)


const formatValidateArray = (validate) => {
    if (!validate) return;

    var validateFunction = [];

    validate.map((functionName, index) => {
        validateFunction.push(eval(functionName));
    })

    return validateFunction;
}

export {formatValidateArray};

