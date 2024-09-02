document.addEventListener("DOMContentLoaded", function () {
  let gallery = document.getElementById("gallery");

  fetch("./data.json")
    .then((response) => response.json())
    .then((data) => displayGallery(data))
    .catch((error) => console.error("Error fetching data:", error));

  // Функция для отображения информации о героях
  const superheroes = JSON.parse(data);
  console.log(typeof superheroes);
  function displayGallery(superheroes) {
    gallery.innerHTML = "";
    superheroes.forEach((superhero) => {
      /*const superhero = document.createElement("div");*/
      superhero.classList.add("superhero");
      superhero.innerHTML = `
          <img src="${superhero.url}" alt="${superhero.name}">
          <h2>${superhero.name}</h2>
          <p><strong>Universe:</strong> ${superhero.universe}</p>
          <p><strong>Alter Ego:</strong> ${superhero.alterego}</p>
          <p><strong>Occupation:</strong> ${superhero.occupation}</p>
          <p><strong>Friends:</strong> ${superhero.friends}</p>
          <p><strong>Superpowers:</strong> ${superhero.superpowers}</p>
          <div class="rating" data-superhero="${superhero.name}">
            <span class="star" data-value="1">⭐</span>
            <span class="star" data-value="2">⭐</span>
            <span class="star" data-value="3">⭐</span>
            <span class="star" data-value="4">⭐</span>
            <span class="star" data-value="5">⭐</span>
          </div>
        `;
      gallery.appendChild(superhero);
    });

    // Добавляем обработчики событий для оценки героев
    const stars = document.querySelectorAll(".star");
    stars.forEach((star) => {
      star.addEventListener("click", function () {
        const superheroName = this.parentElement.getAttribute("data-superhero");
        const rating = parseInt(this.getAttribute("data-value"));
        localStorage.setItem(superheroName, rating);
        alert(`You have rated ${superheroName} with ${rating} stars`);
      });
    });
  }

  displayGallery(superheroes);
});
