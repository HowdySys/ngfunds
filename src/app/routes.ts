import { EventsListComponent } from './events/events-list.component';
import { EventDetailsComponent } from './events/event-details/event-details.component';
import { Routes } from '@angular/router';
import { CreateEventComponent } from './events/create-event/create-event.component';
import { Error404Component } from './errors/404.component';
import { EventRouteActivator } from './events/event-details/event-route-activator.service';



export const appRoutes: Routes = [
    { path: 'events', component: EventsListComponent },
    { path: 'events/new', component: CreateEventComponent}, // Needs to be before the ID parameter. Angular finds 'new' before ':id'
    { path: 'events/:id', component: EventDetailsComponent, canActivate: [EventRouteActivator]}, // Param Placeholder where value is passed in on the route. /events/1 or /events/foo
    { path: '404', component: Error404Component },
    
    
    
    
    
    
    
    { path: '', redirectTo: '/events', pathMatch: 'full'} // Default path. Empty or root of site.  Redirect route must have pathmatch. 
                                                          // prefix - redirect if url starts with specified path string. full means redirect if full string matches path string. 
]