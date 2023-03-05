<!DOCTYPE html>
<html lang="es">
<head>
	<meta charset="UTF-8">
	<meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1">
    <meta name="viewport" content="width=device-width">
	<title>Home</title>

	<link rel="stylesheet" href="../styles.css">
	

</head>
<body>


     	<?php
		$vid=$_GET['v'];
		if($vid=='1'){
	?>
		<video  id="myVideo" autoplay width="100%" height="100%" style="position: absolute; margin-left: -770px;">
			<source src="../video/admision.mp4" type="video/mp4">
		</video>
	<?php
		}
		else if($vid=='2'){
	?>
		<video  id="myVideo" autoplay width="100%" height="100%" style="position: absolute; margin-left: -770px;">
			<source src="../video/beca.mp4" type="video/mp4">
		</video>
	<?php
		}
		else if($vid=='3'){
	?>
		<video  id="myVideo" autoplay width="100%" height="100%" style="position: absolute; margin-left: -770px;">
			<source src="../video/traspasodep.mp4" type="video/mp4">
		</video>
	<?php
		}
		else if($vid=='4'){
	?>
		<video  id="myVideo" autoplay width="100%" height="100%" style="position: absolute; margin-left: -770px;">
			<source src="../video/rector.mp4" type="video/mp4">
		</video>

	<?php
		}
		else if($vid=='5'){
	?>
		<video  id="myVideo" autoplay width="100%" height="100%" style="position: absolute; margin-left: -770px;">
			<source src="../video/inicioclases.mp4" type="video/mp4">
		</video>


	<?php
		}
		else if($vid=='6'){
	?>
		<video  id="myVideo" autoplay width="100%" height="100%" style="position: absolute; margin-left: -770px;">
			<source src="../video/paa.mp4" type="video/mp4">
		</video>

	<?php
		}
		else if($vid=='7'){
	?>
		<video  id="myVideo" autoplay width="100%" height="100%" style="position: absolute; margin-left: -770px;">
			<source src="../video/prepa.mp4" type="video/mp4">
		</video>

	<?php
		}
		else if($vid=='8'){
	?>
		<video  id="myVideo" autoplay width="100%" height="100%" style="position: absolute; margin-left: -770px;">
			<source src="../video/campusscz.mp4" type="video/mp4">
		</video>

	<?php
		}
		else if($vid=='9'){
	?>
		<video  id="myVideo" autoplay width="100%" height="100%" style="position: absolute; margin-left: -770px;">
			<source src="../video/incritos2023.mp4" type="video/mp4">
		</video>

	<?php
		}
		else if($vid=='10'){
	?>
		<video  id="myVideo" autoplay width="100%" height="100%" style="position: absolute; margin-left: -770px;">
			<source src="../video/rankin.mp4" type="video/mp4">
		</video>

	<?php
		}
		else if(empty($vid)){
	?>
		<img src="../video/menu.png" style="width: 77.5%; height: 100%; position: absolute; margin-left: -38.7%;">


	<?php
		}
		else{
	?>
		
		<video  id="myVideo" autoplay width="100%" height="100%" style="position: absolute; margin-left: -770px;">
			<source src="../video/undef.mp4" type="video/mp4">
		</video>

	<?php
		}
	?>
<br>

	<button><img alt="comienzo" id="start_img" src="imagenes/mic.gif" style="position: absolute; margin-top: 10px"></button>


	<div>
        <p class="error"></p>     
    </div>

	<script type="text/javascript" src="../main.js"></script>
		
</body>
</html>
