import { Component } from '@angular/core';
import { IMovie } from './models/imovie';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'netflis';

  public movies: IMovie[] = [
    {
      genre: "comedy",
      title: "Casi 300",
      image: "../assets/images/Comedia/casi300.webp",
      topTen: false
    },
    {
      genre: "comedy",
      title: "Cazafantasmas",
      image: "../assets/images/Comedia/cazafantasmas.webp",
      topTen: false
    },
    {
      genre: "comedy",
      title: "El dictador",
      image: "../assets/images/Comedia/dictador.webp",
      topTen: false
    },
    {
      genre: "comedy",
      title: "Erase una vez en Hollywood",
      image: "../assets/images/Comedia/erasehollywood.webp",
      topTen: false
    },
    {
      genre: "comedy",
      title: "Padre de familia",
      image: "../assets/images/Comedia/family guy.webp",
      topTen: false
    },
    {
      genre: "comedy",
      title: "Juerga hasta el fin",
      image: "../assets/images/Comedia/juerga.webp",
      topTen: false
    },
    {
      genre: "comedy",
      title: "La terminal",
      image: "../assets/images/Comedia/laterminal.webp",
      topTen: false
    },
    {
      genre: "comedy",
      title: "Los padres de ella",
      image: "../assets/images/Comedia/padresella.webp",
      topTen: false
    },
    {
      genre: "comedy",
      title: "Regreso al futuro",
      image: "../assets/images/Comedia/regresofuturo.webp",
      topTen: false
    },
    {
      genre: "comedy",
      title: "Rock & Morty",
      image: "../assets/images/Comedia/rickandmorty.webp",
      topTen: false
    },
    {
      genre: "comedy",
      title: "Scary Movie 3",
      image: "../assets/images/Comedia/scarymovie3.webp",
      topTen: false
    },
    {
      genre: "comedy",
      title: "Ted 2",
      image: "../assets/images/Comedia/ted2.webp",
      topTen: false
    },
    {
      genre: "drama",
      title: "La casa de papel",
      image: "../assets/images/Top10/1-papel.webp",
      topTen: true
    },
    {
      genre: "drama",
      title: "La reina del flow",
      image: "../assets/images/Top10/2-reina.webp",
      topTen: true
    },
    {
      genre: "Action",
      title: "Titans",
      image: "../assets/images/Top10/3-titanes.webp",
      topTen: true
    },
    {
      genre: "Action",
      title: "Lost in space",
      image: "../assets/images/Top10/4-lostinspace.webp",
      topTen: true
    },
    {
      genre: "comedy",
      title: "Donde caben tres",
      image: "../assets/images/Top10/5-dondecaben.webp",
      topTen: true
    },
    {
      genre: "comedy",
      title: "Aqui no hay quien viva",
      image: "../assets/images/Top10/6-aquinohay.webp",
      topTen: true
    },
    {
      genre: "Action",
      title: "Blacklist",
      image: "../assets/images/Top10/7-blacklist.webp",
      topTen: true
    },
    {
      genre: "comedy",
      title: "Ricos y mimados",
      image: "../assets/images/Top10/8-ricos.webp",
      topTen: true
    },
    {
      genre: "drama",
      title: "El poder del perro",
      image: "../assets/images/Top10/9-poder.webp",
      topTen: true
    },
    {
      genre: "drama",
      title: "The good doctor",
      image: "../assets/images/Top10/10-gooddoctor.webp",
      topTen: true
    },
    {
      genre: "sci-fi",
      title: "12 Monod",
      image: "../assets/images/Sci-fi/12monos.webp",
      topTen: false
    },
    {
      genre: "sci-fi",
      title: "Sexto dia",
      image: "../assets/images/Sci-fi/6dia.webp",
      topTen: false
    },
    {
      genre: "sci-fi",
      title: "After Earth",
      image: "../assets/images/Sci-fi/afterearth.webp",
      topTen: false
    },
    {
      genre: "sci-fi",
      title: "Clover Paradox",
      image: "../assets/images/Sci-fi/colverparadox.jpg",
      topTen: false
    },
    {
      genre: "sci-fi",
      title: "El nucleo",
      image: "../assets/images/Sci-fi/core.webp",
      topTen: false
    },
    {
      genre: "sci-fi",
      title: "Deep Impact",
      image: "../assets/images/Sci-fi/deepimpact.webp",
      topTen: false
    },
    {
      genre: "sci-fi",
      title: "Doom",
      image: "../assets/images/Sci-fi/doom.webp",
      topTen: false
    },
    {
      genre: "sci-fi",
      title: "Ghost in the shell",
      image: "../assets/images/Sci-fi/gits.webp",
      topTen: false
    },
    {
      genre: "sci-fi",
      title: "Jumper",
      image: "../assets/images/Sci-fi/jumper.webp",
      topTen: false
    },
    {
      genre: "sci-fi",
      title: "Passengers",
      image: "../assets/images/Sci-fi/passengers.webp",
      topTen: false
    },
    {
      genre: "sci-fi",
      title: "Star Trek",
      image: "../assets/images/Sci-fi/startrek.webp",
      topTen: false
    },
    {
      genre: "sci-fi",
      title: "Trasnformers",
      image: "../assets/images/Sci-fi/transformers.webp",
      topTen: false
    },
    {
      genre: "sci-fi",
      title: "Watchmen",
      image: "../assets/images/Sci-fi/watchmen.webp",
      topTen: false
    }
    
  ]
}
