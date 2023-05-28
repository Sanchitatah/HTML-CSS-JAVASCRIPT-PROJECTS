let numberOfDrumButtons = document.querySelectorAll(".drum").length;

for(let i=0; i<numberOfDrumButtons; i++){
    document.querySelectorAll(".drum")[i].addEventListener("click",function(){


        let buttonInnerHtml = this.innerHTML;

        makeSound(buttonInnerHtml);
        buttonAnimation(buttonInnerHtml);
    });
}

document.addEventListener("keypress",function(event){
    console.log(event.key);

    makeSound(event.key);
    buttonAnimation(event.key);
});

function makeSound(key){

    switch(key){

        case "a":
        let boom = new Audio("sounds/boom.wav");
        boom.play();
        break;

        case "s":
        let clap = new Audio("sounds/clap.wav");
        clap.play();
        break;

        case "d":
        let hihat = new Audio("sounds/hihat.wav");
        hihat.play();
        break;

        case "f":
        let kick = new Audio("sounds/kick.wav");
        kick.play();
        break;

        case "g":
        let openhat = new Audio("sounds/openhat.wav");
        openhat.play();
        break;

        case "h":
        let ride = new Audio("sounds/ride.wav");
        ride.play();
        break;

        case "j":
        let snare = new Audio("sounds/snare.wav");
        snare.play();
        break;

        case "k":
        let tink = new Audio("sounds/tink.wav");
        tink.play();
        break;

        case "l":
        let tom = new Audio("sounds/tom.wav");
        tom.play();
        break;

        default:console.log(key);
    }
};


function buttonAnimation(currentKey) {

    var activeButton = document.querySelector("." + currentKey);
  
    activeButton.classList.add("pressed");
  
    setTimeout(function() {
      activeButton.classList.remove("pressed");
    }, 100);
  
  }