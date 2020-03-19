var uploadInput = document.getElementById("upload-input");
var uploadCamera = document.getElementById("upload-input-camera");
function handleFileInput(e) {
    const file = e.target.files[0];
    if (file) {
        document.getElementById("preview-img").src = URL.createObjectURL(file);
    }
}
uploadInput.onchange = handleFileInput;
uploadCamera.onchange = handleFileInput;
