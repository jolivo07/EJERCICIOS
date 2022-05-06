    var hours = document.getElementById("hours").value;
    var minutes = document.getElementById("minutes").value;

function change(){
    document.getElementById("col-1").classList.toggle("col-12")
    document.getElementById("col-2").classList.toggle("col-12")
}

document.getElementById("change").onclick=function (){
    change();
    
}

function addText(){
    let hours = document.getElementById("hours").value;
    let minutes = document.getElementById("minutes").value;
    let hoursText = hours + "Hours"
    let minutesText = minutes + "Minutes"
    let text = `At `+ ` ${hoursText.fontcolor('green')} with `+ ` ${minutesText.fontcolor('green')} ` +` there's an angle of:`;

    if(isNaN(hours) || isNaN(minutes)){
        document.getElementById("oculto").classList.remove("d-none")
    
    }
    else{

        document.getElementById("parrafo").innerHTML = text

    }

}

    function reloj(){
        let hours = document.getElementById("hours").value;
        let minutes = document.getElementById("minutes").value;
        let x = parseInt(hours);
        let y = parseInt(minutes);
        let result = ((11/2)*y) - 30*(x) ;

        if(isNaN(hours) || isNaN(minutes)){
            document.getElementById("oculto").classList.remove("d-none")
        }
        else if(result < 0){
            document.getElementById("p").innerHTML = result * (-1) + "°"
        }else{
            document.getElementById("p").innerHTML = result + "°"
        } 
    }


document.getElementById("boton").onclick = function(){
    let hours = document.getElementById("hours").value;
    let minutes = document.getElementById("minutes").value;
    let x = parseInt(hours);
    let y = parseInt(minutes);
    if (hours.length == 0  || x > 12 ) {
        document.getElementById("oculto").classList.remove("d-none")
    }else if (minutes.length == 0 || y > 60) {
        
        document.getElementById("oculto").classList.remove("d-none")
    }else {
        addText()
        reloj()
        
    }


    }
    
    


  
 
 
 
 



