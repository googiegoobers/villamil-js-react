const answers = [
'Yes.',
'No',
'Absolutely!',
'Keep Being Delusional, You will be rewarded.',
'Ingon si Ruffa Mae, "Go go go!"',
'Dili jud pwede',
'Pangutana Balik.',
'Kung nag uwan karon, yes.',
'It is your lucky day!',
'No! Never! You are not allowed to do that.',
'Siguro.',
'Bawlang',
'Wabalo.',
'Sige nalang gud...',
'We must stay focused brothers.',
'Pangutana ang tao sa imo likod',
'Pwede ra pero ayaw ko pasanginla ug magkinaunsa',
'Ingon ang hangin "dili usa karon"',
'Hunahunaa sa ug tarong',
'Kung mu yes ka, bati kag nawng'
];

const ballElement = document.getElementById('ball');
const answerElement = document.getElementById('answer');


const generateAnswer = () => {
  const randomIndex = Math.floor(Math.random() * answers.length);
  return answers[randomIndex];
};

const rotateBall = () => {
  let rotation = Math.floor(Math.random() * 180) + 90;
  const rotateInterval = setInterval(() => {
    rotation += Math.floor(Math.random() * 10) + 30;
    ballElement.style.transform = `rotate(${rotation}deg)`;
    if (rotation >= 360) {
      clearInterval(rotateInterval);
      setTimeout(() => {
        showAnswer();
        ballElement.style.transform = 'rotate(0deg)';
      }, 1000);
    }
  }, 10);
};



const showAnswer = () => {
  const answer = generateAnswer();
  answerElement.textContent = answer;
};


ballElement.addEventListener('click', () => {
  answerElement.textContent = "";
  rotateBall();
  ballElement.classList.remove('bounce'); 
  void ballElement.offsetWidth; 
  ballElement.classList.add('bounce');
});

ballElement.addEventListener('animationend', () => {
  ballElement.classList.remove('bounce');
});