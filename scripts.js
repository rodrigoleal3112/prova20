   function highlightCurrentPage() {
    const navLinks = document.querySelectorAll('nav ul li a');
    const paginationLinks = document.querySelectorAll('.pagination a');
    const currentPage = window.location.pathname;

    // Destacar a navegação no menu
    navLinks.forEach(link => {
        if (link.getAttribute('href') === currentPage) {
            link.classList.add('active');
        } else {
            link.classList.remove('active');
        }
    });

    // Destacar a paginação
    paginationLinks.forEach(link => {
        if (link.getAttribute('href') === currentPage) {
            link.classList.add('active');
        } else {
            link.classList.remove('active');
        }
    });
}

// Chamar a função quando a página carregar
window.addEventListener('load', highlightCurrentPage);
