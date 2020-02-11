// <reference path="../../../../node_modules/@types/jasmine/index.d.ts" />
import { TestBed, async, ComponentFixture, ComponentFixtureAutoDetect } from '@angular/core/testing';
import { BrowserModule, By } from '@angular/platform-browser';
import { AppareilComponent } from './appareil.component';

let component: AppareilComponent;
let fixture: ComponentFixture<AppareilComponent>;

describe('appareil component', () => {
    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [ AppareilComponent ],
            imports: [ BrowserModule ],
            providers: [
                { provide: ComponentFixtureAutoDetect, useValue: true }
            ]
        });
        fixture = TestBed.createComponent(AppareilComponent);
        component = fixture.componentInstance;
    }));

    it('should do something', async(() => {
        expect(true).toEqual(true);
    }));
});
