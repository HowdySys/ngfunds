import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
    selector: 'selector-name',
    templateUrl: './create-event.component.html'
})

export class CreateEventComponent implements OnInit {
    constructor(private router: Router) { }

    cancel() {
        this.router.navigate(['/events'])
    }

    ngOnInit() { }
}