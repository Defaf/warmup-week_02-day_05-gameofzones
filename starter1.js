
let counter = 0 ; 

$('.zone').on("mouseenter", function (event){
    $(event.target).css("background-color","green");
});

$('.zone').on("mouseout", function (event){
    $(event.target).css("background-color","white");
});


$('.zone').click(function (event){
    //add inside paranthesis mouseout as an optionl 
    $(event.target).off();
    $(event.target).css("background-color","green");
    $('this').html(counter ++);
    if(counter == 4 ){
        alert("You Win!!");
    }
    
});

