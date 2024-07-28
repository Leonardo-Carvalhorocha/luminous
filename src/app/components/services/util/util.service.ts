import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';

@Injectable({
  providedIn: 'root'
})
export class UtilService {

constructor(
  private snackBar: MatSnackBar,
) { }

 handleMsgSucess(message: string) {
  if(message && message !== '') this.snackBar.open(message, 'X', {
    duration: 3000,
    horizontalPosition: 'right',
    verticalPosition: 'bottom',
    panelClass: 'success-snackbar',
  });
 }

 handleMsgError(message: string) {
  if(message && message !== '') this.snackBar.open(message, 'X', {
    duration: 3000,
    horizontalPosition: 'right',
    verticalPosition: 'bottom',
    panelClass: 'error-snackbar'
  });
 }

 handleMsgWarning(message: string) {
  if(message && message !== '') this.snackBar.open(message, 'X', {
    duration: 3000,
    horizontalPosition: 'right',
    verticalPosition: 'bottom',
    panelClass: 'warning-snackbar'
  });
 }

}
