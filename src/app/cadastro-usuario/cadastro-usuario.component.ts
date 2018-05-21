import { teste } from './../../../../databing/src/app/data-binding/data-binding.component';

import { Component, OnInit } from '@angular/core';
export class mot {
  nome : String;
  telefone : String;
  cpf : String;
}
@Component({
  selector: 'app-cadastro-usuario',
  templateUrl: './cadastro-usuario.component.html',
  styleUrls: ['./cadastro-usuario.component.css']
})
export class CadastroUsuarioComponent implements OnInit {
   
  t : mot = {nome : "", telefone: "", cpf : ""  };
  usuario : mot;

  cols: any[];

  motoristas : mot[] = [];

 
  gravar(){
    let motorista = [... this.motoristas];

    if(!this.t.nome || !this.t.telefone || !this.t.cpf)
    {
      alert("Informe todos os campos");
      return;
    }
    motorista.push(this.t);
    this.motoristas = motorista;
    this.t = new mot();   
  }

  constructor() {
    
  }

  ngOnInit() {
    
    this.cols = [
      { field: 'nome', header: 'Nome' },
      { field: 'telefone', header: 'Telefone' },
      { field: 'cpf', header: 'CPF' }
  ];
    
  }
  

}
 