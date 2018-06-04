/* Task 1 */
/* Task 1 */
var heading =document.getElementById('heading')
console.log(heading.innerText)

/* Task 2 using plain JavaScript */
function addText2(){
    var task2div = document.getElementById('task2a')
    var paragraph =document.createElement('p')
    paragraph.innerText ="Hello World"
    task2div.appendChild(paragraph)
}
var textBtn =document.getElementById('textBtn2a')
  textBtn2a.addEventListener('click',addText2)


/* Task 4 using jQuery */
//Task2B
function changeBGColor(event){
    var body = document.getElementByTagName('body')[0]
    if(event.target.innerText=="Red"){
        body.style.backgroundColor='red'
    }
    if(even.target.innerText=="Green"){
        body.style.backgroundColor='green'
    }
}
//Task2C
function redirectToGoogle(){
    window.location.assign(www.google.com)
}
//task4a
$('#addText4').click(function(event){
    var paragraph = $('<p>').text("Hello World");
    $('#task4a').append(paragaraph);
});
//Task4B
function chnageBG(event){
    var color = event.target.innerText.toLowerCase();
    $('body').css('background-Color, color');
}
//Task 4C
$('#sum').click(function(event){
    var sum = $('#num1').val() + $('#num2').val()
    $('#answer').text(sum)
})