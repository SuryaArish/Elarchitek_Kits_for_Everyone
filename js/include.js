// Function to load HTML includes
function loadIncludes() {
  // Load header
  fetch('./includes/header.html')
    .then(response => response.text())
    .then(data => {
      document.getElementById('header-placeholder').innerHTML = data;
    });

  // Load footer
  fetch('./includes/footer.html')
    .then(response => response.text())
    .then(data => {
      document.getElementById('footer-placeholder').innerHTML = data;
    });
}

// Load includes when DOM is ready
document.addEventListener('DOMContentLoaded', loadIncludes);