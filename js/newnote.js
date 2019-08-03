title = document.getElementById("title");
desc = document.getElementById("desc");
id = getQueryValue("id");

deleteBtn = document.getElementById('deleteBtn');


//function
if(!id){
 deleteBtn.style.display = 'none';
}
else{
    title.value = getNote(id).title;
    desc.value     = getNote(id).desc;
}
function deleteNote(){
    deleteNoteService(id);
}
function onSave(){
  if(id)
  onsaveExistantNoteService(id);
  else
  onSaveService()
}
