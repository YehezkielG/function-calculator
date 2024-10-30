const { Expression, Equation} = algebra;
const {simplify} = math;


const expr = new Expression("x").add(5);
console.log("Ekspresi:", expr.toString());
console.log(simplify('5(x + 2)'));

function f(value){
    const expression = document.getElementById("Ffunction").value.replace('x',`(${value})`);
    if(parseInt(expression)<2){
        eval()
    }
    return expression;
}

function g(value){
    let expression = value.replace('x',`(${value})`);
    return value;
}

function calculate(){
    const gFunc = g(document.getElementById("Gfunction").value).replace('x', document.getElementById("input").value);
    let result = algebra.parse(f(gFunc)).toString();
    document.getElementById('result').textContent = result;
}