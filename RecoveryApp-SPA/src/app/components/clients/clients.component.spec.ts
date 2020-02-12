// <reference path="../../../../node_modules/@types/jasmine/index.d.ts" />
import { TestBed, async, ComponentFixture, ComponentFixtureAutoDetect } from '@angular/core/testing';
import { BrowserModule, By } from '@angular/platform-browser';
import { ClientsComponent } from './Clients.component';

let component: ClientsComponent;
let fixture: ComponentFixture<ClientsComponent>;

describe('clients component', () => {
    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [ ClientsComponent ],
            imports: [ BrowserModule ],
            providers: [
                { provide: ComponentFixtureAutoDetect, useValue: true }
            ]
        });
        fixture = TestBed.createComponent(ClientsComponent);
        component = fixture.componentInstance;
    }));

    it('should do something', async(() => {
        expect(true).toEqual(true);
    }));
});
