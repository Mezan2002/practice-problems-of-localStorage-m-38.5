// name buttons start
const getInputValueById = (id) => {
  const inputField = document.getElementById(id);
  const inputValue = inputField.value;
  return inputValue;
};

const saveName = () => {
  const name = getInputValueById("nameField");
  localStorage.setItem("name", name);
};

const deleteName = () => {
  localStorage.removeItem("name");
};
// name buttons end

// email buttons start
const saveEmail = () => {
  const email = getInputValueById("emailField");
  localStorage.setItem("email", email);
};

const deleteEmail = () => {
  localStorage.removeItem("email");
};
// email buttons end

// message buttons start
const saveMessage = () => {
  const message = getInputValueById("messageField");
  localStorage.setItem("message", message);
};

const deleteMessage = () => {
  localStorage.removeItem("message");
};
// message buttons end

// reset button start
const resetAll = () => {
  localStorage.clear();
};
// reset button end
