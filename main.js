var content = document.getElementById("content");
var oops = document.getElementById("oops");
if(content.childNodes.length === 0){
    console.log("no")
    oops.style.visibility = "visible";
}else {
    console.log("yes");
    oops.style.visibility = "hidden";
}



function Drop() {
    var txt = document.getElementById("drop-con");
    var txt1 = document.getElementById("drop-menu");
    txt.style.visibility = (txt.style.visibility === "hidden")?"visible":"hidden";
    txt.style.top = (txt.style.top === "-1vh")?"0vh":"-1vh";
}