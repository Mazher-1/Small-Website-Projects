const notesContainer = document.querySelector(".notes-container");
const createBtn = document.querySelector(".Btn");

function showNotes() {
    notesContainer.innerHTML = localStorage.getItem("notes") || "";
    attachEventListeners(); // Attach listeners to existing notes
}

function updateStorage() {
    localStorage.setItem("notes", notesContainer.innerHTML);
}

function attachEventListeners() {
    const notes = document.querySelectorAll(".input-box");
    notes.forEach(nt => {
        nt.addEventListener("keyup", updateStorage);
    });
}

createBtn.addEventListener("click", () => {
    const inputBox = document.createElement("p");
    const img = document.createElement("img");
    inputBox.className = "input-box";
    inputBox.setAttribute("contenteditable", "true");
    img.src = "images/delete.png";
    inputBox.appendChild(img);
    notesContainer.appendChild(inputBox);
    attachEventListeners(); // Attach listeners to new notes
    updateStorage(); // Save the new note to storage
});

notesContainer.addEventListener("click", function (e) {
    if (e.target.tagName === "IMG") {
        e.target.parentElement.remove();
        updateStorage();
    }
});

// Optional: Handle Enter key to insert a line break
notesContainer.addEventListener("keydown", (event) => {
    if (event.key === "Enter") {
        event.preventDefault();
        document.execCommand("insertHTML", false, "<br><br>");
    }
});

showNotes();


