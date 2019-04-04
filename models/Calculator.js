function Calculator(leftOperand, operator, rightOperand) {
    this.leftOperand = leftOperand;
    this.operator = operator;
    this.rightOperand = rightOperand;
    
    this.calculateResult = function() {
        // console.log(this.operator);
        if (this.operator === '+') {
            return this.leftOperand + this.rightOperand;
        } else if (this.operator === '-') {
            return this.leftOperand - this.rightOperand;
        } else if (this.operator === '*') {
            return this.leftOperand * this.rightOperand;
        } else if (this.operator === '/') {
            return this.leftOperand / this.rightOperand;
        }
        
    }
}

module.exports = Calculator;