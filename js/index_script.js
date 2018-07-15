'use strict';

function clickNext() {
    $('form').on('click', '.js-submit-button', function(event){
        event.preventDefault();
        const navigation = [
            'quiz.html#css',
            'quiz.html#js',
            'html_quiz.html',
        ];
        
        let checkedItem = getOptionInfo();
        if (checkedItem >= 0) {
            window.location = navigation[checkedItem];
        }
        else {
            $('fieldset').append('<span class="warning-message"><i class="fas fa-exclamation-triangle"></i> Select a quiz to proceed</span>');
        }
            
    })   
}

function getOptionInfo(){
    let item = -1;

    $('form input').each(function(){
        if($(this).prop('checked')){
            item = $(this).val(); 
        }
    });

    return item;
}



function handleRadioOptions() {
    clickNext();
}

$(handleRadioOptions)
