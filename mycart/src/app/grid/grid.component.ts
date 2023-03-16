import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-grid',
  templateUrl: './grid.component.html',
  styleUrls: ['./grid.component.scss']
})
export class GridComponent implements OnInit {
  arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  winner1 = false;
  winner2 = false;
  winnerx = false;
  ngOnInit() { }
  count = 0;
  temp = 0;
  showCircleOrSquare(i: number) {
    this.temp++;
    (document.getElementById(`btn${i}`) as HTMLInputElement).disabled = true;

    document.getElementById(`btn${i}`)?.setAttribute('value', '' + this.count);
    if (this.count) {
      document.getElementById(`circleOrSquare${i}`)?.classList.add('circle_or_square')
      this.count = 0;
    }
    else {
      document.getElementById(`circleOrSquare${i}`)?.classList.add('circle_or_square', 'make_circle')
      this.count = 1;
    }
    this.checkWinner(this.count, this.temp)
  }
  checkWinner(count: number, temp: number) {
    let btn1 = document.getElementById('btn1')?.getAttribute('value');
    let btn2 = document.getElementById('btn2')?.getAttribute('value');
    let btn3 = document.getElementById('btn3')?.getAttribute('value');
    let btn4 = document.getElementById('btn4')?.getAttribute('value');
    let btn5 = document.getElementById('btn5')?.getAttribute('value');
    let btn6 = document.getElementById('btn6')?.getAttribute('value');
    let btn7 = document.getElementById('btn7')?.getAttribute('value');
    let btn8 = document.getElementById('btn8')?.getAttribute('value');
    let btn9 = document.getElementById('btn9')?.getAttribute('value');
    if (
      (btn1 == btn2 && btn2 == btn3 && btn1 != 'x') ||
      (btn4 == btn5 && btn5 == btn6 && btn4 != 'x') ||
      (btn7 == btn8 && btn8 == btn9 && btn7 != 'x') ||
      (btn1 == btn4 && btn4 == btn7 && btn1 != 'x') ||
      (btn2 == btn5 && btn5 == btn8 && btn2 != 'x') ||
      (btn3 == btn6 && btn6 == btn9 && btn3 != 'x') ||
      (btn1 == btn5 && btn5 == btn9 && btn1 != 'x') ||
      (btn3 == btn5 && btn5 == btn7 && btn3 != 'x')) {
      if (count != 1) {
        this.disableAllBtns()
        this.winner2 = true;
      }
      else {
        this.winner1 = true;
        this.disableAllBtns()
      }
    }
    if (temp == 9 && !this.winner1 && !this.winner2) this.winnerx = true
  }
  disableAllBtns() {
    for (let i = 1; i <= 9; i++) {
      (document.getElementById(`btn${i}`) as HTMLInputElement).disabled = true;
    }
  }
  restart() {
    window.location.reload();
  }
}
