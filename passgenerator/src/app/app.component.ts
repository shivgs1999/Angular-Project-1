import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  password = '';
  includesLetter = false;
  includesNumer = false;
  includesSymbol = false;
  inputLength = 0;

  onChangeUseLetters() {
    this.includesLetter = !this.includesLetter;
    console.log('includesLetter:', this.includesLetter);
  }
  onChangeUseNumbers() {
    this.includesNumer = !this.includesNumer;
    console.log('includesNumer', this.includesNumer);
  }
  onChangeUseSymbols() {
    this.includesSymbol = !this.includesSymbol;
    console.log('includesSymbol', this.includesSymbol);
  }
  numberLength(value: string) {
    let parsedValue = parseInt(value);
    if (!isNaN(parsedValue)) {
      this.inputLength = parsedValue;
      console.log(this.inputLength);
    }
  }

  generatePassword() {
    const letter = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const number = '1234567890';
    const symbol = '!@#$%^&*()';
    let generatedPassword = '';
    let validChars = '';
    if (this.includesLetter) {
      validChars += letter;
    }
    if (this.includesNumer) {
      validChars += number;
    }
    if (this.includesSymbol) {
      validChars += symbol;
    }
    for (let i = 0; i < this.inputLength; i++) {
      const index = Math.floor(Math.random() * validChars.length);
      generatedPassword += validChars[index];
    }
    this.password = generatedPassword;
  }
}
