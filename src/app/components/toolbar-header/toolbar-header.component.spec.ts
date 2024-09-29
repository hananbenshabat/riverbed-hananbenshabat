import { DebugElement } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { ToggleButtonModule } from 'primeng/togglebutton';
import { ToolbarHeaderComponent } from './toolbar-header.component';

describe('ToolbarHeaderComponent', () => {
    let component: ToolbarHeaderComponent;
    let fixture: ComponentFixture<ToolbarHeaderComponent>;
    let debugElement: DebugElement;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            imports: [ToggleButtonModule],
            declarations: [ToolbarHeaderComponent]
        }).compileComponents();

        fixture = TestBed.createComponent(ToolbarHeaderComponent);
        component = fixture.componentInstance;
        debugElement = fixture.debugElement;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });

    it('should set docHTMLRef in ngAfterViewInit', () => {
        component.ngAfterViewInit();
        expect(component.docHTMLRef).toBe(document.querySelector('html'));
    });

    it('should toggle dark mode on button change', () => {
        const htmlElement = document.createElement('html');
        spyOn(document, 'querySelector').and.returnValue(htmlElement);

        component.ngAfterViewInit();

        const toggleButton = debugElement.query(By.css('p-togglebutton'));

        expect(component.docHTMLRef?.classList.contains('dark')).toBeFalse();

        toggleButton.triggerEventHandler('onChange', { checked: true });
        fixture.detectChanges();

        expect(component.docHTMLRef?.classList.contains('dark')).toBeTrue();

        toggleButton.triggerEventHandler('onChange', { checked: false });
        fixture.detectChanges();

        expect(component.docHTMLRef?.classList.contains('dark')).toBeFalse();
    });
});
