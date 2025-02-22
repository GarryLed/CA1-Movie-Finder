import { Component, Input } from '@angular/core'; // import input 
import { Movie } from '../movie.model'; // import the movie class 

@Component({
  selector: 'app-movie-detail',
  imports: [],
  templateUrl: './movie-detail.component.html',
  styleUrl: './movie-detail.component.css'
})
export class MovieDetailComponent {

  @Input() movieDetails!:Movie; // add an input decorator 

}
