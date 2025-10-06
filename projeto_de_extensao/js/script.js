document.querySelectorAll('.card-flip').forEach(card => {
  card.addEventListener('click', function() {
    card.classList.toggle('flipped');
  });
});