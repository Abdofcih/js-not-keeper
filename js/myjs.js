//Start get element to manage it
viewResult = document.getElementById('result');
aboutPage = document.getElementById('aboutPage');
newNotePage = document.getElementById('newNotePage');
//start onclick methods
aboutPage.onclick = function(){
    redirect('about.html');
}
newNotePage.onclick = function(){
    redirect('new.html');
}

function titleSet(title){
     localStorage.setItem("title",title);
}
function titleGet(){
    return localStorage.getItem("title");
}
function showResult(){
   // viewResult.innerHTML =  localStorage.getItem("title");
}
function redirect(url){
    window.location.href = url;
}
//start function -------------