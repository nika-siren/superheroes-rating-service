document.addEventListener("DOMContentLoaded", function () {
  let gallery = document.getElementById("gallery");

  fetch("./scripts/data.json")
    .then((response) => response.json())
    .then((data) => {
      const superheroes = data;
      displayGallery(superheroes);
    })
    .catch((error) => console.error("Error fetching data:", error));

  // Функция для отображения информации о героях
  function displayGallery(superheroes) {
    gallery.innerHTML = "";
    superheroes.forEach((superhero) => {
      const superheroElement = document.createElement("div");
      superheroElement.classList.add("superhero");
      superheroElement.innerHTML = `<img src="${superhero.url}"
      alt="${superhero.name}">
      <h2>${superhero.name}</h2>
      <p><strong>Universe:</strong> ${superhero.universe}</p>
      <p><strong>Alter Ego:</strong> ${superhero.alterego}</p>
      <p><strong>Occupation:</strong> ${superhero.occupation}</p>
      <p><strong>Friends:</strong> ${superhero.friends}</p>
      <p><strong>Superpowers:</strong> ${superhero.superpowers}</p>
      <div class="rating" data-superhero="${superhero.name}">
      
      <form class="rating">
      <div class="rating__stars">
      <input id="rating-${superhero.name}-1" class="rating__input rating__input-1" type="radio" name="rating" value="1">
      <input id="rating-${superhero.name}-2" class="rating__input rating__input-2" type="radio" name="rating" value="2">
      <input id="rating-${superhero.name}-3" class="rating__input rating__input-3" type="radio" name="rating" value="3">
      <input id="rating-${superhero.name}-4" class="rating__input rating__input-4" type="radio" name="rating" value="4">
      <input id="rating-${superhero.name}-5" class="rating__input rating__input-5" type="radio" name="rating" value="5">
      <label class="rating__label" for="rating-${superhero.name}-1">
      <svg class="rating__star" width="32" height="32" viewBox="0 0 32 32" aria-hidden="true">
				<g transform="translate(16,16)">
					<circle class="rating__star-ring" fill="none" stroke="#000" stroke-width="16" r="8" transform="scale(0)" />
				</g>
				<g stroke="#000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
					<g transform="translate(16,16) rotate(180)">
						<polygon class="rating__star-stroke" points="0,15 4.41,6.07 14.27,4.64 7.13,-2.32 8.82,-12.14 0,-7.5 -8.82,-12.14 -7.13,-2.32 -14.27,4.64 -4.41,6.07" fill="none" />
						<polygon class="rating__star-fill" points="0,15 4.41,6.07 14.27,4.64 7.13,-2.32 8.82,-12.14 0,-7.5 -8.82,-12.14 -7.13,-2.32 -14.27,4.64 -4.41,6.07" fill="#000" />
					</g>
					<g transform="translate(16,16)" stroke-dasharray="12 12" stroke-dashoffset="12">
						<polyline class="rating__star-line" transform="rotate(0)" points="0 4,0 16" />
						<polyline class="rating__star-line" transform="rotate(72)" points="0 4,0 16" />
						<polyline class="rating__star-line" transform="rotate(144)" points="0 4,0 16" />
						<polyline class="rating__star-line" transform="rotate(216)" points="0 4,0 16" />
						<polyline class="rating__star-line" transform="rotate(288)" points="0 4,0 16" />
					</g>
				</g>
			</svg>
			<span class="rating__sr">1 star—Terrible</span>
      </label>

      <label class="rating__label" for="rating-${superhero.name}-2">
			<svg class="rating__star" width="32" height="32" viewBox="0 0 32 32" aria-hidden="true">
				<g transform="translate(16,16)">
					<circle class="rating__star-ring" fill="none" stroke="#000" stroke-width="16" r="8" transform="scale(0)" />
				</g>
				<g stroke="#000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
					<g transform="translate(16,16) rotate(180)">
						<polygon class="rating__star-stroke" points="0,15 4.41,6.07 14.27,4.64 7.13,-2.32 8.82,-12.14 0,-7.5 -8.82,-12.14 -7.13,-2.32 -14.27,4.64 -4.41,6.07" fill="none" />
						<polygon class="rating__star-fill" points="0,15 4.41,6.07 14.27,4.64 7.13,-2.32 8.82,-12.14 0,-7.5 -8.82,-12.14 -7.13,-2.32 -14.27,4.64 -4.41,6.07" fill="#000" />
					</g>
					<g transform="translate(16,16)" stroke-dasharray="12 12" stroke-dashoffset="12">
						<polyline class="rating__star-line" transform="rotate(0)" points="0 4,0 16" />
						<polyline class="rating__star-line" transform="rotate(72)" points="0 4,0 16" />
						<polyline class="rating__star-line" transform="rotate(144)" points="0 4,0 16" />
						<polyline class="rating__star-line" transform="rotate(216)" points="0 4,0 16" />
						<polyline class="rating__star-line" transform="rotate(288)" points="0 4,0 16" />
					</g>
				</g>
			</svg>
			<span class="rating__sr">2 stars—Bad</span>
      </label>

      <label class="rating__label" for="rating-${superhero.name}-3">
			<svg class="rating__star" width="32" height="32" viewBox="0 0 32 32" aria-hidden="true">
				<g transform="translate(16,16)">
					<circle class="rating__star-ring" fill="none" stroke="#000" stroke-width="16" r="8" transform="scale(0)" />
				</g>
				<g stroke="#000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
					<g transform="translate(16,16) rotate(180)">
						<polygon class="rating__star-stroke" points="0,15 4.41,6.07 14.27,4.64 7.13,-2.32 8.82,-12.14 0,-7.5 -8.82,-12.14 -7.13,-2.32 -14.27,4.64 -4.41,6.07" fill="none" />
						<polygon class="rating__star-fill" points="0,15 4.41,6.07 14.27,4.64 7.13,-2.32 8.82,-12.14 0,-7.5 -8.82,-12.14 -7.13,-2.32 -14.27,4.64 -4.41,6.07" fill="#000" />
					</g>
					<g transform="translate(16,16)" stroke-dasharray="12 12" stroke-dashoffset="12">
						<polyline class="rating__star-line" transform="rotate(0)" points="0 4,0 16" />
						<polyline class="rating__star-line" transform="rotate(72)" points="0 4,0 16" />
						<polyline class="rating__star-line" transform="rotate(144)" points="0 4,0 16" />
						<polyline class="rating__star-line" transform="rotate(216)" points="0 4,0 16" />
						<polyline class="rating__star-line" transform="rotate(288)" points="0 4,0 16" />
					</g>
				</g>
			</svg>
			<span class="rating__sr">3 stars—OK</span>
      </label>

      <label class="rating__label" for="rating-${superhero.name}-4">
			<svg class="rating__star" width="32" height="32" viewBox="0 0 32 32" aria-hidden="true">
				<g transform="translate(16,16)">
					<circle class="rating__star-ring" fill="none" stroke="#000" stroke-width="16" r="8" transform="scale(0)" />
				</g>
				<g stroke="#000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
					<g transform="translate(16,16) rotate(180)">
						<polygon class="rating__star-stroke" points="0,15 4.41,6.07 14.27,4.64 7.13,-2.32 8.82,-12.14 0,-7.5 -8.82,-12.14 -7.13,-2.32 -14.27,4.64 -4.41,6.07" fill="none" />
						<polygon class="rating__star-fill" points="0,15 4.41,6.07 14.27,4.64 7.13,-2.32 8.82,-12.14 0,-7.5 -8.82,-12.14 -7.13,-2.32 -14.27,4.64 -4.41,6.07" fill="#000" />
					</g>
					<g transform="translate(16,16)" stroke-dasharray="12 12" stroke-dashoffset="12">
						<polyline class="rating__star-line" transform="rotate(0)" points="0 4,0 16" />
						<polyline class="rating__star-line" transform="rotate(72)" points="0 4,0 16" />
						<polyline class="rating__star-line" transform="rotate(144)" points="0 4,0 16" />
						<polyline class="rating__star-line" transform="rotate(216)" points="0 4,0 16" />
						<polyline class="rating__star-line" transform="rotate(288)" points="0 4,0 16" />
					</g>
				</g>
			</svg>
			<span class="rating__sr">4 stars—Good</span>
      </label>

      <label class="rating__label" for="rating-${superhero.name}-5">
			<svg class="rating__star" width="32" height="32" viewBox="0 0 32 32" aria-hidden="true">
				<g transform="translate(16,16)">
					<circle class="rating__star-ring" fill="none" stroke="#000" stroke-width="16" r="8" transform="scale(0)" />
				</g>
				<g stroke="#000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
					<g transform="translate(16,16) rotate(180)">
						<polygon class="rating__star-stroke" points="0,15 4.41,6.07 14.27,4.64 7.13,-2.32 8.82,-12.14 0,-7.5 -8.82,-12.14 -7.13,-2.32 -14.27,4.64 -4.41,6.07" fill="none" />
						<polygon class="rating__star-fill" points="0,15 4.41,6.07 14.27,4.64 7.13,-2.32 8.82,-12.14 0,-7.5 -8.82,-12.14 -7.13,-2.32 -14.27,4.64 -4.41,6.07" fill="#000" />
					</g>
					<g transform="translate(16,16)" stroke-dasharray="12 12" stroke-dashoffset="12">
						<polyline class="rating__star-line" transform="rotate(0)" points="0 4,0 16" />
						<polyline class="rating__star-line" transform="rotate(72)" points="0 4,0 16" />
						<polyline class="rating__star-line" transform="rotate(144)" points="0 4,0 16" />
						<polyline class="rating__star-line" transform="rotate(216)" points="0 4,0 16" />
						<polyline class="rating__star-line" transform="rotate(288)" points="0 4,0 16" />
					</g>
				</g>
			</svg>
			<span class="rating__sr">5 stars—Excellent</span>
      </label>
      
      <p class="rating__display" data-rating="1" hidden>Terrible</p>
      <p class="rating__display" data-rating="2" hidden>Bad</p>
      <p class="rating__display" data-rating="3" hidden>OK</p>
      <p class="rating__display" data-rating="4" hidden>Good</p>
      <p class="rating__display" data-rating="5" hidden>Excellent</p>
      </div>
      </form>
      </div>`;

      gallery.appendChild(superheroElement);
    });
  }

  /* starrating part */

  document.addEventListener("DOMContentLoaded", () => {
    const starRating = new StarRating("form");
  });

  class StarRating {
    constructor(qs) {
      this.ratings = [
        { id: 1, name: "Terrible" },
        { id: 2, name: "Bad" },
        { id: 3, name: "OK" },
        { id: 4, name: "Good" },
        { id: 5, name: "Excellent" },
      ];
      this.rating = null;
      this.el = document.querySelector(qs);

      this.init();
    }

    init() {
      this.el.addEventListener("change", this.updateRating.bind(this));

      // stop Firefox from preserving form data between refreshes
      // останавливаем Firefox от сохранения данных формы между обновлениями
      // try {
      //  this.el.reset();
      // } catch (err) {
      // console.error("Element isn’t a form.");
        // выводим ошибку в консоль, если элемент не является формой
     // }
    }

    updateRating(e) {
      // clear animation delays
      // очищаем задержки для анимации
      Array.from(this.el.querySelectorAll(`[for^="rating-"]`)).forEach((el) => {
        el.classList.remove(
          "rating__label--delay1",
          "rating__label--delay2",
          "rating__label--delay3",
          "rating__label--delay4"
        );
      });

      const ratingObject = this.ratings.find((r) => r.id === +e.target.value);
      const prevRatingID = this.rating ? this.rating.id : 0;

      let delay = 0;
      this.rating = ratingObject;
      this.ratings.forEach((rating) => {
        const { id } = rating;

        // add the delays
        // добавляем задержки
        const ratingLabel = this.el.querySelector(`[for="rating-${id}"]`);

        if (id > prevRatingID + 1 && id <= this.rating.id) {
          ++delay;
          ratingLabel.classList.add(`rating__label--delay${delay}`);
        }

        // hide ratings to not read, show the one to read
        // скрываем оценки, которые не нужно показывать, показываем нужную оценку
        const ratingTextEl = this.el.querySelector(`[data-rating="${id}"]`);

        if (this.rating.id !== id) ratingTextEl.setAttribute("hidden", true);
        else ratingTextEl.removeAttribute("hidden");
      });
    }
  }

  /* starrating part */

  /*
      // Добавляем обработчики событий для оценки героев
      const stars = superheroElement.querySelectorAll(".star");
      stars.forEach((star) => {
        star.addEventListener("click", function () {
          const superheroName =
            this.parentElement.getAttribute("data-superhero");
          const rating = parseInt(this.getAttribute("data-value"));
          localStorage.setItem(superheroName, rating);
          alert(`You have rated ${superheroName} with ${rating} stars`);
        });
      });
    });
  }
    */
});
