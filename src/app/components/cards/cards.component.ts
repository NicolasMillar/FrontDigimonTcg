import { Component, OnInit, inject } from '@angular/core';
import { CardComponent } from "../card/card.component";
import { HttpClient, HttpClientModule } from '@angular/common/http';

@Component({
    selector: 'app-cards',
    standalone: true,
    templateUrl: './cards.component.html',
    styleUrl: './cards.component.css',
    imports: [CardComponent, HttpClientModule]
})
export class CardsComponent implements OnInit{
 http = inject(HttpClient)

 ngOnInit(): void {
   this.fetchData();
 }

 fetchData(){
  this.http.get('http://127.0.0.1:5000/cards').
  subscribe((data) =>{
    console.log(data)
  })
 }
}
