function newDate() {
    document.getElementById("date").innerHTML = "This is on click event";
}

function onmouse() {
    var x = document.getElementById("jscss");
    x.style.backgroundColor = "red";
    x.style.padding = "1rem";
}

function onmouseOut() {
    var x = document.getElementById("jscss");
    x.style.backgroundColor = "white";
    x.style.padding = "0rem";
}


function onMouseDown() {
    var x = document.getElementById("onmousedown");
    x.style.backgroundColor = "green";
    x.style.padding = "0.5rem 1rem";
    x.style.color = "white";

}



function onChange1() {
    var amount = 10;
    var inputAmount= document.getElementById("amt").value;
    var total = amount*inputAmount;
    document.getElementById("total").innerHTML=total;
   
}



setTimeout(
    function onLoad(){
        var load= document.getElementById("loading");
        load.style.display= "none";
    }, 3000);

//array
var sname = [
    "buddhi", "Raj", "Gurung", "Is", "Present"
];

var address = [
    "ktm", "pokhara", "syangja", "Butwal", "palpa"
];

var roll[
    5 , 6 , 7, 8, 9
];

for (var i = 0; i <=4; i++) {
  document.write("<br>" + sname[i] + address[i] + roll[i])
}

//css
var info = document.getElementById("info");
info.style.backgroundColor = "blue";
info.style.color = "white";
info.style.padding = "70px";

var info = document.getElementById("info").style.csstext = "backgroundColor = red;"

