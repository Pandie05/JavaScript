/*--------
    Make the Options Button 
    . on click
    . show or hide the `.sides` div
---------*/

<<<<<<< HEAD
var optionButt = document.querySelector('h2');

optionButt.addEventListener('click', () => {

    var sidesDiv = document.querySelector('.sides');
=======
const optionsHeading2 = document.querySelector('h2');

optionsHeading2.addEventListener('click', () => {

    const sidesDiv = document.querySelector('.sides');
>>>>>>> da02d65e674dace7d0b5f5644d6015ebd9890e32

    sidesDiv.classList.toggle('hidden');

})

/*---------
    Program the two fill inputs to do the following:
    . Display the correct colors on the inputs and outputs and paddles    
    . using an `input` event
        . Change the player's fill property to the value of the input
        . Change the pad's fill property  to the player's fill property
        . Show the fill's hex code in the output div 

-----------*/

<<<<<<< HEAD
// Select all fill input elements
var fillInputs = document.querySelectorAll('.op');
var outputDiv = document.querySelector('.output');

// Iterate through each fill input element
fillInputs.forEach((input, index) => {

    input.value = player[index].fill;
    outputDiv.innerHTML = player[index].fill;
    

    input.addEventListener('input', (e) => {

        player[index].fill = e.target.value;
        
        o[index].fill = e.target.value;
        outputDiv.innerHTML = e.target.value;

    });
});


=======
>>>>>>> da02d65e674dace7d0b5f5644d6015ebd9890e32
/*---------
    Program the six key inputs to do the following:
    . Display the correct key names for each player   
    . using a `keydown` event
        .Display the correct key name in the input
        .Change the player's key to the value of the input
        .Show the player's key in the output div 
-----------*/
