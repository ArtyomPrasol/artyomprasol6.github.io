function falseD() {
    alert("ERROR: Incorrect data");
}
function correct() {
    console.log("Correct data");
}

function click1() {
    var f1 = document.getElementById("price");
    var f2 = document.getElementById("count");
    var r = document.getElementById("result");
    let result = f1.value * f2.value;
    if (!Number.isNaN(result) && f1.value > 0 && f2.value > 0) 
    {
        r.value = result;
        correct();
    } 
    else 
    {
        r.value = "ERROR";
        falseD();
    }
}

window.addEventListener('DOMContentLoaded', function (event) {
    console.log("DOM fully loaded and parsed");
    let b = document.getElementById("button1");
    b.addEventListener('click', click1);
})
