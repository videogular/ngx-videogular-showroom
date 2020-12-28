/* tslint:disable:no-unused-variable */
import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { CuePointsPlayerComponent } from './cue-points-player.component';

describe('CuePointsPlayerComponent', () => {
    let component: CuePointsPlayerComponent;
    let fixture: ComponentFixture<CuePointsPlayerComponent>;

    beforeEach(
        waitForAsync(() => {
            TestBed.configureTestingModule({
                declarations: [CuePointsPlayerComponent],
            }).compileComponents();
        })
    );

    beforeEach(() => {
        fixture = TestBed.createComponent(CuePointsPlayerComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
