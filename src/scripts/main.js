const artHead = document.querySelector(".article__header");
artHead.textContent = "Welcome to the Jobe Blog";

const allArtHead = document.querySelectorAll(".article__header");
allArtHead.forEach(element => {
  element.classList.add("important")
}
  )

const dash = document.querySelector(".dashed");
dash.classList.remove("dashed");

const foot = document.querySelector(".article__footer");
foot.classList.add("goldenrod")