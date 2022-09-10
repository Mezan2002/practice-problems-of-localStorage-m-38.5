const setName = () => {
  localStorage.setItem("name", "sakib khan");
  alert(localStorage.getItem("name"));
};
const removeName = () => {
  localStorage.removeItem("name");
};

const setAge = () => {
  localStorage.setItem("age", "40Years");
  alert(localStorage.getItem("age"));
};

const removeAge = () => {
  localStorage.removeItem("age");
};

const name = {
  firstName: "Abraham",
  lastName: "Lincon",
};

localStorage.setItem("name", JSON.stringify(name));
