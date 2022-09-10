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

// send button start
const sendAll = () => {
  const name = getInputValueById("nameField");
  const email = getInputValueById("emailField");
  const message = getInputValueById("messageField");
  showInfo(name, email, message);
};
// send button end

// save items as a object start
const getInfoFromLocalStorage = () => {
  let info = {};
  let savedInfo = localStorage.getItem(info);
  if (savedInfo) {
    const info = JSON.parse(savedInfo);
  }
  return info;
};
//
const showInfo = (name, email, message) => {
  const info = getInfoFromLocalStorage();
  info.name = name;
  info.email = email;
  info.message = message;

  const infoStringified = JSON.stringify(info);

  localStorage.setItem("info", infoStringified);
};

// save items as a object end

// reset button start
const resetAll = () => {
  localStorage.clear();
};
// reset button end
