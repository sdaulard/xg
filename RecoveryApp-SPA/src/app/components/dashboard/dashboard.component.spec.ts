// <reference path="../../../../node_modules/@types/jasmine/index.d.ts" />
import { TestBed, async, ComponentFixture, ComponentFixtureAutoDetect } from '@angular/core/testing';
import { BrowserModule, By } from '@angular/platform-browser';
import { DashBoardComponent } from './DashBoard.component';

let component: DashBoardComponent;
let fixture: ComponentFixture<DashBoardComponent>;

describe('dashboard component', () => {
    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [ DashBoardComponent ],
            imports: [ BrowserModule ],
            providers: [
                { provide: ComponentFixtureAutoDetect, useValue: true }
            ]
        });
        fixture = TestBed.createComponent(DashBoardComponent);
        component = fixture.componentInstance;
    }));

    it('should do something', async(() => {
        expect(true).toEqual(true);
    }));
});
