const scrollButton = document.querySelector(".scroll__button");
const sectionBlock = document.querySelector("section.info");

scrollButton.addEventListener("click", e => {
  e.preventDefault();

  sectionBlock.scrollIntoView({ block: "center", behavior: "smooth" });
});