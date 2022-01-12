import { LightningElement, track, api } from "lwc";
import MOVIE_DATA from '@salesforce/resourceUrl/movie_data';
import SHOW_DATA from '@salesforce/resourceUrl/show_data';
import GAME_DATA from '@salesforce/resourceUrl/game_data';

export default class HomePage extends LightningElement {

@track gamesList = [];
@track showList = [];
@track movieList = [];
gamesTitle = "Video Games";
showTitle = "TV Shows";
movieTitle = "Movies";
@track displayModal = false;

@track displayVideoGames = false;
@track displayTVShows = false;
@track displayMovies = false;
@track displayFilteredVideoGames = false;
@track displayFilteredMovies = false;
@track displayFilteredTVShows = false;

handleContentClick(event) {
  this.displayModal = event.detail;
}

handleRadioButton(evt) {
  let selectedValue = evt.detail;
  console.log(selectedValue);
  switch(selectedValue) {
    case "videogame":
      this.displayVideoGames = false;
      this.displayTVShows = false;
      this.displayMovies = false;
      this.displayFilteredVideoGames = true;
      this.displayFilteredMovies = false;
      this.displayFilteredTVShows = false;
      break;
    case "movie":
      this.displayVideoGames = false;
      this.displayTVShows = false;
      this.displayMovies = false;
      this.displayFilteredVideoGames = false;
      this.displayFilteredMovies = true;
      this.displayFilteredTVShows = false;
      break;
    case "shows":
      this.displayVideoGames = false;
      this.displayTVShows = false;
      this.displayMovies = false;
      this.displayFilteredVideoGames = false;
      this.displayFilteredMovies = false;
      this.displayFilteredTVShows = true;
      break;
    case "clear":
      this.displayVideoGames = true;
      this.displayTVShows = true;
      this.displayMovies = true;
      this.displayFilteredVideoGames = false;
      this.displayFilteredMovies = false;
      this.displayFilteredTVShows = false;
      break;
  }
}


connectedCallback() {
  this.displayVideoGames = true;
  this.displayTVShows = true;
  this.displayMovies = true;

  fetch(GAME_DATA)
    .then(result => result.json())
    .then(data => {
        this.gamesList = data.results;
    })
    .catch(err => {
      this.displayVideoGames = false;
    })

    fetch(SHOW_DATA)
    .then(result => result.json())
    .then(data => {
        this.showList = data.tv_shows;
        return this.showList;
    })
    .then(showList => {
        for(let show of showList) {
          show.background_image = show.image_thumbnail_path;
        }
    })

    fetch(MOVIE_DATA)
    .then(result => result.json())
    .then(data => {
      this.movieList = data.results;
      return this.movieList;
    })
    .then(movieList => {
      for(let movie of movieList) {
        movie.background_image = "https://image.tmdb.org/t/p/original" + movie.poster_path;
      }
    })

}
}