
var uploadButton = document.getElementById("upload-button");
var uploadInput = document.getElementById("upload-button");


uploadButton.onclick = (e) => {
    console.log("[uploadButton] " + e.type);
}

uploadInput.oninput = (e) => {
    console.log("[uploadInput] " + e.type);
}
