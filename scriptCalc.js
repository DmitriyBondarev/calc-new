var inp = document.getElementById("CalcDisp"), oper = "", a = null, b = null, res = null, lastOper = "number", 
memory = 0, mIndicator = document.getElementById("mIndicator"), lastOperIsMr = false, piPushed = 0;
function piFoo () {
	cleanIndicators ();
	if (lastOper !== "pi") {
		inp.value = "";
		clickNumber(Math.PI);
		lastOper = "pi";		
	} else {}
}
function sqrtFoo(){
	expIndicator.innerHTML = "";
	sqrtIndicator.innerHTML = "sqrt (&#8730;)";
	if (inp.value < 0){
		inp.value = "Недопустимый ввод";
	} else if (inp.value == a) {
		inp.value = a = Math.sqrt(inp.value);
	} else if (inp.value == b) {
		inp.value = b = Math.sqrt(inp.value); 
	} else {err("Sqrt error")}
}
function expFoo () {                                   										//степень
	sqrtIndicator.innerHTML = "";
    expIndicator.innerHTML = "^";
	if (a === null && b === null) {
        err("Сначала нужно ввести число");
    } else {
        if ((lastOper === "number" || lastOper === "pi") && a !== null && b !== null) {
            oper = "exp";    
        } else {
            a = inp.value;
            oper = "exp";
            lastOper = "exp";
            return oper;
        }
    }
};
function percentFoo(){
	cleanIndicators ();
	b = inp.value = (a * b)/100;
}
function mPlusFoo () {																		// memmory begin
	cleanIndicators ();
	if (a === b && a === null) {} else {
		memory += parseFloat(inp.value);
		mIndicator.innerHTML = "Memory: " + memory;
		lastOper = "number";
	}
}
function mMinusFoo () {
	cleanIndicators ();
	if (a === b && a === null) {} else {
		memory -= parseFloat(inp.value);
		mIndicator.innerHTML = "Memory: " + memory;
		lastOper = "number";
	}
}
function mResFoo () {
	cleanIndicators ();
	if (lastOper === "number") { inp.value = memory; }
	else { clickNumber(memory); }
}
function cleanIndicators (){
	sqrtIndicator.innerHTML = "";
	expIndicator.innerHTML = "";
	message.innerHTML = "";
}
function mCleanFoo () {
	cleanIndicators ();
	mIndicator.innerHTML = "";
	memory = 0;
}																					// memory end
function err (msg) {
	message.innerHTML = msg;
}
function niceZero () {
	
	if (inp.value === "0") {
		inp.value = "";
	}
}
delFoo = () => {																		// delete (<--)
	cleanIndicators ();
	if (inp.value === a) {
		a = inp.value = inp.value.slice(0, inp.value.length - 1);
	} else if (inp.value === b) {
		b = inp.value = inp.value.slice(0, inp.value.length - 1);
	} else {}
}
infoFoo = () => { console.log("a =",a,", b =",b,", inp.value =",inp.value,", mem =",memory,", lastOper =", lastOper,", oper =", oper); }
//--------------------------------------------------------------------------------------------------------------//
function resetForm() {								//очистка формы 
	cleanIndicators ();
    document.forms["Calculator"].reset();
    oper = "";
    a = b = res = null;
    lastOper = "number";
};
function clickNumber(x) {
	cleanIndicators ();
    if (lastOper == "number" && b === null) {
		niceZero ();
        a = inp.value = inp.value + x;
        lastOper = "number";
    } else if (lastOper !== "number") {
            inp.value = "";
            b = inp.value = inp.value + x;
            lastOper = "number";
        } else {
			niceZero ();
            b = inp.value = inp.value + x;
            lastOper = "number";
        }
};
function clickPoint() {
	cleanIndicators ();
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
	cleanIndicators ();
    if (a === null && b === null) {
        err("Сначала нужно ввести число");
    } else {
        if ((lastOper === "number" || lastOper === "pi") && a !== null && b !== null) {
            equal();
            oper = "+";    
        } else {
            a = inp.value;
            oper = "+";
            lastOper = "+";
        }
    }
};
function minus() {                                   //вычитание
	cleanIndicators ();
    if (a === null && b === null) {
        err("Сначала нужно ввести число");
    } else {
        if ((lastOper === "number" || lastOper === "pi") && a !== null && b !== null) {
            equal();
            oper = "-";    
        } else {
            a = inp.value;
            oper = "-";
            lastOper = "-";
			err(oper);
            return oper;
        }
    }
};
function multiply() {                                   //умножение
	cleanIndicators ();
    if (a === null && b === null) {
        err("Сначала нужно ввести число");
    } else {
        if ((lastOper === "number" || lastOper === "pi") && a !== null && b !== null) {
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
	cleanIndicators ();
	if (a === null && b === null) {
        err("Сначала нужно ввести число");
    } else {
        if ((lastOper === "number" || lastOper === "pi") && a !== null && b !== null) {
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
function equal() {																			//равно
	cleanIndicators ();
    if (a === null && b === null) {
        err("Недопустимый ввод");
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
                resetForm();
/* 					setTimeout (zeroErr0, 0);
					setTimeout (zeroErr1, 500); */
			var f = function(i){
			  i = i | 0;
			  i++;
			  setTimeout (zeroErr0, 0);
			  setTimeout (zeroErr1, 500);
			  if(i<20)
				setTimeout(f.bind(null,i),1000);
				else err("????");	
			} 			
	f();

				
				
				setTimeout(function zeroErr2(){
					style2.innerHTML = " .main { background-image: url(https://media2.giphy.com/media/HhTXt43pk1I1W/giphy.gif); background-size: cover;} #formCalc {opacity: 0.8; }";
				},900);
 				setTimeout(function (){
					style1.innerHTML = " #formCalc {    animation: fall 0.7s cubic-bezier(.47,-0.01,.36,1.32) 0s;      animation-fill-mode: forwards;    -webkit-animation-fill-mode: forwards; } ";
				},3500); 
 				setTimeout(function (){
					style3.innerHTML = " #zero {    animation: fall 1.2s ease 0s;      animation-fill-mode: forwards;    -webkit-animation-fill-mode: forwards; }";
				},5200); 
 				setTimeout(function (){
					style4.innerHTML = " .crashEffect{    animation: fall2 2.5s ease-in 0s;      animation-fill-mode: forwards;    -webkit-animation-fill-mode: forwards; } .zeroDivAnimation{  animation: fall3 1.8s ease 0.8s;      animation-fill-mode: forwards;    -webkit-animation-fill-mode: forwards; }";
				},10000); 
                
				break;
            } else {
                res = (+a / +b);
                inp.value = a = res;
                break;
            }
			case "":
				break;
			case "exp":
				res = 1;
				for (let i = 0; i < b ; i++){
					res = res * a;
				}
				inp.value = a = res;
				break;
			default:
            err("Недопустимый ввод(default)");
        }
    }
};
function negativNum () {                                //отрицательное число
	cleanIndicators ();
    if (a !== null && b === null) {
        a = inp.value = inp.value * (-1);
    } else if (a !== null && b !== null && lastOper == "=") {
        a = inp.value = inp.value * (-1);
	} else if (a !== null && b !== null && res !== a) {
			b = inp.value = inp.value * (-1);
	} else {
		err("Недопустимый ввод");
	}
};
function zeroErr0(){
	err("Деление...");
}
function zeroErr1(){
	err("На ноль...");	
}
b1.onclick = () => clickNumber('1');
b2.onclick = () => clickNumber('2');
b3.onclick = () => clickNumber('3');
b4.onclick = () => clickNumber('4');
b5.onclick = () => clickNumber('5');
b6.onclick = () => clickNumber('6');
b7.onclick = () => clickNumber('7');
b8.onclick = () => clickNumber('8');
b9.onclick = () => clickNumber('9');
zero.onclick = function () {
	if (a === '0' || b === '0'){}
	else {
        clickNumber('0');
	}
};
dvd.onclick = divide;
rst.onclick = resetForm;
mltpl.onclick = multiply;
negtv.onclick = negativNum;
min.onclick = minus;
result.onclick = equal;
point.onclick = clickPoint;
pls.onclick = plus;
//------------------------ memory:
mPlus.onclick = mPlusFoo;
mMinus.onclick = mMinusFoo;
mRes.onclick = mResFoo;
mClean.onclick = mCleanFoo;
//------------------------ others
del.onclick = delFoo;
buttInfo.onclick = infoFoo;
sqrt.onclick = sqrtFoo;
pi.onclick = piFoo;
exp.onclick = expFoo;
percent.onclick = percentFoo;
//----------------------------------------keydown

