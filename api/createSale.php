<?php
include_once '../server/connection.php';
$conn = new Connection();
$sale_comment = $_REQUEST['internal_note'];
$sale_chalan = $_REQUEST['sale_chalan'];
$sale_custadd = $_REQUEST['sale_custadd'];
$sale_custlocation = $_REQUEST['sale_custlocation'];
$sale_custmobile = $_REQUEST['sale_custmobile'];
$sale_customer = $_REQUEST['sale_customer'];
$sale_date = $_REQUEST['sale_date'];
$sale_no = $_REQUEST['sale_no'];
$sale_product = $_REQUEST['sale_product'];
$sale_totalBill = $_REQUEST['totalBill'];
$user_key = $_COOKIE['userkey'];
$user_id = $_COOKIE['user_id'];
$payMode = $_REQUEST['sale_payment'];
$result ="";
$updateResponse="";

$cart = json_decode($_REQUEST['cart'],true);
for($i=0;$i<count($cart);$i++){
	$pcode = $cart[$i]['product_code'];
	$pname = $cart[$i]['product_name'];
	$pcategory = $cart[$i]['product_category'];
	$pid = $cart[$i]['product_id'];
	$pquantity = $cart[$i]['product_quantity'];
	$pmrp = $cart[$i]['product_mrp'];
	$ptax = $cart[$i]['product_tax'];
	$cStock = $cart[$i]['product_stock'];

	$sql = "INSERT INTO `sales` (`sale_no`,`sale_chalan`,`sale_date`,`sale_customer`,`sale_custmobile`,`sale_custlocation`,`sale_custaddress`,`sale_pcode`,`sale_pname`,`sale_pcategory`,`sale_pid`,`sale_pquantity`,`sale_pmrp`,`sale_ptax`,`sale_totbill`,`sale_note`,`sale_userunique`,`sale_paymode`) VALUES('$sale_no','$sale_chalan','$sale_date','$sale_customer','$sale_custmobile','$sale_custlocation','$sale_custadd','$pcode','$pname','$pcategory','$pid','$pquantity','$pmrp','$ptax','$sale_totalBill','$sale_comment','$user_key','$payMode')";

	$result = $conn->execute($sql);

	$updateStock = "UPDATE `stock_list` SET `stock_unit` = '$cStock' WHERE `product_id`='$pid' AND `user_unique`='$user_key'";
	$updateResponse = $conn ->execute($updateStock);

}
print_r($result."-".$updateResponse);


?>