const factorial = (num = undefined) => {
  num === undefined && console.warn("you need to put a number here dude");
  Math.sign(num) === -1 && console.warn("you need to pur a positive number");
  typeof num === "string" &&
    console.warn("you need write a number, not a text");
  console.log("everything okay");

  let initialnum = 1;

  for (let i = num; i > 1; i--) {
    initialnum *= i;
  }

  return console.log(`the facotial of ${num} is ${initialnum}`);
};

factorial(6);

// let text = "hello obito, i wanna tell you that shira mancilla loves you";

// const talk = (text) =>
//   speechSynthesis.speak(new SpeechSynthesisUtterance(text));

// talk(text);
