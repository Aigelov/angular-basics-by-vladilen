import {Component, OnInit} from '@angular/core';
import {FormArray, FormControl, FormGroup, Validators} from '@angular/forms';

import {MyValidators} from './my.validators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  form: FormGroup;

  ngOnInit() {
    this.form = new FormGroup({
      email: new FormControl(
        '',
        [
          Validators.email,
          Validators.required,
          MyValidators.forbiddenEmails
        ],
        [
          MyValidators.uniqueEmail
        ]
      ),
      password: new FormControl(
        null,
        [
          Validators.required,
          Validators.minLength(6)
        ]
      ),
      address: new FormGroup({
        country: new FormControl('by'),
        city: new FormControl('Minsk', Validators.required)
      }),
      skills: new FormArray([])
    });
  }

  submit() {
    if (this.form.valid) {
      console.clear();
      const formData = {...this.form.value};
      console.log('Form data:', formData);
      this.form.reset();
      console.log('Form data:', {...this.form.value});
    }
  }

  setCapital() {
    const cityMap = {
      kz: 'Astana',
      by: 'Minsk',
      ua: 'Kiev'
    };
    const cityKey = this.form.get('address').get('country').value;
    const city = cityMap[cityKey];
    this.form.patchValue({address: {city}});
  }

  addSkill() {
    const control = new FormControl('', Validators.required);
    // (<FormArray>this.form.get('skills')).push(control);
    (this.form.get('skills') as FormArray).push(control);
  }
}
