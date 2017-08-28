<?php
$app->get('/getGroups', function() use ($app) {
    $response = array();
    $db = new DbHandler();
    $records = $db->getRecords("SELECT * FROM groups");
    if ($records != NULL) {
        $response = $records;
    }else {
        $response['status'] = "error";
        $response['message'] = 'No such user is registered';
    }
    echoResponse(200, $response);
});

$app->post('/setGroup', function() use ($app) {
    $request = json_decode($app->request->getBody());
    $response = array();
    $db = new DbHandler();
    if(isset($request->userId) && is_int(intval($request->userId)) && isset($request->groupId) && is_int(intval($request->groupId))) {
        $table_name = "students";
        if($result = $db->updateRow(array('id_group' => $request->groupId), array('id_group'), $table_name, "id_user = $request->userId") === TRUE){
            $response['status'] = "success";
            $response['message'] = 'Group changed successfully';
            echoResponse(200, $response);
        } else {
            $response["status"] = "error";
            $response["message"] = "Failed to change group";
            echoResponse(201, $response);
        }
    } else{
        $response["status"] = "error";
        $response["message"] = "Unknown error detected";
        echoResponse(201, $response);
    }
});


$app->post('/groupCreate', function() use ($app) {
    $request = json_decode($app->request->getBody());
    $response = array();
    $db = new DbHandler();
    if(isset($request->groupName)){
        $table_name = "groups";
        $column_names = array('name');
        $dataArray = array('name' => $request->groupName);
        $result = $db->insertIntoTable($dataArray, $column_names, $table_name);
        if ($result != NULL) {
            $response["status"] = "success";
            $response["message"] = "Group created";
            $response["absence"] = $result;
            echoResponse(200, $response);
        } else {
            $response["status"] = "error";
            $response["message"] = "Failed to create group";
            echoResponse(201, $response);
        }
    } else {
        $response["status"] = "error";
        $response["message"] = "Please, fill blank fields";
        echoResponse(201, $response);
    }
});


$app->post('/deleteGroup', function() use ($app) {
    $request = json_decode($app->request->getBody());
    $response = array();
    $db = new DbHandler();
    if(isset($request->groupId) && is_int(intval($request->groupId))) {
        if($result = $db->deleteRecord('groups', "id = $request->groupId") === TRUE){
            $response['status'] = "success";
            $response['message'] = 'Subject deleted successfully';
            echoResponse(200, $response);
        } else {
            $response["status"] = "error";
            $response["message"] = "Failed to delete Subject";
            echoResponse(201, $response);
        }
    } else{
        $response["status"] = "error";
        $response["message"] = "Unknown error detected";
        echoResponse(201, $response);
    }
});