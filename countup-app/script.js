let count = 0;
const countSpan = document.getElementById("count");
const btn = document.getElementById("btn");

btn.addEventListener("click", () => {
  count++;
  countSpan.textContent = count;
});
