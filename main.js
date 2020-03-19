var uploadInput = document.getElementById("upload-input");

uploadInput.onchange = (e) => {
    const file = e.target.files[0];
    if (file) {
        document.getElementById("preview-img").src = URL.createObjectURL(file);
    }
}
