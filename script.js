function buyNow() {
  let name = prompt("What is your name?");
  let email = prompt("What is your email?");

  if (name > "1" && email > "1") {
    alert(
      "Hi " +
        name +
        ", thank you for your interest in our spices, we'll be in touch. Meanwhile, tell us your favourite Spice! 😃"
    );
  } else {
    alert("Sorry, no name, no Spices!");
  }
}

let spiceButton =
  document.querySelector("button");
spiceButton.addEventListener("click", buyNow);
