# Gallerix

Gallerix is a responsive image gallery built with HTML, Tailwind CSS, and JavaScript. The project allows users to browse a collection of photography, filter images by category, open images in a full screen modal, and navigate between images using buttons or keyboard controls.

The project was built as a practical frontend project to strengthen DOM manipulation, event handling, array methods, dynamic rendering, responsive design, and user interaction.

## Features

### Image Gallery

Displays a collection of 24 images organized into four categories.

Nature

Architecture

Urban

Cars

### Category Filtering

Users can filter the gallery by selecting a category. The active category button is visually highlighted and the gallery updates dynamically without reloading the page.

### Image Modal

Clicking an image opens it in a large modal with a dark background overlay.

### Image Navigation

Users can navigate between images using previous and next buttons.

The navigation respects the currently selected category. For example, when the Nature category is selected, previous and next navigation only moves through Nature images.

### Keyboard Navigation

The modal supports keyboard controls.

Left Arrow moves to the previous image.

Right Arrow moves to the next image.

Escape closes the image modal.

### Responsive Design

The gallery adapts to different screen sizes using Tailwind CSS.

One column is used on small screens.

Two columns are used on medium screens.

Three columns are used on large screens.

### Image Hover Effect

Images have a smooth scale animation when the user moves the cursor over them.

### Smooth Category Transition

The gallery uses an opacity transition when changing between categories to provide a smoother visual experience.

### Accessibility

Images receive descriptive alt text based on their category.

Interactive modal controls include aria labels to make their purpose clear.

## Technologies Used

HTML5

Tailwind CSS

JavaScript

Font Awesome

Vite

## JavaScript Concepts Used

The project demonstrates several important JavaScript concepts.

DOM selection

DOM manipulation

Event listeners

Event delegation

Event bubbling

Conditional statements

Arrays and objects

Array filter method

Array forEach method

Template elements

Dynamic element creation

Dynamic image rendering

Keyboard events

Click events

State management using variables

Modal interaction

Category based filtering

## Project Structure

```text
Gallerix/
│
├── index.html
├── package.json
├── package-lock.json
├── vite.config.js
├── README.md
├── .gitignore
│
├── public/
│   └── images/
│       ├── nature1.jfif
│       ├── nature2.jfif
│       ├── nature3.jfif
│       ├── nature4.jfif
│       ├── nature5.jfif
│       ├── nature6.jfif
│       ├── arch1.jfif
│       ├── arch2.jfif
│       ├── arch3.jfif
│       ├── arch4.jfif
│       ├── arch5.jfif
│       ├── arch6.jfif
│       ├── urban1.jfif
│       ├── urban2.jfif
│       ├── urban3.jfif
│       ├── urban4.jfif
│       ├── urban5.jfif
│       ├── urban6.jfif
│       ├── car1.jfif
│       ├── car2.jfif
│       ├── car3.jfif
│       ├── car4.jfif
│       ├── car5.jfif
│       └── car6.jfif
│
└── src/
    ├── css/
    │   └── style.css
    │
    └── js/
        └── main.js
```

## How It Works

The gallery images are stored as JavaScript objects containing an image path and category.

The `assignData` function filters the image collection according to the selected category and dynamically renders the matching images.

The HTML template element is used as a reusable structure for creating gallery cards.

Event delegation is used on the gallery container to detect when a dynamically generated image is clicked.

When an image is opened, the modal displays the selected image and the current gallery state is maintained using `currGalleryImages` and `curIndex`.

Previous and next controls update the current index and display the corresponding image.

Keyboard events provide an additional way to navigate and close the modal.

## Installation

Clone the repository.

```bash
git clone YOUR_REPOSITORY_URL
```

Move into the project directory.

```bash
cd Gallerix
```

Install the dependencies.

```bash
npm install
```

Start the development server.

```bash
npm run dev
```

Open the local URL provided by Vite in your browser.

## Learning Purpose

Gallerix was developed as a frontend practice project with a focus on applying JavaScript to a real user interface rather than only practicing isolated JavaScript exercises.

The project focuses particularly on dynamic DOM rendering, event delegation, filtering data, managing UI state, modal interactions, and responsive layouts.

## Future Improvements

Possible future improvements include touch swipe navigation, image loading states, lazy loading, improved accessibility, image captions, fullscreen browser support, and loading images from an external API.

## Author

Ubaidullah

GitHub: `https://github.com/ubaid-X`

## License

This project is created for educational and portfolio purposes.
