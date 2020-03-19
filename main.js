var uploadButton = document.getElementById("upload-button");
var uploadInput = document.getElementById("upload-input");


uploadButton.onclick = (e) => {
    console.log("[uploadButton] " + e.type);
}

uploadInput.oninput = (e) => {
    console.log("[uploadInput] " + e.type);
}


uploadInput.onchange = (e) => {
    const file = e.target.files[0];

    if (file) {
        var reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onload = function (e) {
            document.getElementById("preview-img").src = e.target.result;
        };
    }

    console.log(e);
}
