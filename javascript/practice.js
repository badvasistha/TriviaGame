var questions = [
    {
        question: "Who won the 2018 NBA finals?",
        choices: ['Caveliers', 'Warriors', 'Rockets', 'Spurs'],
        answer: 1
    },
    {
        question: "Who won the 2019 UEFA Champions League?",
        choices: ['Liverpool', 'Tottenham FC', 'Barcelona FC', 'Juventus'],
        answer: 0
    }
]
console.log(questions)

var question = function (index) {
    var question = $("<h1>").text(questions[index].question)
    var choice1 = $('<input type="radio" name="'+index+ '" value="' + questions[index].choices[0] + '"> Caveliers<br>') // .text(questions[index].choices[0])
    var choice2 = $('<input type="radio" name="'+index+ '" value="' + questions[index].choices[1] + '"> Warriors<br>') // .text(questions[index].choices[1])
    var choice3 = $('<input type="radio" name="'+index+ '" value="' + questions[index].choices[2] + '"> Rockets<br>') // .text(questions[index].choices[2])
    var choice4 = $('<input type="radio" name="'+index+ '" value="' + questions[index].choices[3] + '"> Spurs<br>') // .text(questions[index].choices[3])


    var div = $('<div>').attr("data-correct-answer", questions[0].answer).append(question, choice1, choice2, choice3, choice4)

    $('body').append(div)
}

function startListen() {
    $(document).on('click', 'ul', function(){
        console.log(this)
    })
}

question(0);
startListen();
question(1);
