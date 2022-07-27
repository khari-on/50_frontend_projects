const API_URL = 'https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=3fd2be6f0c70a2a598f084ddfb75487c&page=1'
const IMG_PATH = 'https://image.tmdb.org/t/p/w1280'
const SEARCH_API = 'https://api.themoviedb.org/3/search/movie?api_key=3fd2be6f0c70a2a598f084ddfb75487c&query="'

const form=document.getElementById("form")
const main = document.getElementById("main")
const search =document.getElementById("search")

function voteRate(vote){
    if(vote >=8){
        return 'green';
    }else if(vote >= 5){
       return 'orange';
    }else{
        return 'red';
    }
}



function showMOvie(movies){

    //display it in the dom
    main.innerHTML="";
     
    movies.forEach((movie) => {
        const {title,poster_path,overview,vote_average}=movie;
  const movieEl=document.createElement("div");
  movieEl.classList.add("movie");
movieEl.innerHTML=`
 <img src="${IMG_PATH+ poster_path }" alt="img of the movie">
<div class="movie-info">
  <h3>${title}</h3>
  <span class="${voteRate(vote_average)}">${vote_average}</span>
  <div class="overview">
    <h3>overview</h3>
    ${overview}
  </div>
</div>`;

  main.appendChild(movieEl);
    });

}

async function getMovies(url){
    const res = await fetch(url);
    const data= await res.json()
     console.log(data.results);
    showMOvie(data.results);
}

getMovies(API_URL);

form.addEventListener("submit",(e)=>{
    e.preventDefault();
    
    const searchValue =search.value 

    // console.log(searchValue);

    if(searchValue && searchValue !== ""){
        getMovies(SEARCH_API+searchValue);

        search.value  = '';
    }else{
        window.location.reload();
    }
})