let element = React.createElement(
  //first argument is element type
  "a",
  //second arugment is element props
  { href: "mailto:sidramaqbool64@yahoo.com" },
  //children
  React.createElement("img", {
    src: "https://imgs.xkcd.com/comics/random_number.png",
    alt: "RFC 1149.5 specifies 4 as the standard IEEE-vetted random number",
  }),
  React.createElement("span", null, "Sidra Maqbool")
);
console.log(element.props.children[0].type);
console.log(element.props.children[1].props.children);
ReactDOM.render(element, document.getElementById("root"));
