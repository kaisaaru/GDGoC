let notes = [
    {
        id: 1,
        heading: "Mempelajari Javascript",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus non expedita similique tempora tempore exercitationem. Accusamus sint porro iste quos velit aperiam voluptas placeat error nulla maxime id, deserunt eum.",
        created_by: "John Doe",
        created_at: 1738146027613 // bisa menggunakan Date.now()
    }
];

const createNote = (heading, description, created_by) => {
    const newNote = {
        id: 2,
        heading,
        description,
        created_by,
        created_at: Date.now()
    };
    notes.push(newNote);
};

const readNote = () => {
    console.log(notes);
};

const updateNote = (id, newHeading, newDescription) => {
    const index = notes.findIndex(note => note.id === id);
    if (index !== -1) {
        notes[index].heading = newHeading || notes[index].heading;
        notes[index].description = newDescription || notes[index].description;
    } else {
        console.log(`Note dengan ID ${id} tidak ditemukan.`);
    }
};

const deleteNote = (id) => {
    const index = notes.findIndex(note => note.id === id);
    if (index !== -1) {
        notes.splice(index, 1);
    } else {
        console.log(`Note dengan ID ${id} tidak ditemukan.`);
    }
};

// Mengetes kode (diharapkan untuk tidak diganti): 
createNote("Belajar React", "Mempelajari dasar-dasar React dan cara membuat komponen.", "Jane Doe");
readNote();
console.log("=================================================================================================================");
updateNote(1, "Mempelajari JavaScript Lanjutan", "Mempelajari konsep lanjutan dalam JavaScript.");
readNote();
console.log("=================================================================================================================");
deleteNote(1);
readNote();
