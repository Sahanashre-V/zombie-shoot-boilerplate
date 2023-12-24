// Iteration 1: Declare variables required for this game
let gameBodyDiv = document.getElementById("game-body");
let TimeSpan = 60;
let arr = [
    "./assets/zombie-1.png",
    "./assets/zombie-2.png",
    "./assets/zombie-3.png",
    "./assets/zombie-4.png",
    "./assets/zombie-5.png",
    "./assets/zombie-6.png",
]

// Iteration 1.2: Add shotgun sound
gameBodyDiv.addEventListener("click",function(){
    let ShotGunSound = new Audio ("./assets/shotgun.wav");
    ShotGunSound.play();
    ShotGunSound.volume=0.3;
})

// Iteration 1.3: Add background sound
let bgmSound = new Audio("./assets/bgm.mp3");
bgmSound.play();
bgmSound.loop = true;
bgmSound.volume = 0.2;

// Iteration 1.4: Add lives

let LivesRemaingCount = 0;

// Iteration 2: Write a function to make a zombie



let ZombieId = 0;

function CreateZombie(){
    let ranDomImagePicker = arr[Math.floor(Math.random()*6)];
    
    gameBodyDiv.innerHTML+= `<img src =${ranDomImagePicker} alt='${ranDomImagePicker}' class='zombie-image' id='zombie-${ZombieId}'/>`;

    let getZombie = document.getElementById('zombie-' +ZombieId);
    let TranslateXRandomNumber = Math.floor(Math.random()*(80-20))+20;
    getZombie.style.transform = `translateX(${TranslateXRandomNumber}vw)`;

    let randomSecondsNumber = Math.floor(Math.random()*(7-2))+2;
    getZombie.style.animationDuration = `${randomSecondsNumber}s`;

    //shot
    getZombie.addEventListener("click",function(){
        RemoveZombie(getZombie);
    })

}

// Iteration 3: Write a function to check if the player missed a zombie

function RemoveZombie(zombieDiv){
    zombieDiv.style.display="none";
    ZombieId++;
    CreateZombie();
}

// Iteration 4: Write a function to destroy a zombie when it is shot or missed


setInterval(function(){
    TimeSpan-=1;
    document.getElementById("timer").innerHTML = TimeSpan;
    
    let missedZombie = document.getElementById('zombie-'+ZombieId);

    let topDimensionZombie = missedZombie.getBoundingClientRect().top;

    if(topDimensionZombie<=0){
        LivesRemaingCount++;
    }
    if (LivesRemaingCount==4){
        window.location.href="./game-over.html";
        console.log("game over")
    }
    RemoveZombie(missedZombie);
    if (TimeSpan==0){
        window.location.href="./win.html";
        console.log("Winner")
    }

},1000)

// Iteration 5: Creating timer

// Iteration 6: Write a code to start the game by calling the first zombie


CreateZombie();

// Iteration 7: Write the helper function to get random integer

function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
