var f = document.forms[0];
var ans1 = f.children[0].children[1].children[0];
ans1.setAttribute("checked", 'checked');

alert(ans1.checked);
/*
var tmp3 = f.children[0].children[2].children[0];
alert(tmp3.attributes);
/*
var ans2 = f.children[1].children[5].children[0];
ans2.setAttribute("value", 2);

var ans3 = f.children[2].children[5].children[0];
ans3.setAttribute("value", 2);


var ans5 = f.children[3].children[1].children[0];
    ans5.setAttribute("value", 1);
var ans7 = f.children[3].children[3].children[0];
    ans7.setAttribute("value", 1);


var ans8 = f.children[4].children[0].children[0];
    ans8.setAttribute("value", 1);
var ans9 = f.children[4].children[1].children[0];
    ans9.setAttribute("value", 1);

*/
function count() {
  alert("res works");
};

//var ans1 = document.forms[0].children[0].children[0].children[0];
//ans1.onclick = count;

var resTest = document.getElementById("resTest");
resTest.onclick = count;


