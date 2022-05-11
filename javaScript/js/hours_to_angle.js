document.getElementById("change").onclick = function () {
    document.getElementById("col-1").classList.toggle("col-12")
    document.getElementById("col-2").classList.toggle("col-12")
}

function addText() {
    let hours = document.getElementById("hours").value;
    let minutes = document.getElementById("minutes").value;
    let hoursText = hours + " Hours"
    let minutesText = minutes + " Minutes"
    let text = `At ` + ` ${hoursText.fontcolor('green')}  with ` + ` ${minutesText.fontcolor('green')} ` + ` there's an angle of:`;

    if (isNaN(hours) || isNaN(minutes)) {
        document.getElementById("read-request").classList.remove("d-none")
    }
    else {
        document.getElementById("result-paragraph").innerHTML = text
    }

}

function angleClock() {
    let hours = document.getElementById("hours").value;
    let minutes = document.getElementById("minutes").value;
    let x = parseInt(hours);
    let y = parseInt(minutes);
    let result = ((11 / 2) * y) - 30 * (x);

    if (isNaN(hours) || isNaN(minutes)) {
        document.getElementById("read-request").classList.remove("d-none")
    }
    else if (x >= 7 & y < 30) {
        let absolute = (result) + 360
        document.getElementById("result-angle").innerHTML = absolute + "°"
    }
    else if (result < 0) {
        document.getElementById("result-angle").innerHTML = result * (-1) + "°"
    }
    else {
        document.getElementById("result-angle").innerHTML = result + "°"
    }
}


document.getElementById("btn-send-information").onclick = function () {
    let hours = document.getElementById("hours").value;
    let minutes = document.getElementById("minutes").value;
    let x = parseInt(hours);
    let y = parseInt(minutes);

    if (hours.length == 0 || x > 12) {
        document.getElementById("read-request").classList.remove("d-none")
    } else if (minutes.length == 0 || y > 60) {

        document.getElementById("read-request").classList.remove("d-none")
    } else {
        document.getElementById("read-request").classList.add("d-none")
        addText()
        angleClock()

    }


}









