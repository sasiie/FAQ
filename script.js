// A function that adds and remove the class "active" on the section you click on.
function toggle(e) {
  const element = e.target;
  element.classList.toggle("active");
}

// Selects and HTML element, and calls a function which will be executed when the element is clicked.
const section1Element = document.getElementById("section1");
section1Element.addEventListener("click", toggle);

const section2Element = document.getElementById("section2");
section2Element.addEventListener("click", toggle);

const section3Element = document.getElementById("section3");
section3Element.addEventListener("click", toggle);

//fetch
const accordion = document.querySelector(".accordion");
fetch("https://jsonplaceholder.typicode.com/posts")
  .then((response) => response.json())
  .then((data) => {
    data.forEach((item) => {
      const section = document.createElement("div");
      section.classList.add("section");
      section.textContent = item.title;
      const description = document.createElement("div");
      description.classList.add("description");
      description.textContent = item.body;
      description.style.display = "none";

      section.addEventListener("click", () => {
        description.style.display =
          description.style.display === "none" ? "block" : "none";
      });
      accordion.appendChild(section);
      accordion.appendChild(description);
    });
  })
  .catch((error) => {
    console.error("Error fetching data:", error);
  });
