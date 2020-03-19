var uploadInput = document.getElementById("upload-input");

uploadInput.onchange = (e) => {
    const file = e.target.files[0];
    if (file) {
        var reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onload = function (e) {
            document.getElementById("preview-img").src = e.target.result;
        };
    }
}
