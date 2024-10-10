const loadAllCards = async () => {
  const response = await fetch(
    "https://www.themealdb.com/api/json/v1/1/categories.php"
  );
  const data = await response.json();
  document.getElementById("showAllButton").addEventListener("click", () => {
    document.getElementById("cards-container").innerHTML = "";
    displayAllCards(data.categories);
  });
  displayAllCards(data.categories.slice(0, 6));
};

// Card Details Section Code Start Here
const displayAllCards = (cards) => {
  cards.forEach((card) => {
    const {
      strCategoryThumb,
      strCategory,
      strCategoryDescription,
      idCategory,
    } = card;
    const cardsContainer = document.getElementById("cards-container");
    const div = document.createElement("div");
    div.innerHTML = `
    <div class="card">
          <img class="cardImg" src=${strCategoryThumb} />
          <div>
            <h3>${strCategory}</h3>
            <p class="cardPara">
              ${strCategoryDescription.slice(0, 150)}
            </p>
            <a onclick="loadModal('${idCategory}')">View Details</a>
          </div>
        </div>
  `;
    cardsContainer.appendChild(div);
  });
};

// Modal section Code Start Here
const loadModal = async (ids) => {
  document.getElementById("modal-container").innerHTML = "";
  const response = await fetch(
    `https://www.themealdb.com/api/json/v1/1/lookup.php?i=5277${ids}`
  );
  const data = await response.json();
  displayModal(data.meals);
};
const displayModal = (modalDetails) => {
  modalDetails.forEach((modalId) => {
    const { strMealThumb, strCategory, strArea, strInstructions, strYoutube } =
      modalId;
    const modalContainer = document.getElementById("modal-container");
    const div = document.createElement("div");
    div.innerHTML = `
    <dialog id="customModal" class="modal modal-bottom sm:modal-middle">
        <div class="modal-box w-11/12 max-w-4xl">
          <h3 class="">Chicken Handi</h3>
          <hr />
          <img class="mt-8 mb-10 rounded-lg" src=${strMealThumb} />
          <p class="mb-4"><span>Category :</span> ${strCategory}</p>
          <p class="mb-4"><span>Area : </span> ${strArea}</p>
          <p class="mb-4">
            <span>Instructions : </span> ${strInstructions}
          </p>
          <p class="mb-4">
            <span> Youtube : </span> ${strYoutube}
          </p>
          <div class="modal-action">
            <form method="dialog">
              <button class="closeBtn btn">Close</button>
            </form>
          </div>
        </div>
      </dialog>
    `;
    modalContainer.appendChild(div);
    customModal.showModal();
  });
};

loadAllCards();
