'use strict';

let quiz_data;
let question_number = 0;
let next_question = false;
let score = 0;

function getData(){
    let pathName = window.location.href.split('#')[1];
    let title = "";
    if (pathName === "css"){
        quiz_data = css_quiz_data;
        title = "css";
    } 
    else {
        quiz_data = js_quiz_data;
        title="js";
    }
    
    renderTitle(title);
    handleQuiz();
    
}

function renderTitle(title){
    if(title === 'css'){
        $('.quiz-title').html("<h2><i class='fab fa-css3'></i> CSS Quiz</h2>");
    }
    else {
        $('.quiz-title').html("<h2><i class='fab fa-js-square'></i> JS Quiz</h2>");
    }
}

function renderQuestionNumber(qs_num) {
    $('.js-question-number').html(`${qs_num + 1}`)
}

function renderQuestion(qs_num) {
    $('.content-text').html(`<p>${quiz_data[qs_num].question}</p>`);    
    
    let optionString = function(){
        let str = "";
        for (let i = 0; i < quiz_data[qs_num].options.length; i++) {
            str += `<label for="option${i}"><input type="radio" name="options" value="${i}" id="option${i}" required> ${quiz_data[qs_num].options[i]} </label>`;
        }
        return str
    }
    $('.form-data').html(optionString);
}

//$('form').on('submit', '.js-submit-button', function(event){
$('form').submit(function(event){
    event.preventDefault();
    if (!next_question){
        next_question = true;
        let checkedItem = Number(getOptionInfo());
        checkAnswer(checkedItem);
    }
    else {
        next_question = false;
        question_number++;
        handleQuiz(); 
    }
});

function getOptionInfo(){
    let item = -1;

    $('form input[type=radio]').each(function(){
        if($(this).prop('checked')){
            item = $(this).val(); 
        }
    });

    return item;
}

function checkAnswer(answer) {
    if (answer === quiz_data[question_number].answer) {
        $('.form-data').html(`
            <h4><i class="fas fa-check-circle"></i> Correct</h4>
            <p>${quiz_data[question_number].explanation}</p>
        `)
        score++;
        $('.js-score').html(`${score}`);
    }    
    else {
        $('.form-data').html(`
            <h4><i class="fas fa-times-circle"></i> Incorrect</h4>
            <p>The answer is: ${quiz_data[question_number].answerText}</p>
            <p>${quiz_data[question_number].explanation}</p>
        `)
    }
}

function renderFinalScore(){
    let feedback = results[score];
    $('.content').html(`
        <h3>You scored ${score} / 5 (${(score/5)*100}%).</h3>
        ${feedback}
        <a class="link-to-index" href="index.html"><i class="fas fa-angle-double-left"></i> Back to index</a>
    `)
}

function handleQuiz(){
    if (question_number > 4) {
        renderFinalScore(); 
    }
    else {
        renderQuestionNumber(question_number);
        renderQuestion(question_number);
    }
}

$(getData)