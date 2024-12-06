"use strict";

function Question (questionText, answerOptions, correctAnswer) {
    this.questionText = questionText;
    this.answerOptions = answerOptions;
    this.correctAnswer = correctAnswer;
}

Question.prototype.checkTheAnswer = function (answer) {
    return this.correctAnswer === answer;
}

const questions = [
    new Question("1-Hangisi Javascript paket yönetim uygulamasıdır?", { a: "Node.js", b: "Typescript", c: "Nuget", d: "Npm"}, "d"),
    new Question("2-Hangisi frontend kapsamında değerlendirilmez?", { a: "Css", b: "Html", c: "JavaScript", d: "Sql" }, "d"),
    new Question("3-Hangisi backend kapsamında değerlendirilir?", { a: "Node.js", b: "Typescript", c: "Angular", d: "React" }, "a"),
    new Question("4-Hangisi javascript programlama dilini kullanmaz?", { a: "React", b: "Angular", c: "VueJs", d: "Asp.net" }, "d")
];

console.log(questions[0].checkTheAnswer("a"));