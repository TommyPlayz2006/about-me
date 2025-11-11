
const addNoteBtn = document.getElementById("addNoteBtn");
const noteInput = document.getElementById("noteInput");
const notesContainer = document.getElementById("notesContainer");

// event-listener
addNoteBtn.addEventListener("click", addNote);

function addNote() {
  
  const text = noteInput.value.trim();

  // Check if empty (validation)
  if (text === "") {
    alert("Please type your note before adding!");
    return;
  }

  // Create a new <div> element for the note
  const note = document.createElement("div");
  note.className = "note"; // Add a CSS class to style the note
  note.innerText = text;

  // Create a "Delete" button for each note
  const deleteBtn = document.createElement("button");
  deleteBtn.textContent = "Delete";
  deleteBtn.className = "deleteBtn"; // Add class for styling
  deleteBtn.addEventListener("click", () => {
    note.remove(); // Remove the note when the delete button is clicked
  });

  // Append the delete button to the note div
  note.appendChild(deleteBtn);

  // Append the note to the notes container
  notesContainer.appendChild(note);

  // Clear the textarea after adding
  noteInput.value = "";
}

// Styling for delete buttons
const style = document.createElement('style');
style.innerHTML = `
  .deleteBtn {
    background-color: red;
    color: white;
    border: none;
    padding: 5px 10px;
    border-radius: 5px;
    cursor: pointer;
    margin-left: 10px;
    font-size: 12px;
  }

  .deleteBtn:hover {
    background-color: darkred;
  }
`;
document.head.appendChild(style);

// Add form submission event (optional: handling form submission)
document.getElementById("contactForm").addEventListener("submit", function(e){
  e.preventDefault();
  alert("Thank you, your message has been received!");
});
