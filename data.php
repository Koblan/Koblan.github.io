<!DOCTYPE html>
<html lang="ru">

<head>
	<meta charset="utf-8">
	<meta http-equiv="x-ua-compatible" content="ie=edge">
	<title>Cvety.kz</title>
	<meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1">
	<link href="favicon.ico" rel="icon" type="image/x-icon">
	<link href="static/css/app.css?e98708c30085ee30d10ec7b747e9ea3c" rel="stylesheet">
	<link href="static/css/style.css" rel="stylesheet">

</head>


<body>
	<?php include 'header.php';?>
	<div class="main main__data">
		<div class="main__container container">
			<div class="data">
				<ul class="nav nav_page">
					<li class="nav__item nav__item-bottom"><a href="#">Заказы</a></li>
					<li class="nav__item nav__item-bottom"><a href="#">Избранное</a></li>
					<li class="nav__item nav__item-bottom "><a href="points.php">Цветочные баллы</a></li>
					<li class="nav__item nav__item-bottom"><a href="#">Важные даты</a></li>
					<li class="nav__item nav__item-bottom nav__item_is-active"><a href="#">Личные данные</a></li>
				</ul>
				<h1 class="cvety-title">
					Личные данные 
				</h1>
				<form action="#" class="data__form">
					
					<label for="email">
						<span>Почта</span>
						<input type="email" name="email">
					</label>
					<label for="tel">
						<span>Телефон</span>
						<input type="tel" name="tel">
					</label>
					<label for="date" class="data__form-date">
						<span>Дата рождение</span>
						<input id="date-input" type="text" name="date">
						<svg  class=" date-svg"  width="15" height="10" viewBox="0 0 15 10" fill="none" xmlns="http://www.w3.org/2000/svg">
							<path d="M14 1L7.5 8L1 1" stroke="#828282" stroke-width="1.4173" stroke-miterlimit="10"/>
						</svg>

					</label>
					<p class="data__form-p">
					Пришлем подарок на ваш праздник ;)</p>
					<label for="card">
						<span>Карта</span>
						<input type="text" name="card">
					</label>
					<div class="data__form-btn">
						<input type="button" value="Сохранить">
					</div>]
				</form>
			</div>
		</div>
	</div>
	<?php include 'footer.php';?>
	<script src="https://code.jquery.com/jquery-1.10.2.min.js"></script>
	<script>
		$( "#date-input" ).focus(function() {

			document.querySelector(".date-svg").classList.add('active');
		});$( "#date-input" ).blur(function() {

			document.querySelector(".date-svg").classList.remove('active');
		});
	</script>
</body>