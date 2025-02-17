// Menu toggle functionality
const menuButton = document.getElementById('menuButton');
const navItems = document.getElementById('navItems');

menuButton.addEventListener('click', () => {
    navItems.classList.toggle('show');
});

// Image viewer modal
function viewerTemplate(imagePath, altText) {
    return `
        <div class="viewer">
            <button class="close-viewer">X</button>
            <img src="${imagePath}" alt="${altText}">
        </div>
    `;
}

function viewHandler(event) {
    const clickedElement = event.target;
    if (clickedElement.tagName.toLowerCase() === 'img') {
        const src = clickedElement.src;
        const modalContainer = document.getElementById('modalContainer');
        modalContainer.innerHTML = viewerTemplate(src, clickedElement.alt);
        modalContainer.style.display = 'flex';
        
        // Add close button functionality
        document.querySelector('.close-viewer').addEventListener('click', closeViewer);
    }
}

function closeViewer() {
    const modalContainer = document.getElementById('modalContainer');
    modalContainer.innerHTML = '';
    modalContainer.style.display = 'none';
}

// Attach event listener to gallery section
const gallery = document.querySelector('.gallery');
gallery.addEventListener('click', viewHandler);
