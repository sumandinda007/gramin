<?php
include_once '../../server/connection.php';
$conn = new Connection();
$jsonData = array();

if (isset($_REQUEST['userkey'])){
	$key = $_REQUEST['userkey'];

	$sql = "SELECT * FROM stock_list WHERE user_unique = '$key'";
	
	$result = $conn -> getAll($sql);
	$nbrUsers = count($result);
	if($nbrUsers >0){
		foreach ($result as $res) {
				$jsonData[] = $res;
			}
		print(json_encode($jsonData));
	}else{
		print("No Data Found");
	}
}
?>