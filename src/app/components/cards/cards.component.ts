import { Component, OnInit, inject } from '@angular/core';
import { CardComponent } from "../card/card.component";
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Cards } from '../../models/cards.model';

@Component({
    selector: 'app-cards',
    standalone: true,
    templateUrl: './cards.component.html',
    styleUrl: './cards.component.css',
    imports: [CardComponent, HttpClientModule]
})
export class CardsComponent implements OnInit{
 http = inject(HttpClient);
 cards: Cards[] = [];

 ngOnInit(): void {
   this.fetchData();
 }

 fetchData(){
  this.http.get<Cards[]>('http://127.0.0.1:5000/cards').
  subscribe((data) =>{
    this.cards = data;
  })
 }
}
