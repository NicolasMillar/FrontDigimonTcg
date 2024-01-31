import { Component, Input } from '@angular/core';
import { Cards } from '../../models/cards.model';


@Component({
  selector: 'app-card',
  standalone: true,
  imports: [],
  templateUrl: './card.component.html',
  styleUrl: './card.component.css'
})
export class CardComponent {
  @Input() card: Cards = {
    id: 0,
    nombre: 'BT1-001 Yokomon',
    img_url: 'https://dojiw2m9tvv09.cloudfront.net/18085/product/M_yokomon_bt1-001_-dcg-en2761.png?71&time=1706725747'
  };
}
