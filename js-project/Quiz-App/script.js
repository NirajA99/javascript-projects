const questions = [
    {
    question: 'Which is largest animal in the world?',
    answers :[
        {text: 'Lion' ,correct : false},
        {text: 'Shark' ,correct : false},
        {text: 'Tiger' ,correct : false},
        {text: 'Elephant' ,correct : true}
        ]
    },
    {
        question: 'Which is the smallest continent in the world?',
        answers :[
            {text: 'Australia' ,correct : true},
            {text: 'Arctic' ,correct : false},
            {text: 'Africa' ,correct : false},
            {text: 'Asia' ,correct : false}
            ]
        },
    {
        question: 'Which is smallest country in the world?',
        answers:[
            {text: 'Nepal' ,correct : false},
            {text: 'Bhutan' ,correct : false},
            {text: 'Vatican City' ,correct : true},
            {text: 'Shri Lanka' ,correct : false}
            ]
        },
        {
            question: 'Which is the largest desert in the world?',
            answers :[
                {text: 'Gobi' ,correct : false},
                {text: 'Sahara' ,correct : false},
                {text: 'Kalahari' ,correct : false},
                {text: 'Antartica' ,correct : true}
                ]
            },
];

const questionElement = document.getElementById('question');
const ansBtn = document.getElementById('answer-button');
const nextBtn = document.getElementById('next-btn');

let currentQuesIndex = 0;
let result = 0;

function startQuiz(){
    currentQuesIndex = 0;
    score = 0;
    nextBtn.innerHTML= 'Next';
}

function showQuestion(){
    
}