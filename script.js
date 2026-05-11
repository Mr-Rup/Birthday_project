const introScreen = document.getElementById("intro-screen");
const storyScreen = document.getElementById("story-screen");
const endingScreen = document.getElementById("ending-screen");

const startBtn = document.getElementById("startBtn");
const nextBtn = document.getElementById("nextBtn");
const restartBtn = document.getElementById("restartBtn");

const storyBox = document.getElementById("story-box");

const bgm = document.getElementById("bgm");

const secret = document.getElementById("secret");



const storyLines = [

  "experiment name:<br><br>RATS + miu attempting emotional regulation.",

  "result:<br><br>failed successfully.",

  "subjects communicated primarily through arguments, sarcasm, and emotionally concerning humor.",

  "physical interaction logs:<br><br>multiple punches recorded.",

  "research confirms:<br><br>RATS was usually the problem.",

  "pain level:<br><br>manageable. mostly.",

  "compatibility status:<br><br>concerningly high.",

  "subjects repeatedly insulted each other instead of communicating properly.",

  "yet somehow remained emotionally synchronized.",

  "observed behavior:<br><br>fighting for 40 minutes.<br>sending memes 3 minutes later.",

  "memory fragment recovered:<br><br>the 2am conversations.",

  "memory fragment recovered:<br><br>turning trauma into comedy.",

  "memory fragment recovered:<br><br>acting unserious during serious moments.",

  "memory fragment recovered:<br><br>that one conversation neither of us forgot.",

  "eventually, life stopped giving us the same timings.",

  "different schedules.<br>different battles.<br>different versions of ourselves.",

  "<span class='glitch'>same attachment.</span>",

  "but some people do not disappear.<br><br>they just become background gravity.",

  "some people become memories.<br><br>you became a reflex.",

  "WARNING:<br><br>opening emotional archive may cause feelings.",

  "proceed anyway?",

  "bad decision recorded.",

  "final lab conclusion loading...",

  "connection status:<br><br>still active."

];



let currentIndex = 0;



startBtn.addEventListener("click", () => {

  introScreen.classList.remove("active");

  storyScreen.classList.add("active");



  bgm.play().catch(() => {});



  showLine();

});


function showLine() {

  storyBox.classList.remove("fade");

  storyBox.style.opacity = 0;


  setTimeout(() => {

    storyBox.innerHTML =
      storyLines[currentIndex];


    const emotionalTriggers = [

      "background gravity",
      "you became a reflex",
      "same attachment",
      "still active"

    ];


    const currentText =
      storyLines[currentIndex];


    if (

      emotionalTriggers.some(word =>
        currentText.includes(word))

    ) {

      document.body.classList.add("flash-red");


      setTimeout(() => {

        document.body.classList.remove("flash-red");

      }, 600);

    }


    storyBox.classList.add("fade");

    storyBox.style.opacity = 1;

  }, 300);

}

nextBtn.addEventListener("click", () => {

  currentIndex++;



  if (currentIndex >= storyLines.length) {

    storyScreen.classList.remove("active");

    endingScreen.classList.add("active");



    return;

  }



  showLine();

});



restartBtn.addEventListener("click", () => {

  document.body.innerHTML = `

    <div style="
      background:black;
      color:#8cffb0;
      width:100vw;
      height:100vh;
      display:flex;
      justify-content:center;
      align-items:center;
      font-family:Courier New;
      text-align:center;
      padding:20px;
      font-size:22px;
    ">

      connection status:<br><br>still active.

    </div>

  `;

});



const secretMessages = [

  "classified note: miu punches harder than expected.",

  "incident report: RATS deserved it though.",

  "warning: subjects weaponize sarcasm during emotional situations.",

  "medical note: both specimens are emotionally stupid.",

  "archive corruption detected: too many cursed conversations.",

  "warning: miu has anger issues but in a cute way.",

  "system note: subjects emotionally attached against medical advice.",

  "classified observation: neither subject knows how to communicate normally."

];



secret.addEventListener("click", () => {

  const randomMessage =

    secretMessages[

      Math.floor(Math.random() * secretMessages.length)

    ];



  alert(randomMessage);

});

setInterval(() => {

  if (Math.random() > 0.92) {

    document.body.style.opacity = "0.96";

    setTimeout(() => {

      document.body.style.opacity = "1";

    }, 80);
  }

}, 1000);