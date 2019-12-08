import {FormControl} from '@angular/forms';
import {Observable} from "rxjs/index";

export class MyValidators {
  static forbiddenEmails(
    control: FormControl
  ): {[key: string]: boolean} {
    const arr: Array<string> = ['v@mail.ru', 'test@mail.ru'];
    // noinspection TypeScriptUnresolvedFunction
    if (arr.includes(control.value)) {
      return {
        forbiddenEmail: true
      };
    }
    return null;
  }

  static uniqueEmail(control: FormControl):
    Promise<any> | Observable<any> {
    return new Promise(resolve => {
      setTimeout(() => {
        if (control.value === 'async@mail.ru') {
          resolve({
            uniqueEmail: true
          });
        } else {
          resolve(null);
        }
      }, 1000);
    });
  }
}
