function change(){
    document.getElementById("col-1").classList.toggle("col-12")
    document.getElementById("col-2").classList.toggle("col-12")
}

document.getElementById("change").onclick=function (){
    change();
    
}

function angle_hours(){
    let hours = document.getElementById("angle-hours").value;
    let minutes = document.getElementById("angle-minutes").value;
    let x = parseInt(hours)
    let y = parseInt(minutes)
    let resutl = x/30
   if (hours.length == 0 || (x % 3) != 0 || (y % 6) != 0 || x<30 ){
    document.getElementById("read-request").classList.remove("d-none")
   }else{
    document.getElementById("read-request").classList.add("d-none")
    document.getElementById("result-hours").innerHTML =Math.trunc(resutl)
     
   }

}

function angle_minutes(){
    let minutes = document.getElementById("angle-minutes").value;
    let hours = document.getElementById("angle-hours").value;
    let x = parseInt(hours)
    let y = parseInt(minutes)
    resutl = y/6
    if (minutes.length == 0 || (x % 3) != 0 || (y % 6) != 0  || x<30 ){
        document.getElementById("read-request").classList.remove("d-none")
       }else{
        document.getElementById("read-request").classList.add("d-none")
        document.getElementById("result-minutes").innerHTML =Math.trunc(resutl)
         
       }}

document.getElementById("btn-send-information").onclick=function(){
   angle_hours()
   angle_minutes()
}
