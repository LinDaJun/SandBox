<?
	$_type = $_GET['type'];
	include("option.php");
	mysqlConnect();
	$sql = "SELECT * FROM type";
	$result = mysql_query($sql);
	$data = Array();
	while($row = mysql_fetch_row($result)){
		$Item = Array();
		$sql = "SELECT * FROM model where type = '$row[0]'";
		$res = mysql_query($sql);
		while($r = mysql_fetch_assoc($res)){
			array_push($Item,$r);
		}
		$type = Array("type"=>$row[0],"name"=>$row[1],"Data"=>$Item);
		array_push($data,$type);
	}
	echo json_encode($data);
?>