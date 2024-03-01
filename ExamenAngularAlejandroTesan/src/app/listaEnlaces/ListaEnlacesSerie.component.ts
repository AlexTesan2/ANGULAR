import { Component, OnInit } from "@angular/core";
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { Router } from '@angular/router';
import { Service } from "../General/Service";
import { SerieClass } from "../General/ISerie";

@Component({
    selector: 'ListaEnlacesSerie',
    standalone: true,
    imports: [CommonModule, RouterModule],
    templateUrl: 'ListaEnlacesSerie.component.html',
    providers: [Service], 
    styleUrls: ['../Otros/estilosTabla.css']
})

export class ListaEnlacesSerie implements OnInit {

    series : SerieClass[] = [];
    constructor(public miService : Service,private router: Router){   

    }

    ngOnInit(): void {
        this.miService.getSeries().subscribe((se) => this.series = se);
    }
}