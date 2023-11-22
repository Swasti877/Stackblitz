import { AbstractControl, ValidationErrors, ValidatorFn } from "@angular/forms";

export function twoStringSameValidator(str: string): ValidatorFn {

    return (control: AbstractControl): ValidationErrors | null => {

        return control.value !== str ? {twoStringSame: {value: control.value}} : null;
    }
}