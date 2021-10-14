var socket = io("http://localhost:3000")

socket.on('Server-send-price', function(data){
    $("h5").html(data)
})
socket.on("Server-send-fail-register", function(data){
    $("#failAlert").html("Oop! Username already <b><i><u>"+ data +"</u></i></b> taken.");
    $("#failAlert").show();
});
socket.on("Server-send-success-register", function(data){
    $("#currentUser").html(data);
    $("#loginForm").hide(1000);
    $("#chatContent").show(1500);
    $("#chatUltilities").show(1500);
});
socket.on("Server-update-list-users",function(data){
    $("#onlUsers").html("");
    console.log(data);
    data.forEach(function(i){
        $("#onlUsers").append("<p class='text-md-body-1'>"+i+"</p>")
    })
})

$(document).ready(function(){
    // Default Display
    $("#failAlert").hide();
    $("#chatContent").hide();
    $("#chatUltilities").hide();

    /// alert("Hello World !");
    $("#btnRegister").click(function(){
        socket.emit("Client-send-username", $("#txtUsername").val());
        $("#txtUsername").val("");
    })
});