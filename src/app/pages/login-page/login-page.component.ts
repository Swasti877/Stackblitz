import { Component, OnDestroy, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { Router } from "@angular/router";
import { Subject, takeUntil } from "rxjs";
import { AuthService } from "src/app/service/auth.service";
import { ReactiveFormService } from "src/app/service/reative-form.service";
import { twoStringSameValidator } from "src/app/validators/twoStringSame.validators";

@Component({
    selector: 'app-login-page',
    templateUrl: './login-page.component.html',
    styleUrls: [],
})


export class LoginPageComponent implements OnInit, OnDestroy {

    protected loginForm!: FormGroup;
    protected readonly passwordLength: { min: number, max: number } = { min: 4, max: 10 }

    private ngUnsubscribe$: Subject<void> = new Subject<void>();

    ngOnInit(): void {
        this.validateTheConfirmPassword();
    }


    constructor(private fb: FormBuilder,
        private reactiveFormService: ReactiveFormService,
        private router: Router,
        private authService: AuthService) {
        this.initializeForm();
    }

    protected initializeForm = () => {
        this.loginForm = this.fb.group({
            email: this.fb.control('', [Validators.required, Validators.email]),
            password: this.fb.control('', [Validators.required,
            Validators.minLength(this.passwordLength.min),
            Validators.maxLength(this.passwordLength.max)]),
            confirmPassword: this.fb.control('', [Validators.required, twoStringSameValidator('abcd')]),
            concernCheckbox: this.fb.control(false, [Validators.requiredTrue]),
        })
    }

    protected hasError(formControlName: string, errName: string): boolean {
        return this.reactiveFormService.hasError(this.loginForm, errName, formControlName);
    }


    protected validateTheConfirmPassword() {

        this.loginForm.valueChanges
            .pipe(
                takeUntil(this.ngUnsubscribe$),
            )
            .subscribe(res => {
                this.loginForm.get('confirmPassword')?.setValidators([twoStringSameValidator(res.password)])
                this.loginForm.get('confirmPassword')?.updateValueAndValidity({ onlySelf: true, emitEvent: true })
            })

    }

    protected handleSubmit() {
        const { email, password } = this.loginForm.value;
        this.authService.setUserName(email);
        this.authService.setPassword(password);
        this.router.navigate(['product'])
    }

    ngOnDestroy(): void {
        this.ngUnsubscribe$.next();
        this.ngUnsubscribe$.complete();
    }
}