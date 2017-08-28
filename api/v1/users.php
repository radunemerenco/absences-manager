<?php
$app->post('/getTeachers', function() use ($app) {
    $request = json_decode($app->request->getBody());
    $response = array();
    $db = new DbHandler();
    $whereClause = '';
    if(isset($request->userId) && is_int(intval($request->userId))) {
        $whereClause = ' WHERE id_user = '.$request->userId;
    }
    //print_r($request); die();
    $records = $db->getRecords("SELECT t.id AS id, t.id_user, u.first_name AS first_name, u.last_name AS last_name FROM teachers AS t INNER JOIN users AS u ON u.id = t.id_user $whereClause");
    if ($records != NULL) {
        $response = $records;
    }else {
        $response['status'] = "error";
        $response['message'] = 'No such user is registered';
    }
    echoResponse(200, $response);
});

$app->post('/getAbsences', function() use ($app) {
    $request = json_decode($app->request->getBody());
    $response = array();
    $db = new DbHandler();
    if(isset($request->userId) && is_int(intval($request->userId))){
        $userId = $request->userId;
        $dateRangeQuery = "";
        if(isset($request->dateRange)){
            $dateFrom = $request->dateRange->from;
            $dateTo = $request->dateRange->to;
            $dateRangeQuery = " AND (date BETWEEN '$dateFrom' AND '$dateTo') ";
        }
        $query = "SELECT id_user, id_student, absences.id AS absence_id, absences.date AS absence_date, id_session, subjects.full_name AS subject_full_name, subjects.short_name AS subject_short_name FROM students INNER JOIN absences ON id_student = students.id $dateRangeQuery INNER JOIN sessions ON id_session = sessions.id INNER JOIN subjects ON subjects.id = id_subject WHERE id_user = $userId";
        //die($query);
        $records = $db->getRecords($query);

        if ($records != NULL) {
            $response['status'] = "success";
            $response['message'] = 'You have absences';
            $response['absences'] = $records;
        }else {
            $response['status'] = "success";
            $response['message'] = 'You have no absences';
        }
    } else {
        $response['status'] = "error";
        $response['message'] = 'You are not logged in';
    }
    echoResponse(200, $response);
});
$app->post('/getUsers', function() use ($app) {
    $request = json_decode($app->request->getBody());
    $response = array();
    $db = new DbHandler();

    $query = "select users.id as user_id, students.id AS student_id, id_group, groups.name AS group_name, teachers.id AS teacher_id, card_number,first_name,last_name,password,email,phone,address,permissions from users LEFT JOIN students ON students.id_user = users.id LEFT JOIN teachers ON teachers.id_user = users.id LEFT JOIN groups ON groups.id=students.id_group";
    $records = $db->getRecords($query);

    if ($records != NULL) {
        foreach($records as $key => $record){
            $records[$key]['accType'] = array();
            if ($record["student_id"] != null){
                $records[$key]['accType']['student'] = true;
            }
            if ($record["teacher_id"] != null){
                $records[$key]['accType']['teacher'] = true;
            }
            if ($record["permissions"] == 'admin'){
                $records[$key]['accType']['admin'] = true;
            }
        }
        //print_r($records); die();

        $response['status'] = "success";
        $response['message'] = 'You have absences';
        $response['users'] = $records;
    }else {
        $response['status'] = "success";
        $response['message'] = 'You have no absences';
    }
    echoResponse(200, $response);
});
$app->post('/changePermissions', function() use ($app) {
    $request = json_decode($app->request->getBody());
    $response = array();
    $db = new DbHandler();
    if(isset($request->userId) && is_int(intval($request->userId))) {
        $userId = $request->userId;
        $permission = $request->permission;
        $method = $request->method;
        //echo($method);die();
        if ($permission == 'admin') {
            $newPermission = $method == 'set' ? 'admin' : '';
            $result = $db->updateRow(array('permissions' => $newPermission), array('permissions'), "users", "id = $userId");
        } else {
            $breakFunction = false;
            if ($permission == 'student') {
                $tableName = 'students';
            }
            else if ($permission == 'teacher') {
                $tableName = 'teachers';
            } else {
                $response['status'] = "error";
                $response['message'] = 'Unknown error was detected';
                $breakFunction = true;
            }
            if (!$breakFunction && $method == 'unset') {
                $result = $db->deleteRecord($tableName, "id_user = $userId");
            }
            if (!$breakFunction && $method == 'set') {
                $result = $db->insertIntoTable(array('id_user' => $userId), array('id_user'), $tableName);
            }
        }
        //$query = "SELECT id_user, id_student, absences.id AS absence_id, absences.date AS absence_date, id_session, subjects.full_name AS subject_full_name, subjects.short_name AS subject_short_name FROM students INNER JOIN absences ON id_student = students.id $dateRangeQuery INNER JOIN sessions ON id_session = sessions.id INNER JOIN subjects ON subjects.id = id_subject WHERE id_user = $userId";
        //die($query);

        if ($result != NULL) {
            $response["status"] = "success";
            $response["message"] = "Permissions successfully changed";
        }else {
            $response['status'] = "success";
            $response['message'] = 'You have no absences';
        }
    } else {
        $response['status'] = "error";
        $response['message'] = 'You are not logged in';
    }
    echoResponse(200, $response);
});
