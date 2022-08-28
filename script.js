const textVariables = {
    firstVar: ["a", "b", "c"],
    secondVar: ["d", "e", "f"],
    thirdVar: ["g", "h", "i"],

    getRandomNumber(num){
        return Math.floor(Math.random()*num);
    },

    getRandomValue(test){

        switch(test){

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

const test = document.getElementById('textDisplay');

test.innerHTML = `
    Hi there, ${textVariables.getRandomValue("firstVar")}! <br>
    My name is ${textVariables.getRandomValue("secondVar")}. <br>
    Are you ${textVariables.getRandomValue("thirdVar")}?
`
//TODO:
//1. Come up with a funny text to display for the user
//2. Come up with a proper fallback text in case JS can't be used
//3. Come up with interesting variables for the text