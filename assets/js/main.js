/**
 * @Author: Your name
 * @Date:   2022-04-22 17:45:39
 * @Last Modified by:   Your name
 * @Last Modified time: 2022-05-01 17:00:15
 */

function doClick(){
    alert('lets party!!');
}


function changeText(){
   var heading = document.getElementById('heading');
   heading.innerHTML = 'You clicked!!'
}

function showDate(){
    var time = document.getElementById('time');
    time.innerHTML = Date();
}

function validateForm(){
    var set_up_waking_time = document.forms["myForm"]["set_up_waking_time"].value;

    if(set_up_waking_time == null || set_up_waking_time ==""){
        alert("Please set up waking time");
        return false;
    }
}