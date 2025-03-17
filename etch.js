// Initial grid size
let gridSize = 16;

// Create the grid
function createGrid(size) {
    const container = document.getElementById('container');
    
    // Clear existing grid
    container.innerHTML = '';
    
    // Calculate square size
    const squareSize = 960 / size;
    
    // Create new grid
    for (let i = 0; i < size * size; i++) {
        const square = document.createElement('div');
        square.classList.add('grid-square');
        square.style.width = `${squareSize}px`;
        square.style.height = `${squareSize}px`;
        
        // Add hover effect
        square.addEventListener('mouseover', function() {
            this.style.backgroundColor = getRandomColor();
        });
        
        container.appendChild(square);
    }
}

// Generate a random color
function getRandomColor() {
    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);
    return `rgb(${r}, ${g}, ${b})`;
}

// Reset grid when button is clicked
document.getElementById('reset').addEventListener('click', function() {
    let newSize = prompt('Enter the number of squares per side (max 100):');
    
    // Validate input
    newSize = parseInt(newSize);
    if (isNaN(newSize) || newSize < 1) {
        alert('Please enter a valid number.');
        return;
    }
    
    // Limit to max 100
    if (newSize > 100) {
        alert('Maximum size is 100. Setting to 100.');
        newSize = 100;
    }
    
    // Update grid size and create new grid
    gridSize = newSize;
    createGrid(gridSize);
});

// Initialize grid on page load
window.onload = function() {
    createGrid(gridSize);
};