// <reference path="../../../../node_modules/@types/jasmine/index.d.ts" />
import { TestBed, async, ComponentFixture, ComponentFixtureAutoDetect } from '@angular/core/testing';
import { BrowserModule, By } from "@angular/platform-browser";
import { AppareilViewComponent } from './appareil-view.component';

let component: AppareilViewComponent;
let fixture: ComponentFixture<AppareilViewComponent>;

describe('appareil-view component', () => {
    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [ AppareilViewComponent ],
            imports: [ BrowserModule ],
            providers: [
                { provide: ComponentFixtureAutoDetect, useValue: true }
            ]
        });
        fixture = TestBed.createComponent(AppareilViewComponent);
        component = fixture.componentInstance;
    }));

    it('should do something', async(() => {
        expect(true).toEqual(true);
    }));
});
