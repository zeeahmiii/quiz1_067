window.onload = function(){
    var btn = document.getElementById("btn");
    btn.onclick=newinput;
}

function newinput(){
    var newinput = document.getElementById("inputskills").value;
    //console.log(newinput.value)
    var add = document.getElementById("add");
    var newinputText = document.createTextNode(newinput);
    var newskill = document.createElement("li");
    newskill.appendChild(newinputText);
    add.appendChild(newskill);
}