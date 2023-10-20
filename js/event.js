console.log('This is separate js file');



// greenButton


const greenButton = document.getElementById( 'make-Green');
    greenButton.addEventListener('click', makeGreen);


function makeGreen() {
        document.body.style.backgroundColor = 'green';
    }






    // whiteButton
    
const whiteButton = document.getElementById( 'make-white');
whiteButton.addEventListener('click', makewhite);


function makewhite() {
        document.body.style.backgroundColor = 'white';
    }
    
// BlueButton

const blueButton = document.getElementById( 'make-Blue');
blueButton.addEventListener('click', function makeBlue() {
    document.body.style.backgroundColor = 'Blue';
});




//  YellowButton


document.getElementById('make-Yellow').addEventListener('click', function () {
    document.body.style.backgroundColor = 'Yellow';
});











z