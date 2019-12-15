import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import {CounterComponent} from './counter.component';

describe('CounterComponent', () => {
  let component: CounterComponent;
  let fixture: ComponentFixture<CounterComponent>;
  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CounterComponent]
    });
    fixture = TestBed.createComponent(CounterComponent);
    component = fixture.componentInstance;
  });

  it('should be created', () => {
    expect(component).toBeDefined();
  });

  it('should render counter property', () => {
    const num = 42;
    component.counter = num;
    fixture.detectChanges();
    const debugElement = fixture.debugElement.query(
      By.css('.counter')
    );
    const el: HTMLElement = debugElement.nativeElement;
    expect(el.textContent).toContain(num.toString());
  });

  it('should add green class if counter is event', () => {
    component.counter = 6;
    fixture.detectChanges();
    const debugElement = fixture.debugElement.query(
      By.css('.counter')
    );
    const el: HTMLElement = debugElement.nativeElement;
    expect(el.classList.contains('green')).toBeTruthy();
  });

  it(
    'should increment counter if increment button was clicked',
    () => {
      const btn = fixture.debugElement.query(
        By.css('#increment')
      );
      btn.triggerEventHandler('click', null);
      expect(component.counter).toBe(1);
    }
  );
});
