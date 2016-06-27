<?php
$data = array(
	'http://upqode.com/shcool/images/statue-1275469_640.jpg',
	'http://upqode.com/shcool/images/fruit-1275551_640.jpg',
	'http://upqode.com/shcool/images/squirrel-1401509_640.jpg',
	'http://upqode.com/shcool/images/water-lily-1442497_640.jpg',
	'http://upqode.com/shcool/images/bottles-392689_640.jpg',
	'http://upqode.com/shcool/images/olive-oil-1412361_640.jpg',
);

if (!empty($_POST['count_image'])) {
	array_splice($data, $_POST['count_image']);
}

echo json_encode($data); 






