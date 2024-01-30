import { Component } from '@angular/core';
import { TitleServiceService } from '../../service/title-service.service';

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.css'
})
export class SidebarComponent {
  constructor(private TitleServiceService: TitleServiceService) {}

  onSelectSet(selectedSet: string): void {
    const newTitle = 'Digimon Tcg ' + selectedSet;
    this.TitleServiceService.setTitle(newTitle);
  }
}
