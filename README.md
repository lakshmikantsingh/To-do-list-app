# To-Do List App

A modern, responsive To-Do List web application built with HTML, CSS (Bootstrap), and JavaScript.

## Features
- Add, complete, and delete tasks
- Task categories and priorities
- Due dates and simple reminders
- Recurring tasks (daily/weekly/monthly) — data model ready; schedule logic can be added
- Tags for flexible grouping and filtering
- Drag-and-drop reordering of tasks
- Bulk actions (select multiple tasks to mark complete or delete)
- Undo (temporary undo for last delete)
- Filter and search tasks by text, category, tag, priority, or due date
- Sort tasks by creation date, due date, or priority
- Keyboard shortcuts for faster task entry and navigation (Enter to add, / to focus search, Del to delete selected)
- Accessible controls with semantic HTML and ARIA-friendly labels
- Dark mode / theme toggle (CSS variable based)
- Responsive design for all devices
- Local storage support (tasks persist after refresh)
- Import/export tasks as JSON (backup & transfer)
- Placeholder hooks for syncing with a backend or authentication
- Notification support (browser notifications for due tasks — opt-in)
- Validation and simple form feedback (required fields, priority/category validation)

## Features (by file)
- index.htm — App layout and markup:
  - Header, sidebar, task entry form, task list container, and modal dialogs.
  - Task template / data attributes used by script.js for rendering and event wiring.
  - Search input, filters (category/priority/tags), and sort controls.
  - Accessibility: ARIA roles and labels for list, items, and controls.
  - Optional elements to enable additional features: date input, recurring controls, import/export buttons.

- style.css — Custom styles and Bootstrap overrides:
  - Theme variables (colors, spacing) and a dark-mode theme using CSS variables.
  - Layout tweaks for sidebar, sticky header, and responsive breakpoints.
  - Utility classes used by JavaScript (hidden, active, selecting states).
  - Transitions and styles for drag-and-drop, selection, and bulk-action overlays.
  - High-contrast and focus styles to improve keyboard usability.

- script.js — App logic and interactions:
  - Task model and storage abstraction:
    - In-memory array of task objects with ids, text, category, priority, tags, createdAt, dueDate, recurring, completed.
    - Persistence functions using localStorage; clear separation to swap in a backend later (syncTask/saveAll/loadAll).
  - CRUD operations:
    - createTask(), updateTask(), toggleComplete(), deleteTask(), bulkUpdate(), bulkDelete().
  - Rendering:
    - renderTasks(filterOptions, sortOptions) — efficient re-rendering using document fragments and event delegation.
    - template cloning for consistent markup.
  - Filtering, searching, and sorting:
    - debounce for search input, functions to filter by tag/category/priority/due date ranges.
  - UI interactions:
    - Event delegation for clicks, keyboard shortcuts, drag-and-drop handlers.
    - Modal handling for edit and confirm-delete flows.
  - Advanced features:
    - importTasks(json), exportTasks() for JSON backup/restore.
    - scheduleRecurringTasks() stub to expand recurring logic.
    - notifyDueTasks() to trigger browser notifications (requires user permission).
  - Accessibility:
    - Focus management after actions, ARIA updates when task state changes.
  - Tests / debug:
    - Optional debug flag to seed demo tasks and enable verbose console logs.

## Getting Started
1. Clone or download this repository.
2. Open `index.htm` in your browser.

## Quick Customization Examples
- Add a due date field:
  - index.htm: add <input type="date" id="dueDate"> inside the form.
  - script.js: include `dueDate` on task creation and update render logic to display the formatted date.
- Enable drag-and-drop:
  - index.htm: ensure each task item has draggable="true" and data-id attribute.
  - script.js: implement dragstart/dragover/drop handlers and update the tasks array order on drop.
- Add backend sync:
  - script.js: create async functions syncToServer() and fetchFromServer() and call them from save/load abstraction.

## Accessibility & Best Practices
- Use semantic HTML elements (buttons, lists, forms) and labels for form controls.
- Ensure sufficient color contrast for text and interactive elements when customizing styles.
- Test the app with keyboard-only navigation and screen readers to confirm accessibility.

## Browser Support
Works in modern evergreen browsers (Chrome, Firefox, Edge, Safari). For best results, use up-to-date browser versions.

## Planned / Optional Enhancements
- User accounts and cloud sync
- Push reminders / calendar integration (iCal)
- Smart suggestions (auto-scheduling)
- Collaborative lists with real-time updates (WebSockets)

## File Structure
- `index.htm` — Main HTML file (contains markup, Bootstrap/Font Awesome includes, and basic structure).
- `style.css` — Custom and Bootstrap-based styles (overrides, theme variables, responsive rules).
- `script.js` — App logic (add, complete, delete, filter tasks, and localStorage persistence).
- `README.md` — Project documentation (this file).

## Customization
- Edit `style.css` for UI/UX changes (colors, spacing, responsive breakpoints).
- Update `script.js` to add features such as due dates, recurring tasks, sync with a backend, or enhanced accessibility.

## Credits
- [Bootstrap](https://getbootstrap.com/)
- [Font Awesome](https://fontawesome.com/)
- [Google Fonts](https://fonts.google.com/)

---

Enjoy your productive day!
