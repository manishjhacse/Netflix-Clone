const accordians = document.querySelectorAll(".accordian");

accordians.forEach((accordian) => {
  const icon = accordian.querySelector(".icon");
  const answer = accordian.querySelector(".answer");

  accordian.addEventListener("click", () => {
    if (icon.classList.contains("active")) {
      icon.classList.remove("active");
      answer.style.maxHeight = null;
    } else {
    for(let val of accordians)
    {
      const icon = val.querySelector(".icon");
      const answer = val.querySelector(".answer");
      icon.classList.remove("active")
      answer.style.maxHeight = null;
    }

      icon.classList.add("active");
      answer.style.maxHeight = answer.scrollHeight + "px";
    }
  });
});
