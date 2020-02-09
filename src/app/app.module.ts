import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { EventsAppComponent } from './events-app.component';
import { EventsListComponent } from './events/events-list.component';
import { EventThumbnailComponent} from './events/event-thumbnail.component';
import { NavBarComponent } from './nav/navbar.component'; 
import { EventService } from './events/shared/event.service';
import { EventDetailsComponent } from './events/event-details/event-details.component';
import { CreateEventComponent } from './events/create-event/create-event.component';
import { appRoutes } from './routes'
import { RouterModule } from '@angular/router';
import { Error404Component} from './errors/404.component';
import { EventRouteActivator } from './events/event-details/event-route-activator.service';


@NgModule({
  imports: [ // Modules
    BrowserModule,
    RouterModule.forRoot(appRoutes)
  ],
  declarations: [ // Components
    EventsAppComponent,
    EventsListComponent, 
    EventThumbnailComponent,
    EventDetailsComponent,
    CreateEventComponent,
    NavBarComponent,
    Error404Component
  ],
  providers: [
    EventService,
    EventRouteActivator
  ],
  bootstrap: [EventsAppComponent]
})
export class AppModule { }
