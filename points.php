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
  <div class="main main__points">
    <div class="main__container container">
      <div class="points"> 
        <ul class="nav nav_page">
          <li class="nav__item nav__item-bottom"><a href="#">Заказы</a></li>
          <li class="nav__item nav__item-bottom"><a href="#">Избранное</a></li>
          <li class="nav__item nav__item-bottom nav__item_is-active"><a href="#">Цветочные баллы</a></li>
          <li class="nav__item nav__item-bottom"><a href="#">Важные даты</a></li>
          <li class="nav__item nav__item-bottom"><a href="data.php">Личные данные</a></li>
        </ul>
        <div class="points__text">
          <div class="cvety-title">230 цветочных баллов</div>
          <p class="cvety-p">За каждый заказ вам начисляются баллы. Накапливайте и тратьте при следующей покупке.</p>
        </div>
        <div class="points__calendar-rows">
          <div class="points__calendar-row">
            <div class="points__calendar-column">Дата</div>
            <div class="points__calendar-column">Заказ</div>
            <div class="points__calendar-column">Баллы</div>
          </div>
          <div class="points__calendar-row">
            <div class="points__calendar-column">21 апр 2019</div>
            <div class="points__calendar-column">№456676</div>
            <div class="points__calendar-column">76</div>
          </div>
          <div class="points__calendar-row">
            <div class="points__calendar-column">21 апр 2019</div>
            <div class="points__calendar-column">№111111</div>
            <div class="points__calendar-column">11</div>
          </div>
          <div class="points__calendar-row">
            <div class="points__calendar-column">21 апр 2019</div>
            <div class="points__calendar-column">№222222</div>
            <div class="points__calendar-column">456</div>
          </div>
          <div class="points__calendar-row">
            <div class="points__calendar-column">21 апр 2019</div>
            <div class="points__calendar-column">№333333</div>
            <div class="points__calendar-column">232</div>
          </div>
          <div class="points__calendar-row">
            <div class="points__calendar-column">21 апр 2019</div>
            <div class="points__calendar-column">№222222</div>
            <div class="points__calendar-column">- 989</div>
          </div>
          <div class="points__calendar-row">
            <div class="points__calendar-column">Итого</div>
            <div class="points__calendar-column text-rigth">99</div>
          </div>
        </div>
      </div>
    </div>
  </div>
<?php include 'footer.php';?>
</body>

</html>
