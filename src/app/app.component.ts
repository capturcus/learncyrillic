import { Component } from '@angular/core';

const letters_lowercase: { [key: string]: string } = {
  "а": "a",
  "б": "b",
  "в": "v",
  "г": "h",
  "ґ": "g",
  "д": "d",
  "е": "e",
  "є": "ie",
  "ж": "rz",
  "з": "z",
  "и": "y",
  "і": "i",
  "ї": "i",
  "й": "i",
  "к": "k",
  "л": "l",
  "м": "m",
  "н": "n",
  "о": "o",
  "п": "p",
  "р": "r",
  "с": "s",
  "т": "t",
  "у": "u",
  "ф": "f",
  "х": "kh",
  "ц": "ts",
  "ч": "ch",
  "ш": "sh",
  "щ": "shch",
  "ю": "iu",
  "я": "ia"
};

const letters_uppercase: { [key: string]: string } = {
  "А": "a",
  "Б": "b",
  "В": "v",
  "Г": "h",
  "Ґ": "g",
  "Д": "d",
  "Е": "e",
  "Є": "ie",
  "Ж": "rz",
  "З": "z",
  "И": "y",
  "І": "i",
  "Ї": "i",
  "Й": "i",
  "К": "k",
  "Л": "l",
  "М": "m",
  "Н": "n",
  "О": "o",
  "П": "p",
  "Р": "r",
  "С": "s",
  "Т": "t",
  "У": "u",
  "Ф": "f",
  "Х": "kh",
  "Ц": "ts",
  "Ч": "ch",
  "Ш": "sh",
  "Щ": "shch",
  "Ю": "iu",
  "Я": "ia"
};

function sumDicts(a: { [key: string]: string }, b: { [key: string]: string }): { [key: string]: string } {
  let ret: { [key: string]: string } = {};
  for (let k in a) {
    ret[k] = a[k];
  }
  for (let k in b) {
    ret[k] = b[k];
  }
  return ret;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  guess: string = "";
  title = 'learncyrillic';
  promptLetter: string = "";
  validGuess: string = "";
  guessWasValid: boolean = false;
  bottomText: string = "";

  ngOnInit() {
    this.setupGuess();
  }

  setupGuess() {
    let sum = sumDicts(letters_lowercase, letters_uppercase);
    var keys = Object.keys(sum);
    this.promptLetter = keys[Math.floor(keys.length * Math.random())];
    this.validGuess = sum[this.promptLetter];
    this.guess = "";
  }

  validateGuess() {
    this.guessWasValid = this.validGuess === this.guess.trim().toLowerCase();
    this.bottomText = this.promptLetter + " -> " + this.validGuess;
    if (!this.guessWasValid) {
      this.bottomText += ", you guessed: " + this.guess;
    }
    this.setupGuess();
  }
}
