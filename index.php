<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>U.S. Weather Tracker</title>
    <link rel="stylesheet" href="css/main.css" type="text/css">
</head>
<body>
<header>
    <h1>U.S. Weather Tracker</h1>
    <hr>
</header>
<main>
    <div id="weather-container">
        <div id="main-weather">
            <div id="weather-status"></div>
        </div>
        <div id="misc">
            <span class="misc" id="temp-actual"></span>
            <span class="misc" id="temp-feels-like"></span>
            <span class="misc" id="humidity"></span>
            <span class="misc" id="wind-speed"></span>
        </div>
    </div>
    <div id="city-container">
        <div id="instructions">Enter U.S. city</div>
        <input type="text" id="city-input">
        <div hidden id="validation">Invalid city name</div>
    </div>
</main>
<footer>
    <img id="csumb-img" src="./img/csumb.png" alt="Picture of CSUMB icon"/>
    <div>CST336 Internet Programming. 2020&copy; Ryan Barrett</div>
    <br/>
</footer>
<script src="js/main.js"></script>
</body>
</html>
