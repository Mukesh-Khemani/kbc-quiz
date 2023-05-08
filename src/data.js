const data = [
  {
    id: 1,
    question: "Thanos was killed by?",
    answers: [
      {
        text: "Ironman",
        correct: true,
        is5050: true,
      },
      {
        text: "Hulk",
        correct: false,
        is5050: true,
      },
      {
        text: "Captain America",
        correct: false,
      },
      {
        text: "Spiderman",
        correct: false,
      },
    ],
    hint: "His character's name is Tony Stark."
  },
  {
    id: 2,
    question: "Who is the captain of Chennai Super Kings?",
    answers: [
      {
        text: "Dhoni",
        correct: true,
        is5050: true,
      },
      {
        text: "Bhajji",
        correct: false,
      },
      {
        text: "Sachin",
        correct: false,
      },
      {
        text: "Yuvraj",
        correct: false,
        is5050: true,
      },
    ],
    hint: "His jersey number is '07'."
  },
  {
    id: 3,
    question:
      "What is the capital of India?",
    answers: [
      {
        text: "Mumbai",
        correct: false,
      },
      {
        text: "Delhi",
        correct: true,
        is5050: true,
      },
      {
        text: "Madhya Pradesh",
        correct: false,
        is5050: true,
      },
      {
        text: "Punjab",
        correct: false,
      },
    ],
    hint: "It is a Union Territory."
  },
  {
    id: 4,
    question: "What is the National Bird of India?",
    answers: [
      {
        text: "Parrot",
        correct: false,
        is5050: true,
      },
      {
        text: "Pigeon",
        correct: false,
      },
      {
        text: "Peacock",
        correct: true,
        is5050: true,
      },
      {
        text: "Owl",
        correct: false,
      },
    ],
    hint: "It is green and blue in color."
  },
  {
    id: 5,
    question: "In which of these two sports is the term ‘free hit’ used?",
    answers: [
      {
        text: "Football, Squash",
        correct: false,
        is5050: true,
      },
      {
        text: "Badminton, Tennis",
        correct: false,
      },
      {
        text: "Badminton, Cricket",
        correct: false,
      },
      {
        text: "Hockey, Cricket",
        correct: true,
        is5050: true,
      },
    ],
    hint: "It is the National sport of India."
  },
  {
    id: 6,
    question: "Which country is the host of the G-20 Summit in 2023?",
    answers: [
      {
        text: "USA",
        correct: false,
        is5050: true,
      },
      {
        text: "China",
        correct: false,
      },
      {
        text: "India",
        correct: true,
        is5050: true,
      },
      {
        text: "Japan",
        correct: false,
      },
    ],
    hint: "Its capital is Delhi."
  },
  {
    id: 7,
    question: "Who is the Prime Minister of India?",
    answers: [
      {
        text: "Narendra Modi",
        correct: true,
        is5050: true,
      },
      {
        text: "Akshay Kumar",
        correct: false,
      },
      {
        text: "Amit Shah",
        correct: false,
        is5050: true,
      },
      {
        text: "Yogi Aditya Nath",
        correct: false,
      },
    ],
    hint: "He was the former Chief Minister of Gujarat."
  },
  {
    id: 8,
    question: "Who is the Head of National Security Agency of India?",
    answers: [
      {
        text: "Amit Shah",
        correct: false,
      },
      {
        text: "Yogi Aditya Nath",
        correct: false,
        is5050: true,
      },
      {
        text: "Narendra Modi",
        correct: false,
      },
      {
        text: "Ajit Doval",
        correct: true,
        is5050: true,
      },
    ],
    hint: " He worked as an undercover spy of IB for one year in Pakistan then 6 years as an officer in Indian high commission in Islambad"
  },
  {
    id: 9,
    question: "What is the National animal of India?",
    answers: [
      {
        text: "Tiger",
        correct: true,
        is5050: true,
      },
      {
        text: "Lion",
        correct: false,
        is5050: true,
      },
      {
        text: "Elephant",
        correct: false,
      },
      {
        text: "Anaconda",
        correct: false,
      },
    ],
    hint: "It belongs to the family of cats."
  },
  {
    id: 10,
    question: "Who among the following cricketers is known as the Run Machine?",
    answers: [
      {
        text: "Sachin Tendulkar",
        correct: false,
        is5050: true,
      },
      {
        text: "Virat Kohli",
        correct: true,
        is5050: true,
      },
      {
        text: "Rohit Sharma",
        correct: false,
      },
      {
        text: "Ishan Kishan",
        correct: false,
      },
    ],
    hint: "He plays for the IPL franchise Royal Challengers Bangalore"
  },
  {
    id: 11,
    question: "Which cricketer recently married Athiya Shetty?",
    answers: [
      {
        text: "K.L.Rahul",
        correct: true ,
        is5050: true,
      },
      {
        text: "Hardik Pandya",
        correct: false,
      },
      {
        text: "Krunal Pandya",
        correct: false,
        is5050: true,
      },
      {
        text: "Sanju Samson",
        correct: false,
      },
    ],
    hint: "He plays as an Opening Batsmen"
  },
  {
    id: 12,
    question: "Who is the captain of the Indian Cricket team?",
    answers: [
      {
        text: "Virat Kohli",
        correct: false,
        is5050: true,
      },
      {
        text: "K.L.Rahul",
        correct: false,
      },
      {
        text: "Rohit Sharma",
        correct: true,
        is5050: true,
      },
      {
        text: "Hardik Pandya",
        correct: false,
      },
    ],
    hint: "His nickname is 'Hitman'"
  },
  
];

const prizeMoney = [
  { id: 1, amount: "₹ 1000" },
  { id: 2, amount: "₹ 2000" },
  { id: 3, amount: "₹ 5000" },
  { id: 4, amount: "₹ 10000" },
  { id: 5, amount: "₹ 20000" },
  { id: 6, amount: "₹ 40000" },
  { id: 7, amount: "₹ 80000" },
  { id: 8, amount: "₹ 160000" },
  { id: 9, amount: "₹ 320000" },
  { id: 10, amount: "₹ 6400000" },
  { id: 11, amount: "₹ 1250000" },
  { id: 12, amount: "₹ 2500000" },

].reverse();

export { prizeMoney, data };
