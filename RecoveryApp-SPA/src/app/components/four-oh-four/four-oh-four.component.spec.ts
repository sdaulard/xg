// <reference path="../../../../node_modules/@types/jasmine/index.d.ts" />
import { TestBed, async, ComponentFixture, ComponentFixtureAutoDetect } from '@angular/core/testing';
import { BrowserModule, By } from "@angular/platform-browser";
import { FourOhFourComponent } from './four-oh-four.component';

let component: FourOhFourComponent;
let fixture: ComponentFixture<FourOhFourComponent>;

describe('four-oh-four component', () => {
    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [ FourOhFourComponent ],
            imports: [ BrowserModule ],
            providers: [
                { provide: ComponentFixtureAutoDetect, useValue: true }
            ]
        });
        fixture = TestBed.createComponent(FourOhFourComponent);
        component = fixture.componentInstance;
    }));

    it('should do something', async(() => {
        expect(true).toEqual(true);
    }));
});
