//QUIZ GAME using the console!
//1. build a function constructor called Question to describe the question. Should include:
//a) question itself
//b) the answers from which the player can choose the correct one (choose an adequate data structure here, like an array, an object, or whatever you think best)
//c)**** correct answer (I would use a number for this)
//2. create a couple of questions using the constructor
//3. store them all inside an array
//4. select one random question and log it on the console, together with the possible answers (each question should have a number) (hint: write a method for the question objects for this task)
//5. use the 'prompt' function to ask the user for the correct answer. the user should input the number of the correct answer such as you displayed on task 4.
//6. check if the answer is correct and print to the console whether the answer is correct or not. hint: write another method for this.
//7. suppose this code would be a plugin for other programmers to use in their game. So make sure all of your code is private and doesn't interfere with the other programmers code (hint: we learned a specal technique to do exactly that)
//EXPERT LEVEL//
//8. after you display the result, display the next random question, so that the game never ends (hint: write a function for this and call it right after displaying the result)
//9. be careful: after task 8, the game literally never ends, so include the option to quit the game if the user writes 'exit' instead of the answer. in this case, DONT call the function from task 8
//10. track the users score to make the game more fun! So each time an answer is correct, add 1 point to the score (hint: im going to use the power of closures for this, but you dont have to, just do this with the tools you feel more comfortable at this point)
//11. display the score in the console. use yet another method for this.


//function question() {
//}

    // the array of questions
    var questarr = ["What language is used to code this prompt window?", "How many words fit in this sentence?", "How many keys with numbers, do you have on your keyboard without the numpad?"];

    // generate a random number linked to the arrayindex to generate a random question
    var questions = questarr[Math.floor(Math.random() * questarr.length-1)];
    console.log(questions);

    //answers to all questions based on the index number
    if (questions === questarr[0]){
        var answer0 = {
            00: "Python",
            01: "Ruby",
            02: "Javascript" //correct answer
        };
        console.log(answer0);
    }
    else if (questions === questarr[1]){
        var answer1 = {
            00: "six",
            01: "seven", //correct answer
            02: "eight"
        };
        console.log(answer1);
    }
    else if (questions === questarr[2]){ 
        var answer2 = {
            00: "nine",
            01: "ten", //correct answer
            02: "eleven"
        };
        console.log(answer2);
    }

    // the prompt window, displaying questions
    var quest = prompt(questions, "Type the number of the answer to the question or type 'exit' to quit the quiz");
    if (quest != null) {
        if (quest === answer0[2] || quest === answer1[1] || quest === answer2[1]) {
            console.log("you are correct!");
            //next question
        }
        else if (quest === "exit") {
            console.log("you will exit the game");
            //quit opening the prompt window
        }
        else {
            console.log("this is not the correct answer");
            //next question
        }
    else {
        //next question
    }
    }


//question();
