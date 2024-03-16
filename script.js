const questions=[
{
    question:"What is 2+2",
    option1:"4",
    option2:"5",
    option3:"6",
    option4:"1",
    answer:"0",
}
,
{
    question:"What is 2+4",
    option1:"4",
    option2:"5",
    option3:"6",
    option4:"1",
    answer:"2",
}
,
{
    question:"What is 2+2",
    option1:"4",
    option2:"5",
    option3:"6",
    option4:"1",
    answer:"0",
}
,
{
    question:"What is 2+2",
    option1:"4",
    option2:"5",
    option3:"6",
    option4:"1",
    answer:"0",
}
]
let container=document.querySelector(".container")
let contain;
let option=document.querySelectorAll(".option");

let number=0;

const loaddata=()=>{
contain=
`
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
    <button class="next"></button>
    `

    container.innerHTML=contain;
    
    option.forEach((opt)=>{
        opt.addEventListener("click",()=>{
            answer=opt.id;
            console.log(answer);
            if(answer===questions[0].answer){
                opt.classList.add("correct");
                button.innerHTML="next";
                button.style.display="block";
            }
            else if(answer!==questions[0].answer){
                opt.classList.add("incorrect")
                option[questions[number].answer].classList.add("correct")
                button.innerHTML="play again";
                button.style.display="block"
            }
        })
        })
    
}

loaddata();


option=document.querySelectorAll(".option");
let button= document.querySelector(".next");

button.addEventListener("click",(e)=>{
    if(e.target.innerHTML==="next"){
        console.log("correct")
        console.log(number)
        number=number+1;
        console.log(number)
        loaddata()
    }
    if(e.target.innerHTML!=="next"){
        console.log("incorrect")
    }

})

option.forEach((opt)=>{
opt.addEventListener("click",()=>{
    answer=opt.id;
    console.log(answer);
    if(answer===questions[0].answer){
        opt.classList.add("correct");
        button.innerHTML="next";
        button.style.display="block";
    }
    else if(answer!==questions[0].answer){
        opt.classList.add("incorrect")
        option[questions[number].answer].classList.add("correct")
        button.innerHTML="play again";
        button.style.display="block"
    }
})
})



