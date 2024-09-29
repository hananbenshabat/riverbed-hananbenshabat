import { AfterViewInit, Component } from '@angular/core';
import { PrimeNGConfig } from 'primeng/api';
import { definePreset } from 'primeng/themes';
import { Lara } from 'primeng/themes/lara';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrl: './app.component.scss'
})
export class AppComponent implements AfterViewInit {
    docHTMLRef: HTMLHtmlElement | null = null;
    preset = definePreset(Lara, {
        semantic: {
            primary: {
                50: '{indigo.50}',
                100: '{indigo.100}',
                200: '{indigo.200}',
                300: '{indigo.300}',
                400: '{indigo.400}',
                500: '{indigo.500}',
                600: '{indigo.600}',
                700: '{indigo.700}',
                800: '{indigo.800}',
                900: '{indigo.900}',
                950: '{indigo.950}'
            }
        }
    });

    constructor(private primengConfig: PrimeNGConfig) {
        this.primengConfig.theme.set({
            preset: this.preset,
            options: {
                prefix: 'p',
                darkModeSelector: '.dark',
                cssLayer: false
            }
        });
    }

    ngAfterViewInit(): void {
        this.docHTMLRef = document.querySelector('html');
    }
}
