// <reference path="../../../../node_modules/@types/jasmine/index.d.ts" />
import { TestBed, async, ComponentFixture, ComponentFixtureAutoDetect } from '@angular/core/testing';
import { BrowserModule, By } from '@angular/platform-browser';
import { SingleAppareilComponent } from './single-appareil.component';

let component: SingleAppareilComponent;
let fixture: ComponentFixture<SingleAppareilComponent>;

describe('SingleAppareil component', () => {
    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [ SingleAppareilComponent ],
            imports: [ BrowserModule ],
            providers: [
                { provide: ComponentFixtureAutoDetect, useValue: true }
            ]
        });
        fixture = TestBed.createComponent(SingleAppareilComponent);
        component = fixture.componentInstance;
    }));

    it('should do something', async(() => {
        expect(true).toEqual(true);
    }));
});
