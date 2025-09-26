let tasks = JSON.parse(localStorage.getItem("tasks")) || [];
let filter = "all";

const taskForm = document.getElementById("taskForm");
const taskList = document.getElementById("taskList");

// Save tasks to localStorage
function saveTasks() {
  localStorage.setItem("tasks", JSON.stringify(tasks));
}

// Add Task
taskForm.addEventListener("submit", function (e) {
  e.preventDefault();
  const taskText = document.getElementById("taskInput").value;
  const taskDate = document.getElementById("taskDate").value;
  const taskCategory = document.getElementById("taskCategory").value;

  tasks.push({
    id: Date.now(),
    text: taskText,
    date: taskDate,
    category: taskCategory,
    completed: false,
  });

  saveTasks();
  taskForm.reset();
  renderTasks();
});

// Set Filter
function setFilter(f) {
  filter = f;
  document.querySelectorAll(".sidebar a").forEach(a => a.classList.remove("active"));
  event.target.classList.add("active");
  // Change heading font-family based on category
  const heading = document.getElementById("mainHeading");
  heading.classList.remove("heading-work", "heading-personal", "heading-study");
  if (f === "work") heading.classList.add("heading-work");
  else if (f === "personal") heading.classList.add("heading-personal");
  else if (f === "study") heading.classList.add("heading-study");
  else heading.className = heading.className.replace(/heading-\w+/g, "");
  renderTasks();
}

// Render Tasks
function renderTasks() {
  taskList.innerHTML = "";
  const today = new Date().toISOString().split("T")[0];

  const filteredTasks = tasks.filter(task => {
    if (filter === "today") return task.date === today;
    if (filter === "upcoming") return task.date > today;
    if (filter === "completed") return task.completed;
    if (filter === "work") return task.category === "work";
    if (filter === "personal") return task.category === "personal";
    if (filter === "study") return task.category === "study";
    return true;
  });

  filteredTasks.forEach(task => {
    const li = document.createElement("li");
    li.className = "list-group-item d-flex justify-content-between align-items-center";


  const span = document.createElement("span");
  span.textContent = `${task.text} (${task.date}) [${task.category}]`;
  // Assign font-family class based on category
  if (task.category === "work") span.classList.add("task-work");
  else if (task.category === "personal") span.classList.add("task-personal");
  else if (task.category === "study") span.classList.add("task-study");

  // Priority font (today/upcoming)
  const today = new Date().toISOString().split("T")[0];
  if (task.date === today) span.classList.add("task-today");
  else if (task.date > today) span.classList.add("task-upcoming");

  if (task.completed) span.classList.add("task-completed");

    // Actions
    const div = document.createElement("div");


    const completeBtn = document.createElement("button");
    completeBtn.className = "btn btn-sm btn-success me-2";
    completeBtn.innerHTML = task.completed
      ? '<i class="fa-solid fa-rotate-left"></i>'
      : '<i class="fa-solid fa-check"></i>';
    completeBtn.title = task.completed ? "Undo" : "Done";
    completeBtn.onclick = () => {
      task.completed = !task.completed;
      saveTasks();
      renderTasks();
    };

    const deleteBtn = document.createElement("button");
    deleteBtn.className = "btn btn-sm btn-danger";
    deleteBtn.innerHTML = '<i class="fa-solid fa-trash"></i>';
    deleteBtn.title = "Delete";
    deleteBtn.onclick = () => {
      tasks = tasks.filter(t => t.id !== task.id);
      saveTasks();
      renderTasks();
    };

    div.appendChild(completeBtn);
    div.appendChild(deleteBtn);

    li.appendChild(span);
    li.appendChild(div);

    taskList.appendChild(li);
  });
}

// Initial render
renderTasks();
