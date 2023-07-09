let myNameDOM = document.querySelector("#myName");
let myClockDOM = document.querySelector("#myClock");

function displayName() {
    let name = prompt("Adınız nedir?", "Adınızı buraya yazınız.");
    console.log(name);
    return name;
}

function displayDay() {
    let dayTR;
    const day = new Date().getDay();
    switch (day) {
        case 0:
            dayTR = "Pazar";
            break;
        case 1:
            dayTR = "Pazartesi";
            break;
        case 2:
            dayTR = "Salı";
            break;
        case 3:
            dayTR = "Çarşamba";
            break;
        case 4:
            dayTR = "Perşembe";
            break;
        case 5:
            dayTR = "Cuma";
            break;
        case 6:
            dayTR = "Cumartesi";
            break;
    }
    return dayTR;
}

function displayClock(){
    let myDay = displayDay();
    const date = new Date();
    let h = date.getHours();
    let m = date.getMinutes();
    let s = date.getSeconds();
    h = checkTime(h);
    m = checkTime(m);
    s = checkTime(s);
    myClockDOM.innerHTML =  `${h}:${m}:${s}  ${myDay}`;
    setTimeout(displayClock, 1000);

    function checkTime(i) {
        // add zero in front of numbers < 10
        if (i < 10) {i = "0" + i};
        return i;
    }
}

function getInformations() {
    let myName = displayName();
    myNameDOM.innerHTML = myName;
    displayClock();
}

getInformations();

getInformations