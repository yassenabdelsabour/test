
var arrayofquotes=[
 {
  quote: 'I\'ve learned that people will forget what you said, people will forget what you did, but people will never forget how you made them feel.',
  author: 'Maya Angelou',
 },
 { 
  quote: 'Attitude is a choice. Happiness is a choice. Optimism is a choice. Kindness is a choice. Giving is a choice. Respect is a choice. Whatever choice you make makes you. Choose wisely.',
  author: 'Roy T. Bennett', 
 },
 {
  quote: 'No matter how much suffering you went through, you never wanted to let go of those memories.',
  author: 'haruki murakami', 
 },
 {
  quote: 'We are addicted to our thoughts. We cannot change anything if we cannot change our thinking',
  author: 'Santosh Kalwar', 
 },
 {
  quote: 'Love is that condition in which the happiness of another person is essential to your own',
  author: 'Robert A. Heinlein', 
 },
 { 
  quote: 'Love is like the wind, you can\'t see it but you can feel it.',
  author: ' Nicholas Sparks',
 },
];

function getQuote()
{
 var random = Number.parseInt(Math.random()*arrayofquotes.length);
 document.querySelector('#quoteoutput').textContent = `\"${arrayofquotes[random].quote}\"`;
 document.querySelector('#authoroutput').textContent = `--${arrayofquotes[random].author}`;
}
