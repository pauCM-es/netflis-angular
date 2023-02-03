import { Component, Input } from '@angular/core';
import { IMovie } from 'src/app/models/imovie';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.scss']
})
export class MoviesComponent {

  @Input() public films!: IMovie[]
  @Input() public genre?: string
  @Input() public topTen?: boolean

}
