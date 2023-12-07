import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatCardModule } from '@angular/material/card';
import { InputClearable } from './components/input-clearable/input-clearable.component';
import { WordsList } from './components/words-list/words-list.component';
import { NumberWord, NumbersWordsServiceService as NumbersWordsService } from './services/numbers-words-service.service';
import { MatButtonModule } from '@angular/material/button';
import { HttpClientModule } from '@angular/common/http';


@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.scss',
    imports: [
        CommonModule,
        RouterOutlet,
        MatToolbarModule,
        MatGridListModule,
        MatCardModule,
        MatButtonModule,
        InputClearable,
        WordsList,
        HttpClientModule
    ],
    providers: [NumbersWordsService]
})

export class AppComponent {
  constructor(private numberWordsService: NumbersWordsService) {}

  numbersString: string = '';
  words: NumberWord[] | null = null;
  error: string = '';

  onSortText(): void {
    this.numberWordsService.getWordsFromNumbers(this.numbersString)
      .subscribe({
        next: words => this.words = words,
        error: e => {
          this.words = null;
          this.error = "Invalid Input"
        }
      });
  }
}