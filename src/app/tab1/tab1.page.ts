import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import axios from 'axios';

interface User {
  Df: string;
  Df2: string;
  Dp: string;
  Ce: string;
  Kg: string;
}

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss'],
})
export class Tab1Page {

  toggle1 = false;
  toggle2 = false;
  toggle3 = false;
  inputText = '';
  peso: number;
  mostrarHistorico = false;
  users: User[] = [];

  constructor(private http: HttpClient) {}

  calcularDosagem() {
    console.log('Calculando dosagem...');
    console.log('Toggle 1:', this.toggle1);
    console.log('Toggle 2:', this.toggle2);
    console.log('Toggle 3:', this.toggle3);
    console.log('Texto Inserido:', this.inputText);

    if (this.peso < 0) {
      console.log('Peso não pode ser negativo. Definindo como zero.');
      this.peso = 0;
    }

    console.log('Peso:', this.peso);
  }

  toggleInput() {
    if (!this.toggle1) {
      this.inputText = '';
    }
  }

  getUser() {
    this.http.get<User[]>('http://localhost/user.php').subscribe(
      (response) => {
        console.log(response);
        this.users = response;
      },
      (error) => {
        console.error('Erro na requisição HTTP:', error);
        
      }
    );

    this.mostrarHistorico = !this.mostrarHistorico;
  }
  
  }

