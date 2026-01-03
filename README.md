# To-Do List App

A modern, responsive To-Do List web application built with HTML, CSS (Bootstrap), and JavaScript.

## Features
- Add, complete, and delete tasks
- Task categories and priorities
- Sidebar navigation with icons
- Sticky header and form for quick task entry
- Responsive design for all devices
- Local storage support (tasks persist after refresh)
- Keyboard shortcuts for faster task entry (Enter to add)
- Filter and search tasks by text, category, or priority
- Accessible controls with semantic HTML and ARIA-friendly labels

## Features (by file)
- index.htm — Contains the app layout and markup: header, sidebar, task form, task list container, and modal dialogs. Includes Bootstrap and Font Awesome references and data attributes used by the JavaScript.
- style.css — Custom styles and Bootstrap overrides: layout tweaks, color variables, responsive adjustments, icon positioning, sticky header behavior, and utility classes used across the app.
- script.js — App logic and interactions: task create/read/update/delete operations, rendering tasks to the DOM, filtering and search, category/priority handling, event delegation for performance, localStorage persistence, and simple form validation.

## Getting Started
1. Clone or download this repository.
2. Open `index.htm` in your browser.

## File Structure
- `index.htm` — Main HTML file (contains markup, Bootstrap/Font Awesome includes, and basic structure).
- `style.css` — Custom and Bootstrap-based styles (overrides, theme variables, responsive rules).
- `script.js` — App logic (add, complete, delete, filter tasks, and localStorage persistence).
- `README.md` — Project documentation (this file).

## Customization
- Edit `style.css` for UI/UX changes (colors, spacing, responsive breakpoints).
- Update `script.js` to add features such as due dates, recurring tasks, sync with a backend, or enhanced accessibility.

## Accessibility & Best Practices
- Use semantic HTML elements (buttons, lists, forms) and labels for form controls.
- Ensure sufficient color contrast for text and interactive elements when customizing styles.
- Test the app with keyboard-only navigation and screen readers to confirm accessibility.

## Browser Support
Works in modern evergreen browsers (Chrome, Firefox, Edge, Safari). For best results, use up-to-date browser versions.

## Credits
- [Bootstrap](https://getbootstrap.com/)
- [Font Awesome](https://fontawesome.com/)
- [Google Fonts](https://fonts.google.com/)

---

Enjoy your productive day!
