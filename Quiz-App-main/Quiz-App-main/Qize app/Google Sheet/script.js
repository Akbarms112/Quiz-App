//getting all requried element
const start_btn=document.querySelector(".start_btn button");
const info_box=document.querySelector(".info_box");
const exit_box=info_box.querySelector(".buttons .quit");
const continue_box=info_box.querySelector(".buttons .restart");
const quiz_box=document.querySelector(".quiz_box");
const timeCount =quiz_box.querySelector(".timer .timer_sec");
const timeLine =quiz_box.querySelector("header .time_line");
const timeOff =quiz_box.querySelector("header .timer_text");

const option_list=document.querySelector(".option_list");


//start quiz
start_btn.onclick = () =>{
    info_box.classList.add("activeInfo");
}
//exit
exit_box.onclick = () =>{
    info_box.classList.remove("activeInfo");
}

//continue
continue_box.onclick = () =>{
    info_box.classList.remove("activeInfo");//hide info
    quiz_box.classList.add("activeQuiz");//show quiz
    showQuestions(0);
    queCounter(1);
    startTimer(60);
    startTimerLine(0);
}

let que_count=0; 
let que_numb=1;
let counter;
let counterLine;
let timeValue = 60;
let widthValue = 0;
let userScore = 0;



const next_btn = quiz_box.querySelector(".next_btn");
const result_box = document.querySelector(".result_box");
const restart_quiz = result_box.querySelector(".buttons .restart");
const quit_quiz = result_box.querySelector(".buttons .quit ");

restart_quiz.onclick = ( )=>{
    quiz_box.classList.add("activeQuiz");
    result_box.classList.remove("activeResult"); 
        let que_count=0; 
        let que_numb=1;

        let timeValue = 60;
        let widthValue = 0;
        let userScore = 0;
        showQuestions(que_count);
        queCounter(que_numb);
        clearInterval(counter);
        startTimer(timeValue);
        clearInterval(counterLine);
        startTimerLine(widthValue);
        next_btn.style.display = "none";
        timeOff.textContent = "Time Left";
       
       
}

quit_quiz.onclick = ( )=>{
    window.location.reload();

}

//next buuton
next_btn.onclick=()=>{
    if(que_count < questions.length - 1){
        que_count++;
        que_numb++;
        showQuestions(que_count);
        queCounter(que_numb);
        clearInterval(counter);
        startTimer(timeValue);
        clearInterval(counterLine);
        startTimerLine(widthValue);
        next_btn.style.display = "none";
        timeOff.textContent = "Time Left";
    }else{
        clearInterval(counter);
    
        clearInterval(counterLine);
        console.log("Question Completed");
        showResultBox();

    }
}

//get question  and answe in array
function showQuestions(index){
    const que_text=document.querySelector(".que_text");

    let que_tag='<span>'+questions[index].numb+"."+ questions[index].question+'</span>';
    let option_tag= '<div class="option">'+ questions[index].options[0]+'<span></span></div>'
                     + '<div class="option">'+questions[index].options[1]+'<span></span></div>'
                     + '<div class="option">'+questions[index].options[2]+'<span></span></div>'
                     + '<div class="option">'+questions[index].options[3]+'<span></span></div>';
    que_text.innerHTML = que_tag;
    option_list.innerHTML = option_tag;

    const option = option_list.querySelectorAll(".option");
    for (let i = 0; i < option.length; i++) {
        option[i].setAttribute("onclick","optionSelected(this)");
        
        
    }
}

let tickIcon ='<div class="icon tick"><i class="fas fa-check "></i></div>';
let crossIcon ='<div class="icon cross"><i class="fas fa-times "></i></div>';

function optionSelected(answer){
    clearInterval(counter);
    startTimer(timeValue);
    let userAns = answer.textContent;
    let correctAns = questions[que_count].answer;
    let allOptions =option_list.children.length;
    
    if(userAns == correctAns){
        userScore +=1;
        console.log(userScore);
        answer.classList.add("correct");
        console.log("Answer is correct");
        answer.insertAdjacentHTML("beforeend",tickIcon);

    }else{
        answer.classList.add("incorrect");
        console.log("Answer is wrong");
        answer.insertAdjacentHTML("beforeend",crossIcon);
        
        //if answers is incorrect then automtically selected the correct answer
        for (let i=0; i<allOptions;i++) {
            if(option_list.children[i].textContent == correctAns){
                option_list.children[i].setAttribute("class","option correct");
                option_list.children[i].insertAdjacentHTML("beforeend", tickIcon);
            }
            
        }
    }
    //once  user selected disabled all options
    for(let i=0;i<allOptions;i++){
        option_list.children[i].classList.add("disabled");
    }
    next_btn.style.display = "block";
   
}

function showResultBox(){
    info_box.classList.remove("activeInfo");//hide info
    quiz_box.classList.remove("activeQuiz");//show quiz
    result_box.classList.add("activeResult");//show the result
    const scoreText = result_box.querySelector(".score_text");
    if(userScore > 3){
        let scoreTag= ' <span>and congrats!, you got <p>'+ userScore+'</p> out of <p>'+questions.length+'</p></span>';
        scoreText.innerHTML = scoreTag;
    }
    else if(userScore > 1){
        let scoreTag= ' <span>and nice, you got <p>'+ userScore+'</p> out of <p>'+questions.length+'</p></span>';
        scoreText.innerHTML = scoreTag;
    }
    else{
        let scoreTag= ' <span>and sorry, you got only <p>'+ userScore+'</p> out of <p>'+questions.length+'</p></span>';
        scoreText.innerHTML = scoreTag;
    }
}
function startTimer(time){
    counter = setInterval(timer,1000);
    function timer(){
        timeCount.textContent = time;
        time--;
        if(time < 59){
            let addZero = timeCount.textContent;
            timeCount.textContent = "" + addZero;
        }
        if(time < 0){
            clearInterval(counter);
            timeCount.textContent = "00";
            timeOff.textContent = "Time Off";

            let correctAns = questions[que_count].answer;
            let allOptions = option_list.children.length;

            for (let i=0; i< allOptions;i++) {
                if(option_list.children[i].textContent == correctAns){
                    option_list.children[i].setAttribute("class","option correct");
               
                }
            }
            for(let i=0;i<allOptions;i++){
                option_list.children[i].classList.add("disabled");
                option_list.children[i].classList.add("enable");
                
            }
            next_btn.style.display = "block";
           
        }
    }
}

// function startTimerLine(time){
//     counter = setInterval(timer,109);
//     function timer(){
//        time+=1;
//        timeLine.style.width = time + "px";
//         if(time > 549){
//             clearInterval(counter);
           
//         }
//     }
// }












function queCounter(index){
    const button_ques_counter=quiz_box.querySelector(".total_que");
    let totalQuesCountTag= '<span><p>'+ index +'</p>Of<p>'+questions.length+'</p>Questions</span>';
    button_ques_counter.innerHTML=totalQuesCountTag;
}
