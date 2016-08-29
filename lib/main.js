"use strict";

$(document).ready(function() {
    //$('#ledstatus').text('aktiv');
    doPoll();

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
});


function doPoll(){
    $.get('/ledstatus', function(data) {
        $('#ledstatus').text(data);  // process results here
        setTimeout(doPoll,1000);
    });
}