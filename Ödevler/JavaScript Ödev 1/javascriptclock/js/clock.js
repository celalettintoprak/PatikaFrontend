let myNameDOM = document.querySelector("#myName");
let myClockDOM = document.querySelector("#myClock");

function displayName() {
    let name = prompt("Adınız nedir?", "Adınızı buraya yazınız.");
    console.log(name);
    return name;
}

function displayClock(){
  let myClock = new Date().toLocaleTimeString();
  setTimeout(displayClock, 1000);
  return myClock;
}

function displayDay() {
    let nowDay;
    let day = new Date().getDay();
    switch (day) {
        case 0:
            nowDay = "Pazar";
            break;
        case 1:
            nowDay = "Pazartesi";
            break;
        case 2:
            nowDay = "Salı";
            break;
        case 3:
            nowDay = "Çarşamba";
            break;
        case 4:
            nowDay = "Perşembe";
            break;
        case 5:
            nowDay = "Cuma";
            break;
        case 6:
            nowDay = "Cumartesi";
            break;
    }
    return nowDay;
}

function getInformations() {
    let myClock = displayClock();
    let myDay = displayDay();
    let myName = displayName();
    myClockDOM.innerHTML = `${myClock} ${myDay}`;
    myNameDOM.innerHTML = myName;
}

getInformations();