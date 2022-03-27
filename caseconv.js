var inputText, text;

function upperCaseMethod() {
    inputText = document.getElementById("myTextarea").value;
    document.getElementById("myTextarea").value = inputText.toUpperCase();
}
function lowerCaseMethod() {
    inputText = document.getElementById("myTextarea").value;
    document.getElementById("myTextarea").value = inputText.toLowerCase();
}
function properCaseMethod() {
    inputText = document.getElementById("myTextarea").value;
    text = inputText.toLowerCase();
    let text1 = text.split(" ");
    for (let i = 0; i < text1.length; i++) {
        text1[i] = text1[i].charAt(0).toUpperCase() + text1[i].slice(1);
    }
    document.getElementById("myTextarea").value = text1.join(' ');
}
function sentenceCaseMethod() {
    inputText = document.getElementById("myTextarea").value;
    text = inputText.toLowerCase();

    let text1 = text.split(". ");
    for (let i = 0; i < text1.length; i++) {
        text1[i] = text1[i].charAt(0).toUpperCase() + text1[i].slice(1);
    }
    document.getElementById("myTextarea").value = text1.join('. ');
}
function download(filename, text) {
    let element = document.createElement('a');
    element.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(text));
    element.setAttribute('download', filename);

    element.style.display = 'none';
    document.body.appendChild(element);

    element.click();
    document.body.removeChild(element);
}

function saveFile() {
    let text = document.getElementById("myTextarea").value;
    download("text.txt", text);
}
