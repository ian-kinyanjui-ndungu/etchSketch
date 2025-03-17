# Sketch Pad Project

This project creates an interactive sketch pad using HTML, CSS, and JavaScript. It features a grid of squares that change color when you hover over them, allowing you to create pixel art.

## Features

- 16x16 grid of squares (default)
- Hover effect that changes the color of the squares
- Button to reset the grid and change the number of squares per side
- Responsive design that maintains the same total space

## How to Use

1. Open the `index.html` file in a web browser.
2. Move your mouse over the grid to draw.
3. Click the "Change Grid Size" button to set a new grid size (maximum 100).

## Implementation Details

- The grid is created using JavaScript DOM manipulation.
- Flexbox is used to arrange the squares in a grid layout.
- Event listeners are added to each square for the hover effect.
- The grid size can be changed using a prompt, with input validation.

## Files

- `index.html`: The main HTML structure
- `style.css`: CSS styling for the page and grid
- `etch.js`: JavaScript code for grid creation and interactivity
