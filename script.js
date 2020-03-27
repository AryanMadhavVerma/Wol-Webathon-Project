let htmldetail = document.getElementById("html-detail");
let cssdetail = document.getElementById("css-detail");
let jsdetail = document.getElementById("js-detail");
let reactdetail = document.getElementById("react-detail");
let ref1 = document.getElementById("ref1");
let ref2 = document.getElementById("ref2");
let ref3 = document.getElementById("ref3");
let ref4 = document.getElementById("ref4");

document.getElementById("html").onclick = () => {
    if(htmldetail.style.display === "inline" && ref1.style.display === "block") {
        htmldetail.style.display = "none";
        ref1.style.display = "none";
    }
    else {
        htmldetail.style.display = "inline";
        ref1.style.display= "block";
    }
}
document.getElementById("css").onclick = () => {
    if(cssdetail.style.display === "inline" && ref2.style.display === "block") {
        cssdetail.style.display = "none";
        ref2.style.display = "none";
    }
    else {
        cssdetail.style.display = "inline";
        ref2.style.display = "block"; 
    }   
}
document.getElementById("js").onclick = () => {
    if(jsdetail.style.display === "inline" && ref3.style.display === "block") {
        jsdetail.style.display = "none";
        ref3.style.display = "none";
    }
    else {
        jsdetail.style.display = "inline";
        ref3.style.display = "block";
    }

}
document.getElementById("react").onclick = () => {
    if(reactdetail.style.display === "inline" && ref4.style.display === "block") {
        reactdetail.style.display = "none";
        ref4.style.display = "none";
    }
    else {
        reactdetail.style.display = "inline"
        ref4.style.display = "block";
    }
}