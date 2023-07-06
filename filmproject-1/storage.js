function Storage(){

}
Storage.prototype.addFilmToStorage = function(film){
    // console.log(film);
    let films = this.getFilmsFromStorage();
    films.push(film);
    localStorage.setItem("films",JSON.stringify(films));
    
};
Storage.prototype.getFilmsFromStorage = function (){
    let filmsinstorage = localStorage.getItem("films");
    if(filmsinstorage === null){
        return [];
    }
    else{
        return JSON.parse(filmsinstorage);
    }
}
Storage.prototype.deleteFilmFromStorage = function(target){
    const name = target.parentElement.parentElement.previousElementSibling.previousElementSibling;
    const films = this.getFilmsFromStorage();
    const res = [];
    console.log(name.textContent);
    for(let i = 0; i<films.length ; i++){
        if(films[i].title === name.textContent){
            continue;
        }
        res.push(films[i]);
    }
    localStorage.setItem("films",JSON.stringify(res));
}

Storage.prototype.deleteAllFromStorage = function(){
    const parent = document.getElementById("films");
    while(parent.firstElementChild != null){
        parent.firstElementChild.remove();
    }
    localStorage.removeItem("films");
}