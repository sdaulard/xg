// <reference path="../../../../node_modules/@types/jasmine/index.d.ts" />
import { TestBed, async, ComponentFixture, ComponentFixtureAutoDetect } from '@angular/core/testing';
import { BrowserModule, By } from '@angular/platform-browser';
import { ProduitsComponent } from './Produits.component';

let component: ProduitsComponent;
let fixture: ComponentFixture<ProduitsComponent>;

describe('dashboard component', () => {
    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [ ProduitsComponent ],
            imports: [ BrowserModule ],
            providers: [
                { provide: ComponentFixtureAutoDetect, useValue: true }
            ]
        });
        fixture = TestBed.createComponent(ProduitsComponent);
        component = fixture.componentInstance;
    }));

    it('should do something', async(() => {
        expect(true).toEqual(true);
    }));
});
