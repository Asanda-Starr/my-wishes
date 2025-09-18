const wishContainer = document.getElementById('wishContainer');
const addWishBtn = document.getElementById('addWishBtn');
const wishModal = document.getElementById('wishModal');
const closeModal = document.querySelector('.close');
const saveWishBtn = document.getElementById('saveWishBtn');
const wishInput = document.getElementById('wishInput');

// Load wishes from localStorage
let wishes = JSON.parse(localStorage.getItem('wishes')) || [];
displayWishes();

// Show modal
addWishBtn.addEventListener('click', () => {
  wishModal.style.display = 'flex';
  wishInput.value = '';
});

// Close modal
closeModal.addEventListener('click', () => {
  wishModal.style.display = 'none';
});

// Save wish
saveWishBtn.addEventListener('click', () => {
  const text = wishInput.value.trim();
  if(text) {
    const wish = { text, timestamp: new Date().toLocaleString() };
    wishes.push(wish);
    localStorage.setItem('wishes', JSON.stringify(wishes));
    displayWishes();
    wishModal.style.display = 'none';
  }
});

function displayWishes() {
  wishContainer.innerHTML = '';
  wishes.forEach(wish => {
    const div = document.createElement('div');
    div.className = 'wish';
    div.innerHTML = `<p>${wish.text}</p><small>${wish.timestamp}</small>`;
    wishContainer.appendChild(div);
  });
}

// Close modal if click outside
window.addEventListener('click', e => {
  if(e.target == wishModal) {
    wishModal.style.display = 'none';
  }
});
