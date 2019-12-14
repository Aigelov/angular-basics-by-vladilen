import {CounterComponent} from './counter.component';
import { FormBuilder } from '@angular/forms';

describe('CounterComponent', () => {
  let counterComponent: CounterComponent;
  /** beforeAll, afterEach, afterAll */ // Other available methods
  beforeEach(() => {
    counterComponent = new CounterComponent(new FormBuilder());
  });

  it('should increment counter by 1', () => {
    counterComponent.increment();
    expect(counterComponent.counter)
      .toBe(1);
  });

  it('should decrement counter by 1', () => {
    counterComponent.decrement();
    expect(counterComponent.counter)
      .toBe(-1);
  });

  it('should increment value by event emitter', () => {
    let result = null;
    counterComponent.counterEmitter
      .subscribe(value => {
        result = value;
      });
    counterComponent.increment();
    expect(result).toBe(1);
  });

  it('should create form with 2 controls', () => {
    expect(counterComponent.form.contains('login')).toBeTruthy();
    expect(counterComponent.form.contains('email')).toBeTruthy();
  });

  it('should mark login as invalid if empty value', () => {
    const control = counterComponent.form.get('login');
    control.setValue('');
    expect(control.valid).toBeFalsy();
  });
});
