

import { Component, OnInit } from '@angular/core';
import { FuncionarioService } from '../funcionario.service';
import { FormControl } from '@angular/forms';
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

  cols: any[];

 

  funcionarios = [];

  constructor(private funcionarioService: FuncionarioService) {
    
  }

  ngOnInit() {
    this.consultar();

    this.cols = [
      { field: 'nome', header: 'Nome' },
      { field: 'telefone', header: 'Telefone' },
      { field: 'cpf', header: 'CPF' },
      
  ];
    
  }
  consultar(){
    this.funcionarioService.listar().subscribe(dados => this.funcionarios = dados)
  }

  salvar(frm: FormControl){
    
    this.funcionarioService.gravar(frm.value)
    .subscribe(() => {
      frm.reset();
      this.consultar();
    })
  }

}
 