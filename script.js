
const questions = [
    {
        question: "What is 2+2",
        option1: "4",
        option2: "5",
        option3: "6",
        option4: "1",
        answer: "0",
    },
    {
        question: "What is 2+4",
        option1: "4",
        option2: "5",
        option3: "6",
        option4: "1",
        answer: "2",
    },
    {
        question: "What is 3-2",
        option1: "4",
        option2: "5",
        option3: "6",
        option4: "1",
        answer: "3",
    },
    {
        question: "What is 3+2",
        option1: "4",
        option2: "5",
        option3: "6",
        option4: "1",
        answer: "1",
    }
];

let container = document.querySelector(".container");
let number = 0;
let correct=0;
let wrong=0;
let option;
let next = document.querySelector(".next")
let answergiven;

const loaddata = () => {
     answergiven=false;
    let selected=false;
    let contain = `
        <section class="header">Welcome to quiz app</section>
        <section class="wrapper">
            <section class="question">${questions[number].question}</section>
            <section class="options">
                <li class="option" id="0">${questions[number].option1}</li>
                <li class="option" id="1">${questions[number].option2}</li>
                <li class="option" id="2">${questions[number].option3}</li>
                <li class="option" id="3">${questions[number].option4}</li>
            </section>
        </section>
        <button class="next">Next</button>
    `;

    container.innerHTML = contain;
    option=document.querySelectorAll(".option");
    console.log(option);

    option.forEach((options)=>{

        options.addEventListener("click",(e)=>{
            answergiven=true;
            const given=e.target.id;
            if(given===questions[number].answer && selected===false){
                console.log("correct")
                e.target.classList.add("correct")
                options.classList.add("answered");
                number=number++;
                correct++;
                selected=true;
            }
            else if(selected===false){
                console.log("incorrect")
                e.target.classList.add("incorrect")
                wrong++;
                selected=true
            }
        })
    })
}


loaddata();


console.log(option);



const nextQuestion = () => {
    number++;
    if (number < questions.length) {
        loaddata();
    } else {
        container.innerHTML =
         `
         <div>
        <p>End of the quiz</p>
        <p>Score:
        correct:${correct}
        incorrect:${wrong}
        </p>
        </div>
           ` ;
    }
}

container.addEventListener("click", (event) => {
    if (event.target.classList.contains("next") && answergiven===true ) {
        nextQuestion();
    }
});
