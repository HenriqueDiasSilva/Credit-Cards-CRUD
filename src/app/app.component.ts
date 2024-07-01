import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Credit Cards CRUD';
  sidebarOpen = false;
  
  toggleSidebar(){
    this.sidebarOpen = !this.sidebarOpen;
  }
}