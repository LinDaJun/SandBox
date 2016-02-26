<?php
//資料庫設定
	//資料庫位置
		$db_server = "localhost";
		$db_passwd = "g3gp6ji39417";//管理者密碼
		$db_user = "root";
		$db_name = "sandbox";
//對資料庫連線
function mysqlConnect(){
	global $db_server, $db_user, $db_passwd,$db_name;
	if(!@mysql_connect($db_server, $db_user, $db_passwd))
        die($db_server.$db_user.$db_passwd);

	//資料庫連線採UTF8
		mysql_query("SET NAMES utf8");

	//選擇資料庫
		if(!@mysql_select_db($db_name))
			die(mysql_error());
}
?> 