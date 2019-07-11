alert("Welcome to my Quiz! Please answer the following questions to see how well you know me! Answers will be shown at the end.");

var score = 0;

var correctAnswer = "Correct";
var wrongAnswer = "Wrong";

// Q1
var correctMiddleName = "VANESSA";

var middleName = prompt("What's my middle name?");
var middleNameAnswer = middleName.toUpperCase();
    
if (middleNameAnswer === correctMiddleName) {
    score += 1;
    alert(correctAnswer);

} else {
    alert(wrongAnswer);
}
 
// Q2
var correctFavoriteColor = "PINK";

var favoriteColor = prompt("What's my favorite color?");
var favoriteColorAnswer = favoriteColor.toUpperCase();

if (favoriteColorAnswer === correctFavoriteColor) {
    score += 1;
    alert(correctAnswer);
} else {
    alert(wrongAnswer);
}
 
// Q3
var correctBirthDate = "09/03/87";

var birthDate = prompt("When's my birth date? (MM/DD/YY)");

if (birthDate === correctBirthDate) {
    score += 1;
    alert(correctAnswer);
} else {
    alert(wrongAnswer);
}
 
// Q4
var correctBirthCity = "CARACAS";

var birthCity = prompt("What city was I born in?");
var birthCityAnswer = birthCity.toUpperCase();

if (birthCityAnswer === correctBirthCity) {
    score += 1;
    alert(correctAnswer);
} else {
    alert(wrongAnswer);
}

// Q5
var correctCity = "PEMBROKE PINES";

var city = prompt("What city did I grow up in?");
var cityAnswer = city.toUpperCase();

if (cityAnswer === correctCity) {
    score += 1;
    alert(correctAnswer);
} else {
    alert(wrongAnswer);
}

//Answers

//Q1A
if (middleNameAnswer === correctMiddleName) {
  document.write("<h3>Question 1</h3> <p>was correct! </p><h5>" + correctMiddleName + "</h5><p> is my middle name!</p><br>");
} else {
  document.write("<h3>Question 1</h3> <p>was wrong! </p><h4>" + middleName + "</h4><p> is not my middle name, </p><h5>" + correctMiddleName + "</h5><p> is!</p><br>");
}

//Q2A
if (favoriteColorAnswer === correctFavoriteColor) {
  document.write("<h3>Question 2</h3> <p>was correct! </p><h5>" + correctFavoriteColor + "</h5><p> is my favorite color!</p><br>");
} else {
  document.write("<h3>Question 2</h3> <p>was wrong! </p><h4>" + favoriteColor + "</h4><p> is not my favorite color, </p><h5>" + correctFavoriteColor + "</h5><p> is!</p><br>");
}

//Q3A
if (birthDate === correctBirthDate) {
  document.write("<h3>Question 3</h3> <p>was correct! </p><h5>" + correctBirthDate + "</h5><p> is my birth date!</p><br>");
} else {
  document.write("<h3>Question 3</h3> <p>was wrong! </p><h4>" + birthDate + "</h4><p> is not my birth date, </p><h5>" + correctBirthDate + "</h5><p> is!</p><br>");
}

//Q4A
if (birthCityAnswer === correctBirthCity) {
  document.write("<h3>Question 4</h3> <p>was correct! </p><h5>" + correctBirthCity + "</h5><p> is where I was born!</p><br>");
} else {
  document.write("<h3>Question 4</h3> <p>was wrong! </p><h4>" + birthCity + "</h4><p> is not where I was born, </p><h5>" + correctBirthCity + "</h5><p> is!</p><br>");
}

//Q5A
if (cityAnswer === correctCity) {
  document.write("<h3>Question 5</h3> <p>was correct! </p><h5>" + correctCity + "</h5><p> is where I grew up!</p><br>");
} else {
  document.write("<h3>Question 5</h3> <p>was wrong! </p><h4>" + city + "</h4><p> is not where I grew up, </p><h5>" + correctCity + "</h5><p> is!</p><br>");
}

//TOTAL
if ( score === 5 ) {
document.write("<h3>You did great! You know me very well! You earned a gold star!</h3>");
} else if ( score >= 3 ) {
document.write("<h3>You did ok! You sort of know me! You earned a silver star!</h3>");
} else if ( score >=1 ) {
document.write("<h3>You did horrible! You barely know me! You earned a copper star!</h3>");
} else if( score === 0) {
document.write("<h3>Do you even know me at all?! #FAIL</h3>");
} 