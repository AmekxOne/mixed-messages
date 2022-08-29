const textVariables = {
    firstVar: ["look", "smell", "sound", "appear"],
    secondVar: ["a game", "League of Legends", "Fortnite", "Hearthstone"],
    thirdVar: ["takeout", "indian", "pizza", "chinese"],

    getRandomNumber(num){
        return Math.floor(Math.random()*num);
    },

    getRandomValue(text){

        switch(text){

            case "firstVar":
                return this.firstVar[this.getRandomNumber(this.firstVar.length)];
                break;

            case "secondVar":
                return this.secondVar[this.getRandomNumber(this.firstVar.length)];
                break;

            case "thirdVar":
                return this.thirdVar[this.getRandomNumber(this.firstVar.length)];
                break;

            default: "kek!";
        }
    }
}

const displayedText = document.getElementById('textDisplay');

displayedText.innerHTML = `
    Hi there, you ${textVariables.getRandomValue("firstVar")} good today! <br>
    Do you want to play ${textVariables.getRandomValue("secondVar")}? <br>
    Let's order ${textVariables.getRandomValue("thirdVar")}!   
`;