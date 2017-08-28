<?php
$app->post('/getTimes', function() use ($app) {
    $response = array();
    $db = new DbHandler();
    $times = $db->getRecords("select * from session_times");
    if ($times != NULL) {
        $response = $times;
    }else {
        $response['status'] = "error";
        $response['message'] = 'No such user is registered';
    }
    echoResponse(200, $response);
});
$app->post('/getSubjects', function() use ($app) {
    $response = array();
    $db = new DbHandler();
    $times = $db->getRecords("select * from subjects");
    if ($times != NULL) {
        $response = $times;
    }else {
        $response['status'] = "error";
        $response['message'] = 'No such user is registered';
    }
    echoResponse(200, $response);
});
$app->post('/getDays', function() use ($app) {
    $response = array();
    $db = new DbHandler();
    $days = $db->getRecords("select * from days");
    if ($days != NULL) {
        $response = $days;
    }else {
        $response['status'] = "error";
        $response['message'] = 'No such user is registered';
    }
    echoResponse(200, $response);
});

$app->post('/changeAbsence', function() use ($app) {
    $request = json_decode($app->request->getBody());
    $response = array();
    $db = new DbHandler();
    if(isset($request->absence) && is_int(intval($request->absence))){
        $table_name = "absences";
        $where = "`id` = $request->absence";
        if($db->deleteRecord($table_name, $where) === TRUE){
            $response['status'] = "success";
            $response['message'] = 'Absence deleted';
            echoResponse(200, $response);
        } else {
            $response["status"] = "error";
            $response["message"] = "Failed to delete absence";
            echoResponse(201, $response);
        }
    } else{
        $tabble_name = "absences";
        $column_names = array('id_student', 'id_session', 'date');
        $dataArray = array('id_student' => $request->studentId, 'id_session' => $request->sessionId, 'date' => $request->sessionDate);
        $result = $db->insertIntoTable($dataArray, $column_names, $tabble_name);
        if ($result != NULL) {
            $response["status"] = "success";
            $response["message"] = "Absence added";
            $response["absence"] = $result;
            echoResponse(200, $response);
        } else {
            $response["status"] = "error";
            $response["message"] = "Failed to add absence";
            echoResponse(201, $response);
        }
    }
});
$app->post('/getSessionsList', function() use ($app) {
    $request = json_decode($app->request->getBody());
    $response = array();
    $db = new DbHandler();
    if(isset($request->sessionTeacher) && is_int(intval($request->sessionTeacher))){
        $db->addWhereAnd("id_teacher = $request->sessionTeacher");
    }
    if(isset($request->sessionSubject) && is_int(intval($request->sessionSubject))){
        $db->addWhereAnd("id_subject = $request->sessionSubject");
    }
    if(isset($request->sessionTime) && is_int(intval($request->sessionTime))){
        $db->addWhereAnd("id_time = $request->sessionTime");
    }
    if(isset($request->sessionGroups) && sizeof($request->sessionGroups)){
        foreach($request->sessionGroups as $group){
            $db->addWhereOr("groups.id = $group->id");
        }
    }
    $select = "SELECT DATE_FORMAT(st.time_start,'%H:%i') AS time_start, DATE_FORMAT(st.time_end,'%H:%i') AS time_end, s.id AS session_id, days.id AS day_id, days.name AS day_name, teachers.id AS teacher_id, u.first_name, u.last_name, subjects.short_name AS subject_short_name, subjects.full_name AS subject_full_name, groups.name AS gr_name FROM sessions AS s INNER JOIN teachers ON teachers.id = s.id_teacher INNER JOIN users AS u ON u.id = teachers.id_user INNER JOIN subjects ON subjects.id = s.id_subject RIGHT JOIN session_groups AS sg ON sg.id_session = s.id RIGHT JOIN groups ON sg.id_group = groups.id INNER JOIN session_times AS st ON s.id_time = st.id INNER JOIN days ON days.id = s.id_day ".$db->getWhere()." ORDER BY groups.name";
    $result = $db->getRecords($select);
    if ($result != NULL) {
        $response["status"] = "success";
        $response["message"] = "Sessions selected from DB";
        $response["sessions"] = $result;
        echoResponse(200, $response);
    } else {
        $response["status"] = "error";
        $response["message"] = "Failed to load data from DB";
        echoResponse(201, $response);
    }
});
function validateDate($date){
    $d = DateTime::createFromFormat('Y-m-d', $date);
    return $d && $d->format('Y-m-d') == $date;
}
$app->post('/getGroupsAtSession', function() use ($app) {
    $request = json_decode($app->request->getBody());
    $response = array();
    $db = new DbHandler();
    if(isset($request->sessionId) && is_int(intval($request->sessionId)) && isset($request->sessionDate) && validateDate($request->sessionDate)){
        $select = "SELECT sg.id_session, sg.id_group, gr.name AS group_name, st.id as id_student, us.card_number, us.first_name, us.last_name, abs.date, abs.id AS absence_id FROM session_groups AS sg INNER JOIN students AS st ON st.id_group = sg.id_group INNER JOIN groups AS gr ON gr.id = sg.id_group INNER JOIN users AS us ON us.id = st.id_user LEFT JOIN absences AS abs ON abs.id_session = sg.id_session AND abs.id_student = st.id AND abs.date = '$request->sessionDate' WHERE sg.id_session = $request->sessionId ORDER BY last_name";
        $result = $db->getRecords($select);
        if ($result != NULL) {
            $response["status"] = "success";
            $response["message"] = "Sessions selected from DB";
            $response["absences"] = $result;
            echoResponse(200, $response);
        } else {
            $response["status"] = "error";
            $response["message"] = "Failed to load data from DB";
            echoResponse(201, $response);
        }
    } else {
        $response["status"] = "error";
        $response["message"] = "Wrong data provided";
        echoResponse(201, $response);
    }
});

$app->post('/deleteSubject', function() use ($app) {
    $request = json_decode($app->request->getBody());
    $response = array();
    $db = new DbHandler();
    if(isset($request->subjectId) && is_int(intval($request->subjectId))) {
        if($result = $db->deleteRecord('subjects', "id = $request->subjectId") === TRUE){
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
$app->post('/subjectCreate', function() use ($app) {
    $request = json_decode($app->request->getBody());
    $response = array();
    $db = new DbHandler();
    if(isset($request->shortName) && isset($request->fullName)){
        $table_name = "subjects";
        $column_names = array('short_name','full_name');
        $dataArray = array('short_name' => $request->shortName,'full_name' => $request->fullName);
        $result = $db->insertIntoTable($dataArray, $column_names, $table_name);
        if ($result != NULL) {
            $response["status"] = "success";
            $response["message"] = "Subject created";
            $response["absence"] = $result;
            echoResponse(200, $response);
        } else {
            $response["status"] = "error";
            $response["message"] = "Failed to create subject";
            echoResponse(201, $response);
        }
    } else {
        $response["status"] = "error";
        $response["message"] = "Please, fill blank fields";
        echoResponse(201, $response);
    }
});

$app->post('/deleteSession', function() use ($app) {
    $request = json_decode($app->request->getBody());
    $response = array();
    $db = new DbHandler();
    if(isset($request->sessionId) && is_int(intval($request->sessionId))) {
        if($result = $db->deleteRecord('sessions', "id = $request->sessionId") === TRUE){
            $response['status'] = "success";
            $response['message'] = 'Session deleted successfully';
            echoResponse(200, $response);
        } else {
            $response["status"] = "error";
            $response["message"] = "Failed to delete Session";
            echoResponse(201, $response);
        }
    } else{
        $response["status"] = "error";
        $response["message"] = "Unknown error detected";
        echoResponse(201, $response);
    }
});
$app->post('/sessionCreate', function() use ($app) {
    $request = json_decode($app->request->getBody());
    $response = array();
    $db = new DbHandler();
    if(isset($request->sessionObj)
        && isset($request->sessionObj->groups) && sizeof($request->sessionObj->groups)
        && isset($request->sessionObj->day) && $request->sessionObj->day > 0
        && isset($request->sessionObj->time) && $request->sessionObj->time > 0
        && isset($request->sessionObj->subject) && $request->sessionObj->subject > 0
        && isset($request->sessionObj->teacher) && $request->sessionObj->teacher > 0
    ){
        $table_name = "sessions";
        $column_names = array('id_day','id_time','id_subject','id_teacher');
        $dataArray = array(
            'id_day' => $request->sessionObj->day,
            'id_time' => $request->sessionObj->time,
            'id_subject' => $request->sessionObj->subject,
            'id_teacher' => $request->sessionObj->teacher
        );
        $result = $db->insertIntoTable($dataArray, $column_names, $table_name);
        if ($result != NULL) {
            $sessionId = $result;
            $table_name = "session_groups";
            $column_names = array('id_session','id_group');
            foreach($request->sessionObj->groups as $group){
                $dataArray = array(
                    'id_session' => $sessionId,
                    'id_group' => $group->id
                );
                $result = $db->insertIntoTable($dataArray, $column_names, $table_name);
            }

            if ($result != NULL) {
                $response["status"] = "success";
                $response["message"] = "Session created";
                $response["session"] = $result;
                echoResponse(200, $response);
            } else {
                $response["status"] = "error";
                $response["message"] = "Failed to create Session";
                echoResponse(201, $response);
            }
        } else {
            $response["status"] = "error";
            $response["message"] = "Failed to create Session";
            echoResponse(201, $response);
        }
    } else {
        $response["status"] = "error";
        $response["message"] = "Please, fill blank fields";
        echoResponse(201, $response);
    }
});

/*SELECT s.id AS session_id, days.id AS day_id, days.name AS day_name teachers.id AS teacher_id, u.first_name, u.last_name, subjects.short_name AS subject_short_name, subjects.full_name AS subject_full_name, groups.name AS gr_name
FROM sessions AS s
INNER JOIN teachers ON teachers.id = s.id_teacher
INNER JOIN users AS u ON u.id = teachers.id_user
INNER JOIN subjects ON subjects.id = s.id_subject
INNER JOIN session_groups AS sg ON sg.id_session = s.id
INNER JOIN groups ON sg.id_group = groups.id
INNER JOIN session_times AS st ON s.id_time = st.id
INNER JOIN days ON days.id = s.id_day
WHERE id_subject = 3
ORDER BY session_id*/