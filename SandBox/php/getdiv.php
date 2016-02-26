<?
	include("option.php");
	mysqlConnect();
	$sql = "SELECT * FROM type";
	$result = mysql_query($sql);
	$data = Array();
	while($row = mysql_fetch_assoc($result)){
		array_push($data,$row["name"]);
	}
	echo json_encode($data);
?>