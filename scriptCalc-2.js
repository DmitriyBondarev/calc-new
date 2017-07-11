var inp = document.getElementById("CalcDisp");
var oper = "";
var a = null;
var b = null;
var res = null;
var lastOper = "number";

function resetForm() {								//очистка формы 
    document.forms["Calculator"].reset();
    oper = "";
    a = b = res = null;
    lastOper = "number";
};
function clickNumber(x) {
    if (lastOper == "number" && b === null) {
        a = inp.value = inp.value + x;
        lastOper = "number";
    } else if (lastOper !== "number") {
            inp.value = "";
            b = inp.value = inp.value + x;
            lastOper = "number";
        } else {
            b = inp.value = inp.value + x;
            lastOper = "number";
        }
};
function clickPoint() {
    var x = ".";
    if (a === null || a !== null && b !== null && lastOper == "=") {
        a = inp.value = 0 + '.';
        lastOper = "number";
    } else {
        if (inp.value.indexOf(x) == -1) {
            if (lastOper == "number" && b === null) {
            a = inp.value = inp.value + x;
            lastOper = "number";
        } else if (lastOper !== "number") {
                inp.value = "";
                b = inp.value = 0 + x;
                lastOper = "number";
            } else {
                    b = inp.value = inp.value + x;
                    lastOper = "number";
                }
        } else if (inp.value.indexOf(x) != -1 && lastOper != "number") {
                inp.value = "";
                b = inp.value = 0 + x;
                lastOper = "number";
                }
        }
};
function plus() {                                   //суммирование
    if (a === null && b === null) {
        alert("Сначала нужно ввести число");
    } else {
        if (/*lastOper == "number" && */a !== null && b !== null) {
            equal();
            oper = "+";    
        } else {
            a = inp.value;
            oper = "+";
            lastOper = "+";
            return oper;
        }
    }
};
function minus() {                                   //вычитание
    if (a === null && b === null) {
        alert("Сначала нужно ввести число");
    } else {
        if (lastOper == "number" && a !== null && b !== null) {
            equal();
            oper = "-";    
        } else {
            a = inp.value;
            oper = "-";
            lastOper = "-";
            return oper;
        }
    }
};
function multiply() {                                   //умножение
    if (a === null && b === null) {
        alert("Сначала нужно ввести число");
    } else {
        if (lastOper == "number" && a !== null && b !== null) {
            equal();
            oper = "*";    
        } else {
            a = inp.value;
            oper = "*";
            lastOper = "*";
            return oper;
        }
    }
};
function divide() {                                   //деление
    if (a === null && b === null) {
        alert("Сначала нужно ввести число");
    } else {
        if (lastOper == "number" && a !== null && b !== null) {
            equal();
            oper = "/";    
        } else {
            a = inp.value;
            oper = "/";
            lastOper = "/";
            return oper;
        }
    }
};
function equal() {
    if (a === null && b === null) {
        alert("Некорректный ввод");
    } else {
        lastOper = "=";
        switch (oper) {
          case "+":
            res = (+a + +b);
            inp.value = a = res;
            return a;
            break;
          case "-":
            res = (+a - +b);
            inp.value = a = res;
            break;
          case "*":
            res = (+a * +b);
            inp.value = a = res;
            break;
          case "/":
            if (b == 0) {
                alert("На ноль делить нельзя. Потому что так сказал калькулятор.");
                resetForm();
                break;
            } else {
                res = (+a / +b);
                inp.value = a = res;
                break;
            }
          default:
            alert("Некорректный ввод");
        }
    }
};
function negativNum () {                                //отрицательное число
    if (a !== null && b === null) {
        a = inp.value = inp.value * (-1);
    } else if (a !== null && b !== null && lastOper == "=") {
        a = inp.value = inp.value * (-1);
} else if (a !== null && b !== null && res !== a) {
        b = inp.value = inp.value * (-1);
} else {
    alert("Некорректный ввод");
}
};

b1.onclick = function () {
        clickNumber('1');
    };
b2.onclick = function () {
        clickNumber('2');
    };
b3.onclick = function () {
        clickNumber('3');
    };
b4.onclick = function () {
        clickNumber('4');
    };
b5.onclick = function () {
        clickNumber('5');
    };
b6.onclick = function () {
        clickNumber('6');
    };
b7.onclick = function () {
        clickNumber('7');
    };
b8.onclick = function () {
        clickNumber('8');
    };
b9.onclick = function () {
        clickNumber('9');
    };
zero.onclick = function () {
        clickNumber('0');
    };
dvd.onclick = divide;
rst.onclick = resetForm;
mltpl.onclick = multiply;
negtv.onclick = negativNum;
min.onclick = minus;
result.onclick = equal;
point.onclick = clickPoint;
pls.onclick = plus;