function populate() {
    if(quiz.isEnded()) {
        showScores();
    }
    else {
        var element = document.getElementById("question");
        element.innerHTML = quiz.getQuestionIndex().text;

        var choices = quiz.getQuestionIndex().choices;
        for(var i = 0; i < choices.length; i++) {
            var element = document.getElementById("choice" + i);
            element.innerHTML = choices[i];
            guess("bt" + i, choices[i]);
        }

        showProgress();
    }
};

function guess(id, guess) {
    var button = document.getElementById(id);
    button.onclick = function() {
        quiz.guess(guess);
        populate();
    }
};


function showProgress() {
    var currentQuestionNumber = quiz.questionIndex + 1;
    var element = document.getElementById("progress");
    element.innerHTML = "Question " + currentQuestionNumber + " of " + quiz.questions.length;
};

function showScores() {
    var gameOverHTML = "<h1>Result</h1>";
    gameOverHTML += "<h2 id='score'> Your scores: " + quiz.score + "</h2>";
    var element = document.getElementById("quiz");
    element.innerHTML = gameOverHTML;
};

// create questions
var questions = [
    new Question("What is the most abundant element in the universe?", ["Nitrogen", "Oxygen","Hydrogen", "Carbon-di-oxide"], "Hydrogen"),

    new Question("Which is the tallest grass in the world?", ["Bamboo", "Bermudagrass","Tall fescue", "Zoysia"], "Bamboo"),
    

    new Question("National River of India?", ["Yamuna", "Ganga","Brahmputra", "Sindhu"], "Ganga"),
    

    new Question("Which is the largest desert in the world?", ["Sahara", "Antarctica","Thar", "Gobi"], "Antarctica"),

    
    new Question("Who among the following is the charioteer of Lord Surya?", ["Arun", "Karna","Bhaskara", "Arjun"], "Arun"),


    new Question("Who invented Watch?", ["Nehru", "Grahambell","Thomas", "Peter Henlein"], "Peter Henlein"),
 
    new Question("Which of the following is the capital of Arunachal Pradesh?", ["Dispur", "Itanagar","Panaji", "Imphal"], "Itanagar"),

    new Question(" Which is the largest coffee-producing state of India?", ["Kerala", "Karnataka","Darjeeling", "Tamil Nadu"], "Karnataka"),
  
    new Question("What is the staple drink of Goa?", ["Toddy", "Thandai","Feni", "Sattu Sharbhat"], "Feni"),
    
   new Question("Who is the author of the book New India?", ["Manik Bandopadhyay", "Annie Besant","John Milton", "None"], "Annie Besant"),

  

];


var quiz = new Quiz(questions);


populate();





