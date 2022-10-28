
var questions=[
    {
      question: "Html Stands For _________________",
      options: [
        "Hyper Text Makeup Language",
        "html",
        "Case Cading Style Sheet",
        "Hypertext markup language",
      ],
      correctAns: "ans4",
    },
    {
      question: "Css Stands For _________________",
      options: [
        "Cascading Style Sheet",
        "Java",
        "Ram",
        "Hypertext markup language",
      ],
      correctAns: "ans1",
    },
    {
      question: "Js Stands For _________________",
      options: ["Java Style", "Java Script", "Script", "Script Src"],
      correctAns: "ans2",
    },
    {
      question: "Dom Stands For _________________",
      options: ["Document Object Model", "html", "Css", "Java"],
      correctAns: "ans1",
    },
    {
      question: "Ram Stands For _________________",
      options: ["Read Only Memory", "Dom", "Random Acccess Memory", "For Pc"],
      correctAns: "ans3",
    },
    {
      question: "Rom Stands For _________________",
      options: [
        "Hyper Text Markup Language",
        "html",
        "HTml",
        "Read Only Memory",
      ],
      correctAns: "ans4",
    },
  ]

  score=0;
  currentvalue=0;
  

  var totalquestions= document.getElementById("totalquestions");
  var question= document.getElementById("questions");
  var option= document.getElementById("options")
  var option1= document.getElementById("option1");
  var option2= document.getElementById("option2");
  var option3= document.getElementById("option3");
  var option4= document.getElementById("option4");
  var submit= document.getElementById("btn-submit");
  var answers= document.querySelectorAll(".answer");
  var showscore= document.getElementById("showscore");
  
  let currentquestion=0;

  function initRender(){

    currentquestion++
    totalquestions.innerHTML= currentquestion+"/"+questions.length
    
    question.innerHTML= questions[currentvalue].question
    option1.innerHTML= questions[currentvalue].options[0];
    option2.innerHTML= questions[currentvalue].options[1];
    option3.innerHTML= questions[currentvalue].options[2];
    option4.innerHTML= questions[currentvalue].options[3];

  }
  initRender()


  function getCheckAnswer(){
    let answer;

    answers.forEach((curAnsElem) => {
     if(curAnsElem.checked){
        answer=curAnsElem.id;
     }
    });
    return answer;
  };
  getCheckAnswer()

submit.addEventListener('click', () =>{
    var checkedAnswer= getCheckAnswer();
    console.log(checkedAnswer);

    if(checkedAnswer==questions[currentvalue].correctAns){
        score++;
    }
    
    currentvalue++
    if(currentvalue<questions.length){
        initRender();
    }else{
      percentage= ((score/questions.length)*100).toFixed(2)+"%";
      showscore.innerHTML= `<h1>Score: ${score}/${questions.length}</h1>
      <h3>Percentage: ${percentage}</h3>
      <button class="button" onclick="location.reload()">Try Again</button>`;
      showscore.classList.remove("scoreArea");
      
    }
});
