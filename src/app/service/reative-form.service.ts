import { Injectable } from '@angular/core';
import { FormGroup } from '@angular/forms';


@Injectable()

export class ReactiveFormService {


    // method to check error in reactive form
    public hasError(formGroup: FormGroup, errName: string, formControlName: string): boolean {

        return (formGroup.get(formControlName)?.hasError(errName) && formGroup.get(formControlName)?.touched) ?? false;
    }
}