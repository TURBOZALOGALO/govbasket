// Инициализация переменных
let whiteBg = document.querySelector('.white-bg');
let loginPanel = document.querySelector('.log-in');
let signupPanel = document.querySelector('.sign-up');
let loginLogIn = document.querySelector('.log-in__log-in-btn');
let loginSignUp = document.querySelector('.log-in__sign-up-btn');
let signupLogIn = document.querySelector('.sign-up__log-in-btn');
let signupSignUp = document.querySelector('.sign-up__sign-up-btn');

let forgotPass = document.querySelector('.sign-up__password-repeat');
let mainBtn = document.querySelector('.btn');
let mainBtnContent = document.querySelector('.btn__text');

// Открытие панели "Регистрация"
loginSignUp.addEventListener('click', function() {
  loginPanel.classList.toggle('hidden');
  signupPanel.classList.toggle('hidden');
  whiteBg.classList.toggle('white-bg--sign-up');
  whiteBg.classList.toggle('white-bg');
  setTimeout(function() {
    forgotPass.classList.toggle('active');
  }, 0);
  mainBtn.classList.toggle('btn--active');
  mainBtnContent.classList.add('btn__text--active');
  mainBtnContent.addEventListener('transitionend', function() {
    mainBtnContent.innerHTML = "Зарегистрироваться";
    mainBtnContent.classList.remove('btn__text--active');
  });
});

// Функция, завершающая событие открытия панели "Вход"
function removeEvent() {
  if (signupPanel.classList.contains('hidden')) {
    forgotPass.classList.toggle('active');
    mainBtn.removeEventListener('transitionend', removeEvent);
  }
}

// Открытие панели "Вход"
signupLogIn.addEventListener('click', function() {
  signupPanel.classList.toggle('hidden');
  loginPanel.classList.toggle('hidden');
  whiteBg.classList.toggle('white-bg');
  whiteBg.classList.toggle('white-bg--sign-up');
  mainBtn.classList.toggle('btn--active');
  mainBtn.addEventListener('transitionend', removeEvent);
  mainBtnContent.classList.add('btn__text--active');
  mainBtnContent.addEventListener('transitionend', function() {
    mainBtnContent.innerHTML = "Вход";
    mainBtnContent.classList.remove('btn__text--active');
  });
});