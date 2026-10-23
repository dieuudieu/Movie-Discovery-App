// Dữ liệu mẫu. Có thể thay mảng này bằng mảng phim do giảng viên cung cấp.
const movies = [
  {id:1,title:'Inception',year:2010,genres:['Khoa học viễn tưởng','Hành động'],rating:8.8,director:'Christopher Nolan',cast:'Leonardo DiCaprio, Joseph Gordon-Levitt',description:'Một chuyên gia xâm nhập giấc mơ nhận nhiệm vụ gieo một ý tưởng vào tiềm thức của mục tiêu.',poster:'images/inception.svg'},
  {id:2,title:'Interstellar',year:2014,genres:['Khoa học viễn tưởng','Phiêu lưu'],rating:8.7,director:'Christopher Nolan',cast:'Matthew McConaughey, Anne Hathaway',description:'Những nhà du hành vượt qua hố sâu vũ trụ để tìm một tương lai mới cho nhân loại.',poster:'images/interstellar.svg'},
  {id:3,title:'The Dark Knight',year:2008,genres:['Hành động','Tội phạm'],rating:9.0,director:'Christopher Nolan',cast:'Christian Bale, Heath Ledger',description:'Batman đối mặt Joker, kẻ đẩy thành phố Gotham vào hỗn loạn và thử thách giới hạn đạo đức của anh.',poster:'images/dark-knight.svg'},
  {id:4,title:'Parasite',year:2019,genres:['Tâm lý','Giật gân'],rating:8.5,director:'Bong Joon-ho',cast:'Song Kang-ho, Choi Woo-shik',description:'Hai gia đình ở hai tầng lớp xã hội dần bị cuốn vào một chuỗi sự kiện khó lường.',poster:'images/parasite.svg'},
  {id:5,title:'Spirited Away',year:2001,genres:['Hoạt hình','Phiêu lưu'],rating:8.6,director:'Hayao Miyazaki',cast:'Rumi Hiiragi, Miyu Irino',description:'Cô bé Chihiro bước vào thế giới linh hồn và tìm cách cứu cha mẹ mình.',poster:'images/spirited-away.svg'},
  {id:6,title:'The Matrix',year:1999,genres:['Hành động','Khoa học viễn tưởng'],rating:8.7,director:'Lana Wachowski, Lilly Wachowski',cast:'Keanu Reeves, Laurence Fishburne',description:'Một lập trình viên khám phá thế giới mình biết có thể chỉ là mô phỏng.',poster:'images/matrix.svg'},
  {id:7,title:'Your Name',year:2016,genres:['Hoạt hình','Lãng mạn'],rating:8.4,director:'Makoto Shinkai',cast:'Ryunosuke Kamiki, Mone Kamishiraishi',description:'Hai thiếu niên xa lạ bất ngờ hoán đổi cơ thể và tìm cách gặp nhau.',poster:'images/your-name.svg'},
  {id:8,title:'Titanic',year:1997,genres:['Lãng mạn','Tâm lý'],rating:7.9,director:'James Cameron',cast:'Leonardo DiCaprio, Kate Winslet',description:'Một chuyện tình vượt qua ranh giới giai cấp trên chuyến hải trình định mệnh.',poster:'images/titanic.svg'},
  {id:9,title:'John Wick',year:2014,genres:['Hành động','Giật gân'],rating:7.4,director:'Chad Stahelski',cast:'Keanu Reeves, Michael Nyqvist',description:'Một cựu sát thủ quay trở lại thế giới ngầm sau biến cố cá nhân.',poster:'images/john-wick.svg'},
  {id:10,title:'Coco',year:2017,genres:['Hoạt hình','Phiêu lưu'],rating:8.4,director:'Lee Unkrich',cast:'Anthony Gonzalez, Gael García Bernal',description:'Cậu bé Miguel khám phá vùng đất người chết để tìm hiểu bí mật của gia đình.',poster:'images/coco.svg'},
  {id:11,title:'The Shawshank Redemption',year:1994,genres:['Tâm lý','Tội phạm'],rating:9.3,director:'Frank Darabont',cast:'Tim Robbins, Morgan Freeman',description:'Câu chuyện về hy vọng và tình bạn của những con người trong nhà tù Shawshank.',poster:'images/shawshank.svg'},
  {id:12,title:'Top Gun: Maverick',year:2022,genres:['Hành động','Tâm lý'],rating:8.2,director:'Joseph Kosinski',cast:'Tom Cruise, Miles Teller',description:'Phi công Maverick trở lại huấn luyện thế hệ phi công trẻ cho một nhiệm vụ đặc biệt.',poster:'images/top-gun.svg'}
];

const movieGrid = document.getElementById('movieGrid');
const genreFilters = document.getElementById('genreFilters');
const searchInput = document.getElementById('searchInput');
const resultCount = document.getElementById('resultCount');
const emptyState = document.getElementById('emptyState');
const modal = document.getElementById('movieModal');
const modalContent = document.getElementById('modalContent');
const themeToggle = document.getElementById('themeToggle');
let searchTerm = '';
let lastFocusedElement = null;

function renderGenres() {
  // flatMap lấy tất cả thể loại, Set loại bỏ tên trùng lặp.
  const genres = [...new Set(movies.flatMap(movie => movie.genres))].sort((a,b) => a.localeCompare(b,'vi'));
  genreFilters.innerHTML = '';
  genres.forEach(genre => {
    const label = document.createElement('label');
    label.className = 'genre-option';
    const checkbox = document.createElement('input');
    checkbox.type = 'checkbox';
    checkbox.value = genre;
    checkbox.addEventListener('change', filterMovies);
    label.append(checkbox, document.createTextNode(genre));
    genreFilters.appendChild(label);
  });
}

function renderMovies(list) {
  movieGrid.innerHTML = '';
  list.forEach(movie => {
    const card = document.createElement('button');
    card.type = 'button';
    card.className = 'movie-card';
    const poster = document.createElement('img');
    poster.className = 'poster';
    poster.src = movie.poster;
    poster.alt = `Poster phim ${movie.title}`;
    poster.loading = 'lazy';
    const info = document.createElement('div');
    info.className = 'movie-info';
    const title = document.createElement('h3');
    title.textContent = movie.title;
    const meta = document.createElement('div');
    meta.className = 'movie-meta';
    const year = document.createElement('span');
    year.textContent = movie.year;
    const rating = document.createElement('span');
    rating.className = 'rating';
    rating.textContent = `★ ${movie.rating}`;
    meta.append(year,rating);
    info.append(title,meta);
    card.append(poster,info);
    card.addEventListener('click', () => openModal(movie));
    movieGrid.appendChild(card);
  });
  resultCount.textContent = `${list.length} / ${movies.length} phim`;
  emptyState.hidden = list.length !== 0;
}

function filterMovies() {
  const selectedGenres = [...genreFilters.querySelectorAll('input:checked')].map(input => input.value);
  const filtered = movies.filter(movie => {
    const matchesGenre = selectedGenres.length === 0 || selectedGenres.some(genre => movie.genres.includes(genre));
    const matchesSearch = movie.title.toLocaleLowerCase('vi').includes(searchTerm);
    return matchesGenre && matchesSearch;
  });
  renderMovies(filtered);
}

function debounce(callback, delay) {
  let timer;
  return function (...args) {
    clearTimeout(timer);
    timer = setTimeout(() => callback(...args), delay);
  };
}

const delayedSearch = debounce(() => {
  searchTerm = searchInput.value.trim().toLocaleLowerCase('vi');
  filterMovies();
}, 400);
searchInput.addEventListener('input', delayedSearch);

document.getElementById('clearFilters').addEventListener('click', () => {
  searchInput.value = '';
  searchTerm = '';
  genreFilters.querySelectorAll('input').forEach(input => input.checked = false);
  filterMovies();
});

function openModal(movie) {
  lastFocusedElement = document.activeElement;
  modalContent.innerHTML = '';
  const body = document.createElement('div');
  body.className = 'modal-body';
  const image = document.createElement('img');
  image.src = movie.poster;
  image.alt = `Poster phim ${movie.title}`;
  const details = document.createElement('div');
  const title = document.createElement('h2');
  title.id = 'modalTitle';
  title.textContent = movie.title;
  details.appendChild(title);
  const summary = document.createElement('p');
  summary.textContent = `${movie.year}  •  ★ ${movie.rating}`;
  details.appendChild(summary);
  movie.genres.forEach(genre => {
    const tag = document.createElement('span');
    tag.className = 'tag';
    tag.textContent = genre;
    details.appendChild(tag);
  });
  [['Mô tả',movie.description],['Đạo diễn',movie.director],['Diễn viên',movie.cast]].forEach(([label,value]) => {
    const p = document.createElement('p');
    const strong = document.createElement('strong');
    strong.className = 'detail-label';
    strong.textContent = `${label}: `;
    p.append(strong, document.createTextNode(value));
    details.appendChild(p);
  });
  body.append(image,details);
  modalContent.appendChild(body);
  modal.hidden = false;
  document.body.style.overflow = 'hidden';
  document.getElementById('closeModal').focus();
}
function closeModal() {
  modal.hidden = true;
  document.body.style.overflow = '';
  if (lastFocusedElement) lastFocusedElement.focus();
}
document.getElementById('closeModal').addEventListener('click', closeModal);
modal.addEventListener('click', event => {if(event.target.dataset.close === 'true') closeModal();});
document.addEventListener('keydown', event => {
  if (modal.hidden) return;
  if (event.key === 'Escape') closeModal();
  if (event.key === 'Tab') {
    // Modal hiện chỉ có một nút tương tác, giữ focus ở nút đóng.
    event.preventDefault();
    document.getElementById('closeModal').focus();
  }
});

function applyTheme(isDark) {
  document.body.classList.toggle('dark-mode', isDark);
  themeToggle.checked = isDark;
  document.getElementById('themeLabel').textContent = isDark ? 'Chế độ sáng' : 'Chế độ tối';
  localStorage.setItem('movie-theme', isDark ? 'dark' : 'light');
}
themeToggle.addEventListener('change', () => applyTheme(themeToggle.checked));
applyTheme(localStorage.getItem('movie-theme') === 'dark');
renderGenres();
renderMovies(movies);
