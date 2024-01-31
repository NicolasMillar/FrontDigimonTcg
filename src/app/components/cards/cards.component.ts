import { Component, Input } from '@angular/core';
import { Cards } from './../../models/cards.model'
import { CardComponent } from "../card/card.component";

@Component({
    selector: 'app-cards',
    standalone: true,
    templateUrl: './cards.component.html',
    styleUrl: './cards.component.css',
    imports: [CardComponent]
})
export class CardsComponent {
  
}
