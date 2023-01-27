import { Subject, Observable } from 'rxjs';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class WindowService {
  private windowSize: Subject<number> = new Subject<number>();

  currentWindowSize(): Observable<number> {
    return this.windowSize.asObservable();
  }

  setWindowSize(windowSize: number): void {
    this.windowSize.next(windowSize);
  }

}
