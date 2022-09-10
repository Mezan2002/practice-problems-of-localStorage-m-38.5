const openPrompt = () => {
  const input = prompt("Please Enter Your Number");
  if (isNaN(input)) {
    alert("Sorry sir please enter a valid number!!!");
  } else {
    const inputToNumber = parseInt(input);
    alert(inputToNumber + 250);
  }
};
