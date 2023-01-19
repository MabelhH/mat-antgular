import { Component } from '@angular/core';
import { bufferToggle } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  valor1=0;
  valor2=0;
  operation: string='';
  resultado=0;
  //resultado2=0;

  calcular(){
  // this.resultado=this.valor1 + this.valor2;
  // this.resultado2=this.valor1 - this.valor2;
  switch (this.operation) {
    case 'sumar':
      //this.resultado2 = this.valor1 + this.valor2;
      this.resultado = this.valor1 + this.valor2;
      break;
    case 'restar':
      //this.resultado2 = this.valor1 - this.valor2;
      this.resultado = this.valor1 - this.valor2;
      break;
    case 'multiplicar':
      //this.resultado2 = this.valor1 * this.valor2;
      this.resultado = this.valor1 * this.valor2;
      break;
    case 'dividir':
      //this.resultado2 = this.valor1 / this.valor2;
      this.resultado = this.valor1 / this.valor2;
      break;
      
  }
  // switch (this.operation) {
  //   case 'sumar':
  //     this.resultado = this.valor1 + this.valor2;
  //     break;
  //   case 'restar':
  //     this.resultado = this.valor1 - this.valor2;
  //     break;
  //   case 'multiplicar':
  //     this.resultado = this.valor1 * this.valor2;
  //     break;
  //   case 'dividir':
  //     this.resultado = this.valor1 / this.valor2;
  //     break;
      
  // }

  }

  
    sumar(){
      //this.resultado2 = this.valor1 + this.valor2;
      this.resultado =this.valor1 + this.valor2;
    }
    restar(){
      //this.resultado2 = this.valor1 - this.valor2;
      this.resultado =this.valor1 - this.valor2;     
    }
    dividir(){
      //this.resultado2 = this.valor1 * this.valor2;
      this.resultado =this.valor1 * this.valor2;  
    }
    multiplicar(){
      //this.resultado2 = this.valor1 / this.valor2;
      this.resultado =this.valor1 / this.valor2;    
    }
  

  }
