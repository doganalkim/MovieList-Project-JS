function UI(){

}
UI.prototype.addFilmToUI= function(film){
    // console.log(film);
    const filmList = document.getElementById("films");
    filmList.innerHTML += `
    <tr>
        <td> <img src="${film.url}" class = "img-fluid img-thumbnail" style = "width:500px; height:auto;" ></td>
        <td>${film.title}</td>
        <td>${film.director}</td>
        <td><a href="#" id="delete-film" class="d-flex justify-content-center" ><i class="fa-solid fa-trash" style="color: #ffffff;"></i></a></td>
    </tr>
    `;
};

UI.prototype.clearInput = function(element1,element2,element3){
    element1.value = "";
    element2.value = "";
    element3.value = "";
};

UI.prototype.displayMessages= function(type,message){
    const cardBody = document.querySelectorAll(".card-body")[0];
    const newdiv = document.createElement("div");
    const newtext = document.createTextNode(message);
    newdiv.className = `alert alert-${type}`;
    newdiv.appendChild(newtext);
    cardBody.appendChild(newdiv);
    setTimeout(function(){newdiv.remove();},2500);
};

UI.prototype.loadAllFilms = function(filmlist){
    for(let i=0 ; i<filmlist.length ; i++){
        this.addFilmToUI(filmlist[i]);
    }
}

UI.prototype.deleteFilmFromUI = function(target){
    target.parentElement.parentElement.parentElement.remove();
}