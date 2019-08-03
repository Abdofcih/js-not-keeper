


//my menu in order to edit once
var menuHtml = `
<nav class="navbar navbar-light bg-light">
<a class="navbar-brand" href="index.html">Note Keeper</a>
<span class="i" id="aboutPage">i</span>
</nav>
`;
function writeMe(htmlContent){
    document.write(htmlContent);
}
function getQueryValue(queryString){
    var urlParams = new URLSearchParams(window.location.search);
        return urlParams.get(queryString);
}


// Start note services 
var notes = getNotes();

//save notes array bto local storage
function save(notesToSave) {
    // Save the current array of notes to storage
    localStorage.setItem('notes', JSON.stringify(notesToSave));
  }
  function getNotes(){
    getNotesVar = localStorage.getItem('notes');
    if(!getNotesVar)
        return Array();
        
     return  JSON.parse(getNotesVar);
  }
  function getNote(id) {
    // Return the note that has an id matching the id passed in
    return notes.find(note => note.id == id);
   }
function deleteNoteService(id){
    var r = confirm("Are you sure! to delete");
       if (r == true) {
        let index = notes.indexOf(getNote(id));
        console.log("index: ",index);
           // Delete that element of the array and resave the data
            if(index > -1){
                notes.splice(index, 1);
                save(notes);
                window.location.href = 'index.html';
            }
       }
}
function onSaveService(){
    console.log("onsave");
      if(!title.value)
        return 0;
    newNote  = getNotes();
    newNoteId = Math.max(...notes.map(note => parseInt(note.id)), 0) + 1;
    newNote.push({id:newNoteId,title:title.value,desc:desc.value});
    save(newNote);
    window.location.href = 'index.html';
}
function onsaveExistantNoteService(id){
        console.log("onsaveExistantNote")
        let index = notes.indexOf(getNote(id));
        if(index > -1){
            notes.splice(index, 1,{id:id,title:title.value,desc:desc.value});
            save(notes);
            window.location.href = 'index.html';
        }
}
 
