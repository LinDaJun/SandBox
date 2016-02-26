<?
	$_type = $_GET['type'];
	include("option.php");
	mysqlConnect();
	$sql = "SELECT * FROM model where type = '$_type'";
	$result = mysql_query($sql);
	$data = Array();
	while($row = mysql_fetch_assoc($result)){
		array_push($data,$row);
	}
	$out = Array("type"=>$_type,"Data"=>$data);
	echo json_encode($out);
?>