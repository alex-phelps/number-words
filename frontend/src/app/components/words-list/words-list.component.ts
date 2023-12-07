import { Component, Input } from '@angular/core';
import { MatListModule } from '@angular/material/list';
import { NumberWord } from '../../services/numbers-words-service.service';

@Component({
  selector: 'words-list',
  standalone: true,
  imports: [
    MatListModule
  ],
  templateUrl: './words-list.component.html',
  styleUrl: './words-list.component.scss'
})
export class WordsList {
  @Input() words: NumberWord[] = [];
}
