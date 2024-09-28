import { Component } from '@angular/core';
import { PrimeNGConfig } from 'primeng/api';
import { Lara } from 'primeng/themes/lara';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrl: './app.component.scss'
})
export class AppComponent {
    constructor(private primengConfig: PrimeNGConfig) {
        this.primengConfig.theme.set({
            preset: Lara,
            options: { prefix: 'p', darkModeSelector: 'system', cssLayer: false }
        });
    }
}
