const FilmForm = document.querySelector("#film-form");
const TitleValue = document.getElementById("title");
const DirectorValue = document.getElementById("director");
const UrlValue = document.getElementById("url");
const TableBody = document.querySelector("#films");
const CardBodySecond = document.querySelectorAll(".card-body")[1];

//console.log(FilmForm,TitleValue,DirectorValue,UrlValue);

const ui = new UI();
const storage = new Storage();

eventListeners();

function eventListeners(){
    FilmForm.addEventListener("submit",addFilm);
    document.addEventListener("DOMContentLoaded",reloadAllFilms);
    TableBody.addEventListener("click",deleteFilm);
    CardBodySecond.addEventListener("click",removeAll);
}

function removeAll(e){
    //console.log(e);
    if( e.target.id === "clear-all"){
        if(confirm("Are You Sure?") ){
            storage.deleteAllFromStorage();
        }
    }
}

function deleteFilm(e){
    //console.log(e.target);
    if(e.target.className === "fa-solid fa-trash"){
        ui.deleteFilmFromUI(e.target);
        storage.deleteFilmFromStorage(e.target);
    }
}

function reloadAllFilms(e){
    let films = storage.getFilmsFromStorage();
    //console.log(e,films);
    ui.loadAllFilms(films);
}

function addFilm(e){
    const title = TitleValue.value;
    const director = DirectorValue.value;
    const url = UrlValue.value;
    //console.log(title,director,url);
    if(title === "" || director === "" || url == "")
    {
        //error
        ui.displayMessages("danger","Empty Form!")
    }
    else{
        const newFilm = new Film(title,director,url);
        ui.addFilmToUI(newFilm); // add movie to user interface
        ui.clearInput(TitleValue,DirectorValue,UrlValue);
        storage.addFilmToStorage(newFilm);
        ui.displayMessages("primary","Successful!");
    }
    e.preventDefault();
}