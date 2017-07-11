var summ = 0;
var percent;
var right = [];
    right[0] = document.getElementById("r1");
    right[1] = document.getElementById("r7");
    right[2] = document.getElementById("r12");
    right[3] = document.getElementById("ch2");
    right[4] = document.getElementById("ch4");
    right[5] = document.getElementById("ch5");
    right[6] = document.getElementById("ch6");
var wrongCh = [];
    wrongCh[0] = document.getElementById("ch1");
    wrongCh[1] = document.getElementById("ch3");
    wrongCh[2] = document.getElementById("ch7");
    wrongCh[3] = document.getElementById("ch8");
var resBut = document.getElementById("resTest");
resBut.onclick = function () {                          //расчет баллов
    for (i = 0; i < right.length; i++) {                
        if (right[i].getAttribute("type") == "radio") {
             if (right[i].checked == true) {            //действие для прав. радио.
            summ = summ + 2;
            }
        } else {
            if (right[i].checked == true) {         //действие для прав. чекбокса.
            summ = summ + 1;
            }
    }   
}
    percent = summ * 10;                         //процент прав. ответов
    for (i = 0; i < wrongCh.length; i++) {
    if (wrongCh[i].checked == true) {            //действие для НЕправ. чекбокса.
        summ = summ - 1;
        
    }
}
    if (summ < 0) {                             //исключим результат меньше ноля.
        summ = 0;
        alert("неужели все так плохо?..")
    }
    alert("Вы набрали " + summ + ' баллов из 10. Процент правильных ответов = ' + percent + " %.");
    summ = 0;
};