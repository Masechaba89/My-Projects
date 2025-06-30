


const magnifierElement = document.querySelector(".magnifier");
const searchBarContainerEl = document.querySelector(".search-bar-container");

magnifierElement.addEventListener("click", () => {
    searchBarContainerEl.classList.toggle("active");
    
});

    