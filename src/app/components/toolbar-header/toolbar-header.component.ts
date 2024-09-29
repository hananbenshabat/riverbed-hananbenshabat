import { AfterViewInit, Component } from '@angular/core';

@Component({
    selector: 'toolbar-header',
    templateUrl: './toolbar-header.component.html',
    styleUrl: './toolbar-header.component.scss'
})
export class ToolbarHeaderComponent implements AfterViewInit {
    docHTMLRef: HTMLHtmlElement | null = null;

    ngAfterViewInit(): void {
        this.docHTMLRef = document.querySelector('html');
    }
}
