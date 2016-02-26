<?php
//資料庫設定
	//資料庫位置
		$db_server = "mysql.hostinger.com.hk";
		$db_passwd = "MDeWyJfa64";//管理者密碼
		$db_user = "u336211189_sb";
		$db_name = "u336211189_sb";
//對資料庫連線
function mysqlConnect(){
	global $db_server, $db_user, $db_passwd,$db_name;
	if(!@mysql_connect($db_server, $db_user, $db_passwd))
        die("Cann`t connect");

	//資料庫連線採UTF8
		mysql_query("SET NAMES utf8");

	//選擇資料庫
		if(!@mysql_select_db($db_name))
			die(mysql_error());
}
?> 