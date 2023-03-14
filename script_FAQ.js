var root = document.querySelector(':root');

function changeBackground() {
    var input = document.getElementById('bgcolor').value;
    root.style.setProperty('--background-color', input);
    localStorage.setItem('bgColor', input);
    setCookie("bgColor", input, 365);
}

function setQuestionToggles() {
    var questionArray = document.querySelectorAll('h1');
    questionArray.forEach(element => {
        element.addEventListener('click', () => {
            element.classList.toggle('opened');
            element.nextElementSibling.classList.toggle('showAnswer');
        });
    });

}

window.onload = function () {
    var input = document.getElementById('bgcolor');
    var bgColor = localStorage.getItem('bgColor');
    root.style.setProperty('--background-color', bgColor);
    input.setAttribute('value', bgColor);
    setQuestionToggles();


}
function setCookie(cookieName, cookieValue, valDays) {
    const d = new Date();
    d.setTime(d.getTime() + (valDays * 24 * 60 * 60 * 1000));
    document.cookie = cookieName + "=" + cookieValue + ";expires=" + d.toUTCString();
}
function getCookie(cookieName) {
    let name = cookieName + "=";
    let decodedCookie = decodeURIComponent(document.cookie);
    let cookieArray = decodedCookie.split(';');
    for (let i = 0; i < cookieArray.length; i++) {
        let c = cookieArray[i];
        while (c.charAt(0) == ' ') {
            c = c.substring(1);
        }
        if (c.indexOf(name) == 0) {
            return c.substring(name.length, cookieArray[i].length);
        }
    }
    return "";
}