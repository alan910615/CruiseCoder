<?php
include("../frontEnd/layout/connect.php");

$AllGalStatement = "SELECT gName FROM cruisecoder.galaxy";
$GalStatement = "SELECT * FROM cruisecoder.galaxy WHERE gName like ?";


$AllGalStatement = $pdo->prepare($AllGalStatement);
$GalStatement = $pdo->prepare($GalStatement);

$AllGalStatement->execute();


if (isset($_POST["selectField"])) {

    $selectField = $_POST["selectField"];

    $GalStatement->bindValue(1, $selectField);

    $GalStatement->execute();

    $data = [];

    array_push($data, $AllGalStatement->fetchAll(PDO::FETCH_ASSOC), $GalStatement->fetchAll(PDO::FETCH_ASSOC));

    echo json_encode($data);
    // print_r($data);
}

$OffGalStatement = "UPDATE `cruisecoder`.`galaxy` SET `gStatus` = '0' WHERE (`gNumber` = 'G0001');";
$OffQuizStatement = "UPDATE `cruisecoder`.`quiz` SET `qState` = '0' WHERE (`qNumber` = 'Q0001');";

$OffGalStatement = $pdo->prepare($OffGalStatement);
$OffQuizStatement = $pdo->prepare($OffQuizStatement);


// 傳陣列如何送到sql語法中？
if (isset($_POST["offId"])) {

    $galaxyName = $_POST["offId"];
    print_r($galaxyName);

    // $OffGalStatement->execute();
    // $OffQuizStatement->execute();
}
