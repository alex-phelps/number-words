import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

export interface NumberWord {
  words: string,
  over9000: boolean
}

@Injectable()
export class NumbersWordsServiceService {
  constructor(private http: HttpClient) {}

  getWordsFromNumbers(numbers: string): Observable<NumberWord[]> {
    return this.http.get<NumberWord[]>('http://localhost:3000/api/numberWords?numbers=' + numbers);
  }
}
