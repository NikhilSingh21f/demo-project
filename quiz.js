let que = document.querySelectorAll(".question");
let opt = document.querySelectorAll(".option");
let nbtn = document.querySelectorAll(".next-btn");
let pbtn = document.querySelectorAll(".prev-btn");
let qcon = document.querySelector(".quiz-container");

let userans = {};
let currentque = 0;

const correctAnswer = {
    q1: "B) 4",
    q2: "C) Paris",
    q3: "C) Python",
    q4: "C) 25",
    q5: "D) Mercury",
    q6: "A) Hyper Text Markup Language",
    q7: "C) Circle",
    q8: "C) 5",
    q9: "A) Windows",
    q10: "B) Lion"
};

nbtn.forEach(btn => {
    btn.addEventListener("click",function(e){
        e.preventDefault();
        if(currentque < que.length - 1){
            currentque++;
            showquestion(currentque);
        } else{
            showScore();
        }
    });
});

pbtn.forEach(btn => {
    btn.addEventListener("click",function(e){
    e.preventDefault();
    if(currentque > 0){
        currentque--;
        showquestion(currentque);
    }
});
});

function showquestion(index) {
    que.forEach((q, i) => {
        q.style.display = i === index ? "block" : "none";

        if (i === index) {
            const qId = q.id;
            const selectedAnswer = userans[qId];

            if (selectedAnswer) {
                q.querySelectorAll(".option").forEach(opt => {
                    opt.classList.remove("selected");
                    if (opt.innerText === selectedAnswer) {
                        opt.classList.add("selected");
                    }
                });
            }
        }
    });
}
showquestion(currentque);

opt.forEach(o => {
    o.addEventListener("click", function() {
        let q = o.closest(".question");
        userans[q.id] = o.innerText;
        q.querySelectorAll(".option").forEach(opt => opt.classList.remove("selected"));
        o.classList.add("selected");
    });
});

function showScore(){
    let score = 0;
    for(let q in correctAnswer){
      if(userans[q]===correctAnswer[q]){
        score++;
      }
    }


que.forEach(q => q.style.display = "none");

const resultDiv = document.createElement("div");
resultDiv.style.textAlign = "center";
resultDiv.style.marginTop = "50px";

const heading = document.createElement("h2");
heading.innerText = "Quiz Completed 🎉";
heading.style.color = "#2196f3";

const scoreText = document.createElement("h3");
scoreText.innerText = `Your Score: ${score} / 10`;
scoreText.style.color = "green";

resultDiv.appendChild(heading);
resultDiv.appendChild(scoreText);

qcon.appendChild(resultDiv);
}
