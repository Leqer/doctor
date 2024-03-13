<?php
$registered_users = array("user1" => "password1", "user2" => "password2");

if(isset($_POST['username']) && isset($_POST['password'])){
    $username = $_POST['username'];
    $password = $_POST['password'];

    if(array_key_exists($username, $registered_users) && $registered_users[$username] == $password){
        echo "Login successful!";
    } else {
        echo "Invalid username or password. Please try again.";
    }
}
?>
