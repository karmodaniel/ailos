import { StepperOrientation } from '@angular/cdk/stepper';
import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { CpfConsultService } from '@core/services/cpf-consult/cpf-consult.service';
import { ErrorType } from '@shared/models/errors/errorType.class';
import { User } from '@shared/models/user/user.class';
import { WindowService } from '@shared/services/window/window.service';
import { CPF_PATTERN } from '@utils/constants/patterns';
import { catchError, delay, distinctUntilChanged, finalize, map, of, Subject, Subscription } from 'rxjs';


@Component({
  selector: 'app-first-step',
  templateUrl: './first-step.component.html',
  styleUrls: ['./first-step.component.scss']
})
export class FirstStepComponent implements OnInit, OnDestroy {
  public stepperOrientation: StepperOrientation = 'horizontal';
  public searchValue: FormControl = new FormControl('', [
    Validators.required,
    Validators.pattern(CPF_PATTERN),
  ]);
  public oldValue: string = '';
  public cooperative: User | null;
  public loading$: Subject<boolean> = new Subject<boolean>();
  private subscription$: Subscription = new Subscription();
  public error$: Subject<boolean> = new Subject<boolean>();

  constructor(private cpfConsult: CpfConsultService, private windowsSizeService: WindowService) {}

  ngOnInit(): void {
    this.windowsSizeService.currentWindowSize().subscribe((size) => {
      if (size <= 720) {
        this.stepperOrientation = 'vertical';
        return;
      }
      this.stepperOrientation = 'horizontal';
    });    
  }

  onSearch(): void {
    const COOPERATIVE_CPF_FIELD = this.searchValue;
    if (!this.validField(COOPERATIVE_CPF_FIELD)) return;

    this.getUser(COOPERATIVE_CPF_FIELD.value);
    this.oldValue = COOPERATIVE_CPF_FIELD.value;
  }

  validField(field: FormControl) {
    const FIELD_VALUE = field.value;
    return !(
      FIELD_VALUE.trim() === '' ||
      this.searchValue.invalid ||
      this.searchValue.untouched ||
      FIELD_VALUE === this.oldValue
    );
  }

  getUser(cpf: string): void {
    this.subscription$ = this.cpfConsult
      .getUserByCpf(cpf)
      .pipe(
        map((data: User) => {
          this.loading$.next(true);
          return data;
        }),
        delay(500),
        distinctUntilChanged(),
        catchError((err: HttpErrorResponse) => {
          this.cooperative = null;
          this.handleError(err.status);
          return of();
        }),
        finalize(() => this.loading$.next(false))
      )
      .subscribe((data: User) => {
        this.cooperative = new User(
          data.id,
          data.cpf,
          data.nome,
          data.nascimento,
          data.situacao,
          data.inscricao
        );
      });
  }

  handleError(ErrorCode: number): void {
    const error: ErrorType = new ErrorType();

    const ERROR_TYPE = error.errors[ErrorCode.toString()];
    if (ERROR_TYPE) this.error$.next(true);
  }

  ngOnDestroy(): void {
    this.subscription$.unsubscribe();
  }
}
