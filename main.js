import './style.css'

//array of questions
const FAQ = [
  {
    question: "How many bones does a cat have?",
    answer: "A cat has 230 bones - 6 more than a human",
  },
  {
    question: "How much do cats sleep?",
    answer: "The average cat sleeps 12-16 hours per day",
  },
  {
    question: "How long do cats live",
    answer: "Outdoor cats live 5 years on average. Indoor cats live 15 years on average.",
  },
];

//main logic using map
var faq = document.querySelector('#faq');
faq.innerHTML = FAQ.map(function (faq) {
	return `
  <details>
        <summary>${faq.question}</summary>
        <p>${faq.answer}</p>
  </details>
  `;
}).join(''); //default is ,

//make the first FAQ open on load
const firstdetail = document.querySelector('details')
firstdetail.setAttribute("open", "open");