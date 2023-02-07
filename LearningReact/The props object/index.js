ReactDOM.render(
  React.createElement(
    "a",
    {
      id: "home",
      href: "https://frontarm.com",
    },
    "Frontend Armory"
  ),
  document.getElementById("root")
);

const input = document.querySelector("input");
console.log(input.value);
input.value = "New input";
console.log(input.value);
