function openModal(title, imageUrl) {
  const modal = document.getElementById('myModal');
  const modalTitle = document.getElementById('modalTitle');
  const modalImage = document.getElementById('modalImage');

  modal.classList.remove('hidden');
  modalTitle.textContent = title;
  modalImage.src = imageUrl;
}

function closeModal() {
  document.getElementById('myModal').classList.add('hidden');
}

window.addEventListener('click', function (e) {
  const modal = document.getElementById('myModal');
  if (e.target === modal) {
    closeModal();
  }
});

document.addEventListener('DOMContentLoaded', () => {
  const closeBtn = document.getElementById('closeModalBtn');
  if (closeBtn) closeBtn.addEventListener('click', closeModal);
});
