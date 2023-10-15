const quotes = [
    {
        quote: "The gratification comes in the doing, not in the results.",
        author: "James Dean",
    },
    {
        quote: "It is only the ignorant who despise education.",
        author: "Publilius Syrus",
    },
    {
        quote: "When you have got an elephant by the hind leg, and he is trying to run away, it's best to let him run.",
        author: "Abraham Lincoln",
    },
    {
        quote: "Grasp the subject, the words will follow.",
        author: "Cato the Elder",
    },
    {
        quote: "The greatest risk is the risk of riskless living.",
        author: "Stephen Covey",
    },
    {
        quote: "Life is a risk.",
        author: "Diane Frolov",
    },
    {
        quote: "To win without risk is to triumph without glory.",
        author: "Pierre Corneille",
    },
    {
        quote: "The journey is the reward.",
        author: "Steve Jobs",
    },
    {
        quote: "Well begun is half done.",
        author: "Aristotle",
    },
    {
        quote: "Ability is of little account without opportunity.",
        author: "Napoleon Bonaparte",
    },
];

const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");

const todaysQuote = quotes[Math.floor(Math.random() * quotes.length)];

quote.innerText = todaysQuote.quote;
author.innerText = todaysQuote.author;