"use strict";

$(document).ready(function() {
    //$('#ledstatus').text('aktiv');
    doPoll();
    doPollServo1();

    $('#activate').click(function() {
        $.ajax({  
            type: "GET",  
            url: "/ledseton", 
        });   
    });

    $('#deactivate').click(function() {
        $.ajax({  
            type: "GET",  
            url: "/ledsetoff", 
        });   
    });

    $('#servoleft1').click(function() {
        $.ajax({  
            type: "GET",  
            url: "/servoleft1", 
        });   
    });

    $('#servoright1').click(function() {
        $.ajax({  
            type: "GET",  
            url: "/servoright1", 
        });   
    });

});


function doPoll(){
    $.get('/ledstatus', function(data) {
        $('#ledstatus').text(data);  // process results here
        setTimeout(doPoll,1000);
    });
}

function doPollServo1(){
    $.get('/servoangle1', function(data) {
        $('#servoangle1').text(data);  // process results here
        setTimeout(doPollServo1,1000);
    });
}