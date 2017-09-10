
$('#btnSignUp').click(function () {

    var params = new Object();
    params["usrName"] = $('#txtusrName').val();
    params["usrmailid"] = $('#txtusrmailid').val();
    params["usrPassword"] = $('#txtusrPassword').val();
    params["usrcPassword"] = $('#txtusrcPassword').val();

    var paramJson;

    if (validate()) {

        $.post("signup.php", { paramJson: JSON.stringify(params) }, function (data) {
            if (data == 1){
                alert("Registration success");
                window.location = "home.html";
            }
            else
                alert("Registration failed");
        });
    }

});



function validate() {

    var passwd = $('#txtusrPassword').val();
    var confirmPasswd = $('#txtusrcPassword').val();

    if (passwd != confirmPasswd) {
        alert("Password and Confirm password does not match.");
        return false;
    }
    else {
        return true;
    }

}