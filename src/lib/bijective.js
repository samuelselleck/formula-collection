
//Functions

export function unit() {
    return {apply: x => x, inverse: x => x}
}

export function scale(factor) {
    return {apply: x => factor*x, inverse: x => x/factor}
}

export function translate(value) {
    return {apply: x => x + value, inverse: x => x - value}
}

export function square() {
    return power(2)
}

export function power(exponent) {
    return {apply: x => Math.pow(x, exponent), inverse: x => Math.power(x, 1/exponent)}
}


//Composers

export function combine(f1, f2) {
    return {apply: x => f2.apply(f1.apply(x)), inverse: x => f1.inverse(f2.inverse(x))}
}
