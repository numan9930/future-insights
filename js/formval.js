$("#submit").click(function(){
    var name = $("#name").val()
    var email = $("#email").val()
    var sub = $("#subject").val()
    var message = $("#message").val()
    var mailpatt = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
   

    init_err();
    
    if(name.trim() == ""){
        $("#err1").fadeIn()
        $("#err1").text("Please Enter Your Name")
        $("#err2").hide()
        $("#err3").hide()
        $("#err4").hide()  
    }
    else if(email.trim() == ""){
        $("#err2").fadeIn()
        $("#err2").text("Please Enter Your E-Mail")
        $("#err1").hide()
        $("#err3").hide()
        $("#err4").hide()
    }
    else if(!mailpatt.test(email)){
        $("#err2").fadeIn()
        $("#err2").text("Please Enter Valid E-Mail")
        $("#err1").hide()
        $("#err3").hide()
        $("#err4").hide()
    }
    else if(sub.trim() == ""){
        $("#err3").fadeIn()
        $("#err3").text("Please Enter Your E-Mail")
        $("#err2").hide()
        $("#err1").hide()
        $("#err4").hide()
    }
    else if(message.trim() == ""){
        $("#err4").fadeIn()
        $("#err4").text("Please Enter Your Name")
        $("#err2").hide()
        $("#err3").hide()
        $("#err1").hide()
    }
    else{
        $("#err2").hide()
        $("#err3").hide()
        $("#err1").hide()
        $("#err4").hide()
    }
});

function init_err(){
    $("#err1").hide()
    $("#err2").hide()
    $("#err3").hide()
    $("#err4").hide()
}