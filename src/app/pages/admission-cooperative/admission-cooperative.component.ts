import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnDestroy } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { catchError, delay, distinctUntilChanged, finalize, map, of, Subject, Subscription } from 'rxjs';
import { CpfConsultService } from 'src/app/core/services/cpf-consult/cpf-consult.service';

@Component({
  selector: 'app-admission-cooperative',
  templateUrl: './admission-cooperative.component.html',
  styleUrls: ['./admission-cooperative.component.scss'],
})
export class AdmissionCooperativeComponent implements OnDestroy {
  public searchValue: FormControl = new FormControl('', [Validators.required]);
  public oldValue: string = '';
  public cooperative: any;
  public loading$: Subject<boolean> = new Subject<boolean>();
  private subscription$: Subscription = new Subscription();

  constructor(private cpfConsult: CpfConsultService) {}

  onSearch(): void {
    const COOPERATIVE_CPF_FIELD = this.searchValue;
    if (!this.validField(COOPERATIVE_CPF_FIELD)) return;

    this.getUser(COOPERATIVE_CPF_FIELD.value);
    this.oldValue = COOPERATIVE_CPF_FIELD.value;
  }

  validField(field: FormControl) {
    const FIELD_VALUE = field.value;
    return !(FIELD_VALUE.trim() === '' ||
    this.searchValue.invalid ||
    this.searchValue.untouched ||
    FIELD_VALUE === this.oldValue)
  }

  getUser(cpf: string): void {
    this.subscription$ = this.cpfConsult
      .getUserByCpf(cpf)
      .pipe(
        map((data) => {
          this.loading$.next(true);
          return data;
        }),
        delay(500),
        distinctUntilChanged(),
        catchError((err: HttpErrorResponse) => {
          console.log(err);
          return of();
        }),
        finalize(() => this.loading$.next(false))
      )
      .subscribe((data) => {
        console.log(data);
        this.cooperative = data;
      });
  }

  ngOnDestroy(): void {
    this.subscription$.unsubscribe();
  }
}
