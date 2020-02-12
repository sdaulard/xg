// <reference path="../../../../node_modules/@types/jasmine/index.d.ts" />
import { TestBed, async, ComponentFixture, ComponentFixtureAutoDetect } from '@angular/core/testing';
import { BrowserModule, By } from '@angular/platform-browser';
import { ProduitComponent } from './Produit.component';

let component: ProduitComponent;
let fixture: ComponentFixture<ProduitComponent>;

describe('produit component', () => {
    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [ ProduitComponent ],
            imports: [ BrowserModule ],
            providers: [
                { provide: ComponentFixtureAutoDetect, useValue: true }
            ]
        });
        fixture = TestBed.createComponent(ProduitComponent);
        component = fixture.componentInstance;
    }));

    it('should do something', async(() => {
        expect(true).toEqual(true);
    }));
});
