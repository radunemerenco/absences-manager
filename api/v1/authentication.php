<?php 
$app->get('/session', function() {
    $db = new DbHandler();
    $session = $db->getSession();
    echoResponse(200, $session);
});

$app->post('/login', function() use ($app) {
    require_once 'passwordHash.php';
    $r = json_decode($app->request->getBody());
    verifyRequiredParams(array('email', 'password'),$r->customer);
    $response = array();
    $db = new DbHandler();
    $password = $r->customer->password;
    $email = $r->customer->email;
    $user = $db->getOneRecord("select users.id as user_id, students.id AS student_id, id_group, groups.name AS group_name, teachers.id AS teacher_id, card_number,first_name,last_name,password,email,phone,address,permissions from users LEFT JOIN students ON students.id_user = users.id LEFT JOIN teachers ON teachers.id_user = users.id LEFT JOIN groups ON groups.id=students.id_group where card_number='$email' or phone='$email' or email='$email'");
    if ($user != NULL) {
        if(passwordHash::check_password($user['password'],$password)){
            if( isset($user["permissions"]) && strlen($user["permissions"]) > 0){
                $accountType = $user["permissions"];
            } else if (isset($user["teacher_id"]) && intval($user["teacher_id"]) > 0) {
                $accountType = "teacher";
            } else if (isset($user["student_id"]) && intval($user["student_id"]) > 0) {
                $accountType = "student";
            } else {
                $accountType = "user";
            }
            if (!isset($_SESSION)) {
                session_start();
            }
            $response['status'] = "success";
            $response['message'] = 'Logged in successfully.';

            $response['id'] = $_SESSION['id'] = $user['user_id'];
            $response['cardNumber'] = $_SESSION['cardNumber'] = $user['card_number'];
            $response['firstName'] = $_SESSION['firstName'] = $user['first_name'];
            $response['lastName'] = $_SESSION['lastName'] = $user['last_name'];
            $response['email'] = $_SESSION['email'] = $user['email'];
            $response['phone'] = $_SESSION['phone'] = $user['phone'];
            $response['address'] = $_SESSION['address'] = $user['address'];
            $response['accountType'] = $_SESSION['accountType'] = $accountType;;

        } else {
            $response['status'] = "error";
            $response['message'] = 'Login failed. Incorrect credentials';
        }
    }else {
            $response['status'] = "error";
            $response['message'] = 'No such user is registered';
        }
    echoResponse(200, $response);
});
$app->post('/signUp', function() use ($app) {
    $response = array();
    $r = json_decode($app->request->getBody());
    verifyRequiredParams(array('email', 'cardNumber', 'password', 'firstName', 'lastName', 'phone', 'address'),$r->customer);
    require_once 'passwordHash.php';
    $db = new DbHandler();

    $email = $r->customer->email;
    $cardNumber = $r->customer->card_number = $r->customer->cardNumber;
    $password = $r->customer->password;
    $firstName = $r->customer->first_name = $r->customer->firstName;
    $lastName = $r->customer->last_name = $r->customer->lastName;
    $phone = $r->customer->phone;
    $address = $r->customer->address;
    $isUserExists = $db->getOneRecord("select 1 from users where phone='$phone' or email='$email' or card_number='$cardNumber'");
    if(!$isUserExists){
        $r->customer->password = passwordHash::hash($password);
        $tabble_name = "users";
        $column_names = array('email', 'card_number', 'password', 'first_name', 'last_name', 'phone', 'address');
        $result = $db->insertIntoTable($r->customer, $column_names, $tabble_name);
        if ($result != NULL) {
            $response["status"] = "success";
            $response["message"] = "User account created successfully";
            $response["id"] = $result;
            if (!isset($_SESSION)) {
                session_start();
            }
            $_SESSION['id'] = $response["id"];
            $_SESSION['cardNumber'] = $cardNumber;
            $_SESSION['firstName'] = $firstName;
            $_SESSION['lastName'] = $lastName;
            $_SESSION['email'] = $email;
            $_SESSION['phone'] = $phone;
            $_SESSION['address'] = $address;
            $_SESSION['accountType'] = 'user';
            echoResponse(200, $response);
        } else {
            $response["status"] = "error";
            $response["message"] = "Failed to create customer. Please try again";
            echoResponse(201, $response);
        }
    }else{
        $response["status"] = "error";
        $response["message"] = "An user with the provided card number, phone or email exists!";
        echoResponse(201, $response);
    }
});
$app->post('/updateUserData', function() use ($app) {
    $response = array();
    $r = json_decode($app->request->getBody());
    verifyRequiredParams(array('email', 'cardNumber', 'currentPassword', 'firstName', 'lastName', 'phone', 'address'),$r->customer);
    require_once 'passwordHash.php';
    $db = new DbHandler();
    if(isset($r->customer->currentPassword)){
        $id = $r->customer->id;
        $currentPassword = $r->customer->currentPassword;
        $isUserExists = $db->getOneRecord("select password from users where id=$id");
        if(isset($isUserExists['password']) ){
            if(passwordHash::check_password($isUserExists['password'],$currentPassword)){
                $email = $r->customer->email;
                $cardNumber = $r->customer->card_number = $r->customer->cardNumber;
                $firstName = $r->customer->first_name = $r->customer->firstName;
                $lastName = $r->customer->last_name = $r->customer->lastName;
                $phone = $r->customer->phone;
                $address = $r->customer->address;
                $table_name = "users";
                $column_names = array('email', 'card_number', 'first_name', 'last_name', 'phone', 'address');
                if(isset($r->customer->password) && $r->customer->password == $r->customer->password2){
                    $column_names[] = 'password';
                    $r->customer->password = passwordHash::hash($r->customer->password);
                }
                $result = $db->updateRow($r->customer, $column_names, $table_name,' id='.$r->customer->id);
                if ($result != NULL) {
                    $response["status"] = "success";
                    $response["message"] = "Your data was successfully changed";
                    if (!isset($_SESSION)) {
                        session_start();
                    }
                    $_SESSION['id'] = $response["id"] = $id;
                    $_SESSION['cardNumber'] = $cardNumber;
                    $_SESSION['firstName'] = $firstName;
                    $_SESSION['lastName'] = $lastName;
                    $_SESSION['email'] = $email;
                    $_SESSION['phone'] = $phone;
                    $_SESSION['address'] = $address;
                    $_SESSION['accountType'] = 'user';
                    echoResponse(200, $response);
                } else {
                    $response["status"] = "error";
                    $response["message"] = "Failed to update customer data. Please try again";
                    echoResponse(201, $response);
                }
            }else {
                $response["status"] = "error";
                $response["message"] = "You entered a wrong password. Please, try again";
                echoResponse(201, $response);
            }
        } else {
            $response["status"] = "error";
            $response["message"] = "There was an error. Please, login again";
            echoResponse(201, $response);
        }
    } else {
        $response["status"] = "error";
        $response["message"] = "Please, type the current password";
        echoResponse(201, $response);
    }
});
$app->get('/logout', function() {
    $db = new DbHandler();
    $session = $db->destroySession();
    $response["status"] = "info";
    $response["message"] = "Logged out successfully";
    echoResponse(200, $response);
});
?>