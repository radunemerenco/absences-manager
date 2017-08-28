<?php

class DbHandler {

    private $conn;
    private $whereClause;

    function __construct() {
        require_once 'dbConnect.php';
        // opening db connection
        $db = new dbConnect();
        $this->conn = $db->connect();
        $this->whereClause = "";
    }
    /**
     * Fetching records
     */
    public function getRecords($query) {
        $r = $this->conn->query($query) or die($this->conn->error.__LINE__);
        $result = array();
        while($row = $r->fetch_assoc()){
            $result[] = $row;
        }
        return $result;
    }
    /**
     * Fetching single record
     */
    public function deleteRecord($table_name, $where) {
        $r = $this->conn->query("DELETE FROM `$table_name` WHERE `$table_name`.$where") or die($this->conn->error.__LINE__);
        return true;
    }
    /**
     * Fetching single record
     */
    public function getOneRecord($query) {
        $r = $this->conn->query($query.' LIMIT 1') or die($this->conn->error.__LINE__);
        return $result = $r->fetch_assoc();
    }
    /**
     * Creating new record
     */
    public function insertIntoTable($obj, $column_names, $table_name) {

        $c = (array) $obj;
        $keys = array_keys($c);
        $columns = '';
        $values = '';
        foreach($column_names as $desired_key){ // Check the obj received. If blank insert blank into the array.
           if(!in_array($desired_key, $keys)) {
                $$desired_key = '';
            }else{
                $$desired_key = $c[$desired_key];
            }
            $columns = $columns.$desired_key.',';
            $values = $values."'".$$desired_key."',";
        }
        $query = "INSERT INTO ".$table_name."(".trim($columns,',').") VALUES(".trim($values,',').")";
        $r = $this->conn->query($query) or die($this->conn->error.__LINE__);

        if ($r) {
            $new_row_id = $this->conn->insert_id;
            return $new_row_id;
            } else {
            return NULL;
        }
    }
    /**
     * Update record
     */
    public function updateRow($obj, $column_names, $table_name, $where) {

        $c = (array) $obj;
        $keys = array_keys($c);
        $columns = '';
        foreach($column_names as $desired_key){ // Check the obj received. If blank insert blank into the array.
           if(!in_array($desired_key, $keys)) {
                $$desired_key = '';
            }else{
                $$desired_key = $c[$desired_key];
            }
            $columns = $columns.$desired_key.'="'.$$desired_key.'",';
        }
        $columns = rtrim($columns, ",");
        $query = "UPDATE ".$table_name." SET ".$columns.' WHERE '.$where;
        //die($query);
        $r = $this->conn->query($query) or die($this->conn->error.__LINE__);
        if ($r) {
            return $r;
            } else {
            return NULL;
        }
    }
    public function getSession(){
        if (!isset($_SESSION)) {
            session_start();
        }
        $sess = array();
        if(isset($_SESSION['id'])) {
            $sess["id"] = $_SESSION['id'];
            $sess["cardNumber"] = $_SESSION['cardNumber'];
            $sess["firstName"] = $_SESSION['firstName'];
            $sess["lastName"] = $_SESSION['lastName'];
            $sess["email"] = $_SESSION['email'];
            $sess["phone"] = $_SESSION['phone'];
            $sess["address"] = $_SESSION['address'];
            $sess["accountType"] = $_SESSION['accountType'];
        } else {
            $sess["id"] = '';
            $sess["cardNumber"] = '';
            $sess["firstName"] = 'Guest';
            $sess["lastName"] = '';
            $sess["email"] = '';
            $sess["phone"] = '';
            $sess["address"] = '';
            $sess["accountType"] = '';
        }
        return $sess;
    }
    public function destroySession(){
        if (!isset($_SESSION)) {
        session_start();
        }
        if(isSet($_SESSION['id']))
        {
            unset($_SESSION['id']);
            unset($_SESSION['cardNumber']);
            unset($_SESSION['firstName']);
            unset($_SESSION['lastName']);
            unset($_SESSION['email']);
            unset($_SESSION['phone']);
            unset($_SESSION['address']);
            unset($_SESSION['accountType']);
            $info='info';
            if(isSet($_COOKIE[$info]))
            {
                setcookie ($info, '', time() - $cookie_time);
            }
            $msg="Logged Out Successfully...";
        }
        else
        {
            $msg = "Not logged in...";
        }
        return $msg;
    }
    public function addWhereAnd($whereClause){
        if(strlen($this->whereClause) > 0){
            $this->whereClause .= " AND ".$whereClause;
        }
        else{
            $this->whereClause = " WHERE ".$whereClause;
        }
    }
    public function addWhereOr($whereClause){
        if(strlen($this->whereClause) > 0){
            $this->whereClause .= " OR ".$whereClause;
        }
        else{
            $this->whereClause = " WHERE ".$whereClause;
        }
    }
    public function getWhere(){
        return $this->whereClause;
    }
}
?>
