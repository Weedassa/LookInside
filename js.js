
class CalcApi {
    firstNumber;
    secondNumber;

    constructor(firstNumber, secondNumber){
        this.firstNumber = firstNumber;
        this.secondNumber = secondNumber;
    }

    plus(){
        return this.firstNumber + this.secondNumber
    };
    minus(){
        return this.firstNumber - this.secondNumber
    };
    idiNah(){
        return 'Иди нахуй';
    }
}