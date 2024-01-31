import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SidebarComponent } from "./components/sidebar/sidebar.component";
import { TitleServiceService } from './service/title-service.service';
import { CardsComponent } from "./components/cards/cards.component";

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.css',
    imports: [RouterOutlet, SidebarComponent, CardsComponent]
})
export class AppComponent {
  title = 'Digimon Tcg';

  constructor(private TitleServiceService: TitleServiceService) {}

  ngOnInit(): void {
    this.TitleServiceService.title$.subscribe(newTitle => {
      this.title = newTitle;
    });
  }
}
