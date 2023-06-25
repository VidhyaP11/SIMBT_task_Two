// getting element by using id
var container=document.getElementById('container')
var question = document.getElementById('question');
var option1 = document.getElementById('option1');
var option2 = document.getElementById('option2');
var option3 = document.getElementById('option3');
var option4 = document.getElementById('option4');
var result = document.getElementById('result');
//intial index of question
var currQuestion=0;
//intial score is zero
var score=0;
var totalQuestions=questions.length;
//loading question
function loadQuestion(index)
{
    //accessing the index
    var data=questions[index];
    // for displaying question
    question.textContent=(index + 1) +'. '+ data.question;
    //This side option represent varaiable and right side varaible represent option of question
    //for displaying option
    option1.textContent=data.option1;
    option2.textContent=data.option2;
    option3.textContent=data.option3;
    option4.textContent=data.option4;

   /* var selectedOption=document.querySelector('#container input[type=radio]:checked');
    if(selectedOption) selectedOption.checked=false;*/
    //the above command can use in case if the statring value is defaul selected
 
};
// for loading next question
function  loadNextQuestion()
{
    //for answering 
    var selectedOption=document.querySelector('#container input[type=radio]:checked');
    if(!selectedOption)
    {
        alert('please select some option!');
        return;
    }
    //checking whether the answer is correct
    if(questions[currQuestion].answer == selectedOption.value)
    {
        score+=1;
    }
    //moving to next question so removing the option marked to previous question
    selectedOption.checked=false;
    //incrementing the question after checking whether the option selected and it is correct
    currQuestion++;
    // making finish button for last question
    if(currQuestion == totalQuestions-1)
    {
       document.getElementById('nextQuestion').textContent='Finish';
    }
    //displaying the result after click the finish button because no currquestion is equal  to totalquestion
    if(currQuestion == totalQuestions)
    {
      container.style.display='none';
      result.style.display='';
      document.getElementById('score').textContent='Your Score: '+score;
      return;
    }
    //for moving to next question
    loadQuestion(currQuestion);
};
function restartGame(){
    score=0;
    currQuestion=0;
    container.style.display='';
    result.style.display='none';
    document.getElementById('nextQuestion').textContent='Next';
    loadQuestion(currQuestion);
};
loadQuestion(currQuestion);
