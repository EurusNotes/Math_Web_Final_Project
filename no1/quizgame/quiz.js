const quiz = [
  {
    question: 'βの読み方はどれ？',
    answers: [ 'アルファ', 'ガンマ', 'ベータ', 'イータ'],
    correct: 'ベータ'
  }, {
    question: 'ローはどれ？',
    answers: [ 'φ', 'χ', 'ψ', 'ρ'],
    correct: 'ρ'
  }, {
    question: 'Δの小文字はどれ？',
    answers: [ 'γ', 'δ', 'λ', 'σ'],
    correct: 'δ'
  }, {
    question: 'ミューはどれ？',
    answers: [ 'μ', 'χ', 'ψ', 'σ'],
    correct: 'μ'
  }, {
    question: 'sigmaはどれ？',
    answers: [ 'φ', 'ζ', 'ψ', 'Σ'],
    correct: 'Σ'
  },{
    question: 'psiはどれ？',
    answers: [ 'φ', 'ζ', 'ψ','δ'],
    correct: 'ψ'
  }
];

const $window = window;
const $doc = document;
const $question = $doc.getElementById('js-question');
const $buttons = $doc.querySelectorAll('.btn');

const quizLen = quiz.length;
let quizCount = 0;
let score = 0;

const init = () => {
  $question.textContent = quiz[quizCount].question;

  const buttonLen = $buttons.length;
  let btnIndex = 0;

  while(btnIndex < buttonLen){
    $buttons[btnIndex].textContent = quiz[quizCount].answers[btnIndex];
    btnIndex++;
  }
};

const goToNext = () => {
  quizCount++;
  if(quizCount < quizLen){
    init(quizCount);
  } else {

    showEnd();
  }
};

const judge = (elm) => {
  if(elm.textContent === quiz[quizCount].correct){
    $window.alert('Good job!');
    score++;
  } else {
    $window.alert('残念！');
  }
  goToNext();
};

const showEnd = () => {
  $question.textContent = 'あなたのスコアは' + Math.round(score/quizLen)*100 + 'です!お疲れ様です！';

  const $items = $doc.getElementById('js-items');
  $items.style.visibility = 'hidden';
};

init();

let answersIndex = 0;
let answersLen = quiz[quizCount].answers.length;

while(answersIndex < answersLen){
  $buttons[answersIndex].addEventListener('click', (e) => {
    judge(e.target);
  });
  answersIndex++;
}
