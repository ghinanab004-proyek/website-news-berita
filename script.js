function searchNews() {
  const query = document.getElementById("searchInput").value.toLowerCase();
  const cards = document.querySelectorAll(".news-card");

  cards.forEach(card => {
    const text = card.textContent.toLowerCase();
    card.parentElement.style.display = text.includes(query) ? "block" : "none";
  });
}


