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
//7. *IFFI* suppose this code would be a plugin for other programmers to use in their game. So make sure all of your code is private and doesn't interfere with the other programmers code (hint: we learned a specal technique to do exactly that)
//EXPERT LEVEL//
//8. after you display the result, display the next random question, so that the game never ends (hint: write a function for this and call it right after displaying the result)
//9. be careful: after task 8, the game literally never ends, so include the option to quit the game if the user writes 'exit' instead of the answer. in this case, DONT call the function from task 8
//10. track the users score to make the game more fun! So each time an answer is correct, add 1 point to the score (hint: im going to use the power of closures for this, but you dont have to, just do this with the tools you feel more comfortable at this point)
//11. display the score in the console. use yet another method for this.

(function() {
    function Question(question, answers, correct) {
        this.question = question;
        this.answers = answers;
        this.correct = correct;
    }

    Question.prototype.displayQuestion = function() {
        console.log(this.question);
    
        for (var i = 0; i < this.answers.length; i++) {
            console.log(i + ': ' + this.answers[i]);
        }
    }
    
    Question.prototype.checkAnswer = function(ans, CS) {   
        var scr;
        if (ans === this.correct) {
            console.log('Correct answer!');
            scr = CS(true);
        }
        else {
            console.log('Wrong answer, But you can try again!');
            scr = CS(false);
        }
        this.displayScore(scr);
    }
    
    Question.prototype.displayScore = function(score) {
        console.log('Your score is: ' + score + '!');
        console.log('------------------------------');
    }

    var quest1 = new Question('What language is used to code this prompt window?', ['Python', 'Ruby', 'JavaScript'], 2);
    var quest2 = new Question('How many words fit in this sentence?', ['six', 'seven', 'eight'], 1);
    var quest3 = new Question('How many keys with numbers, do you have on your keyboard without the numpad?', ['nine', 'ten', 'eleven'], 1);

    var questions = [quest1, quest2, quest3];

    function score() {
        var scr = 0;
        return function(correct) {
            if (correct) {
                scr++;
            }
            return scr;
        }
    }

    var countScore = score();

    function start() {

        var x = Math.floor(Math.random() * questions.length);
    
        questions[x].displayQuestion();
    
        var answer = prompt('Type the number of the answer to the question or type \'exit\' to quit the quiz.');

        if (answer !== 'exit') {
            questions[x].checkAnswer(parseInt(answer), countScore);
            start();
        }
    }

    start();

})();

