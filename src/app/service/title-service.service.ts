import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TitleServiceService {
  private titleSubject = new BehaviorSubject<string>('Digimon Tcg');
  title$ = this.titleSubject.asObservable();

  setTitle(newTitle: string): void {
    this.titleSubject.next(newTitle);
  }
}