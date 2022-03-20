const addBtn = document.querySelector('#add');

loadNotes();

function loadNotes() {
    const notes = JSON.parse(localStorage.getItem('notes'));

    if (notes) {
        notes.forEach(note => {
            addNewNote(note);
        });
    }
}

addBtn.addEventListener('click', function () {
    addNewNote();
});

function addNewNote(text = '') {
    const note = document.createElement('div');
    note.classList.add('note');

    note.innerHTML = `
        <div class="notes">
            <div class="tools">
                <button class="edit"><i class="fas fa-edit"></i></button>
                <button class="delete"><i class="fas fa-trash-alt"></i></button>
            </div>
            <div class="main ${text ? "" : "hidden"}"></div>
            <textarea class="${text ? "hidden" : ""}"></textarea>
        </div>
    `;

    const editBtn = note.querySelector('.edit');
    const deleteBtn = note.querySelector('.delete');
    const main = note.querySelector('.main');
    const textarea = note.querySelector('textarea');

    textarea.value = text;
    main.innerHTML = marked(text);

    editBtn.addEventListener('click', function () {
        main.classList.toggle('hidden');
        textarea.classList.toggle('hidden');
    });

    deleteBtn.addEventListener('click', function () {
        note.remove();
        updateLS();
    });

    textarea.addEventListener('input', function (e) {
        main.innerHTML = e.target.value;
        updateLS();
    });

    document.body.appendChild(note);
}

function updateLS() {
    const notesText = document.querySelectorAll('textarea');

    const notes = [];
    notesText.forEach(note => {
        notes.push(note.value);
    });
    localStorage.setItem('notes', JSON.stringify(notes));
}