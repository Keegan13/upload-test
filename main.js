var uploadCamera = document.getElementById("upload-input-camera");
var cameraButton = document.getElementById("upload-button-camera");



function handleFileInput(e) {
    const file = e.target.files[0];
    if (file) {
        document.getElementById("preview-img").src = URL.createObjectURL(file);
    }
}
uploadCamera.onchange = handleFileInput;

cameraButton.onclick = () => {
    uploadCamera.click();
}




