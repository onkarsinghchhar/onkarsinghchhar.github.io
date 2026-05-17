const menuToggle = document.getElementById('menuToggle');
const navLinks = document.getElementById('navLinks');
const courseSearch = document.getElementById('courseSearch');
const searchButton = document.getElementById('searchButton');
const courseCards = [...document.querySelectorAll('.course-card')];

menuToggle.addEventListener('click', () => navLinks.classList.toggle('open'));

function filterCourses() {
  const q = courseSearch.value.toLowerCase().trim();
  courseCards.forEach(card => {
    const title = card.dataset.title.toLowerCase();
    card.style.display = title.includes(q) ? 'block' : 'none';
  });
}

searchButton.addEventListener('click', filterCourses);
courseSearch.addEventListener('keyup', filterCourses);

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) entry.target.classList.add('visible');
  });
}, { threshold: .15 });

document.querySelectorAll('.reveal').forEach(el => observer.observe(el));
