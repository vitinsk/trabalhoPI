import { Component, OnInit } from '@angular/core';
export class vei{
    nome : String;
    placa : String;
    ano : String;
    Km_litro : String;
    }

@Component({
  selector: 'app-cadastro-veiculo',
  templateUrl: './cadastro-veiculo.component.html',
  styleUrls: ['./cadastro-veiculo.component.css']
})
export class CadastroVeiculoComponent implements OnInit {
  v : vei = {nome: "",ano: "",placa: "",Km_litro: ""};
  veiculos : vei;
  cols: any[];
  veiculoss : vei[] = [];
  constructor() { }

  gravar(){
    let veiculoss = [... this.veiculoss];
    if(!this.v.nome || !this.v.Km_litro || !this.v.ano ||!this.v.placa){
      alert("Informe todos os campos");
      return;
    }
  veiculoss.push(this.v);
  this.veiculoss = veiculoss;
  this.v = new vei();

  }

  ngOnInit() {
    
    this.cols = [
      { field: 'nome', header: 'Nome' },
      { field: 'placa', header: 'Placa' },
      { field: 'ano', header: 'Ano' },
      { field: 'Km_litro', header: 'Km por Litro' },      
  ];
    
  }

}
