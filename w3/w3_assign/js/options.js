/*--------
    Make the Options Button 
    . on click
    . show or hide the `.sides` div
---------*/

var optionButt = document.querySelector('h2');

optionButt.addEventListener('click', () => {

    var sides = document.querySelector('.sides');

    sides.classList.toggle('hidden');

})

/*---------
    Program the two fill inputs to do the following:
    . Display the correct colors on the inputs and outputs and paddles    
    . using an `input` event
        . Change the player's fill property to the value of the input
        . Change the pad's fill property  to the player's fill property
        . Show the fill's hex code in the output div 

-----------*/

// Select all fill input elements
var fillIn = document.querySelectorAll('.op');
var outDiv = document.querySelector('.output');

// Iterate through each fill input element
fillIn.forEach((input, index) => {

    input.value = player[index].fill;
    outDiv.innerHTML = player[index].fill;
    

    input.addEventListener('input', (e) => {

        player[index].fill = e.target.value;
        
        o[index].fill = e.target.value;
        outDiv.innerHTML = e.target.value;

    });
});


/*---------
    Program the six key inputs to do the following:
    . Display the correct key names for each player   
    . using a `keydown` event
        .Display the correct key name in the input
        .Change the player's key to the value of the input
        .Show the player's key in the output div 
-----------*/

// Select all "u" inputs
var uIn = document.querySelectorAll('.u');

uIn.forEach((input, index) => {

    input.value = player[index].keys.u;


    input.addEventListener('keydown', (e) => {

        input.value = e.key;


        player[index].keys.u = e.key;
        outputDiv.innerHTML = player[index].keys.u;
    });

    input.addEventListener('focus', () => {
        currentState = 'pause';
    });
});
