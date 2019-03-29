import { PassengerDashboardComponent } from './passenger-dashboard/containers/passenger-dashboard/passenger-dashboard.component';
import { Component } from '@angular/core'

@Component({
  selector: 'app-root',
  styleUrls: ['app.component.scss'],
  template: `
    <div class="app">
      <passenger-dashboard></passenger-dashboard>
    </div>
  `
})
export class AppComponent {

}
