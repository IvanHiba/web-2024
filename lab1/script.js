const genres = ['Action', 'Drama', 'Sci-Fi', 'Comedy', 'Horror'];
const movieListItems = document.querySelectorAll('#movieList li');

function displayCurrentTime() {
  const now = new Date();
  document.getElementById('currentTime').textContent = `Current Time: ${now.toLocaleTimeString()}`;
  setTimeout(displayCurrentTime, 1000);
}

function randomBackgroundColor() {
  const colors = ['#ffeadb', '#d3f9d8', '#fce1e4', '#cce5ff', '#fff7c2'];
  const randomColor = colors[Math.floor(Math.random() * colors.length)];
  document.body.style.backgroundColor = randomColor;
}

function submitGenre() {
  const genre = document.getElementById('genreInput').value;
  if (genre) {
    document.getElementById('suggestion').textContent = `Explore the best of ${genre} movies!`;
  } else {
    document.getElementById('suggestion').textContent = 'Please enter a genre!';
  }
}

function highlightMovie() {
  movieListItems.forEach(item => item.classList.remove('highlighted'));
  this.classList.add('highlighted');
}

document.getElementById('randomBgColor').addEventListener('click', randomBackgroundColor);
document.getElementById('submitGenre').addEventListener('click', submitGenre);
movieListItems.forEach(item => item.addEventListener('click', highlightMovie));
displayCurrentTime();
