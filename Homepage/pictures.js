document.querySelector("#Home").onclick = function() {
    window.location.href = "homepage.html";
}

document.querySelector("#About").onclick = function() {
    window.location.href = "about.html";
}

document.querySelector("#Links").onclick = function() {
    window.location.href = "links.html";
}

document.querySelector("select").onchange = function() {
    let fileName = this.value + ".jpg";
    document.getElementById("pic").alt= "Picture of " + this.value;
    document.getElementById("pic").src= fileName;
}