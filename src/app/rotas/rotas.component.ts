import { teste } from './../../../../databing/src/app/data-binding/data-binding.component';
import { Routes } from '@angular/router';
import { AgmDirectionModule } from 'agm-direction';
//import { Routes } from '@angular/router';
import { Component, OnInit, ViewChild } from '@angular/core';
import {} from '@types/googlemaps';
import { GMap, GMapModule } from 'primeng/gmap';

export class rot {
  origem : String;
  destino : String;
}

@Component({  
  selector: 'app-rotas',
  templateUrl: './rotas.component.html',
  styleUrls: ['./rotas.component.css']
})

export class RotasComponent implements OnInit {
  display: boolean = false;
  origem : String;
  destino : String;
  cols: any[];
  t : rot = {origem : "", destino: ""};
  rotaSelecionada : rot;
  constructor() { }
  latitude = -19.982048;
  longitude =  -44.036080;
  dir = undefined ;

  rotas : rot[] = []

  adicionarRota(){
    let rota = [... this.rotas];
    this.dir = {
      origin : this.origem,
      destination : this.destino
    }
      
    
      if(!this.dir.origin || !this.dir.destination){
        alert("Informe todos os campos");
        return;
      }
      rota.push(this.t);
      this.rotas = rota;
      this. t = new rot();
    this.display = false;
  
  }

  onRowSelect(event) {

    this.dir.origin = this.rotaSelecionada.origem;
    this.dir.destination = this.rotaSelecionada.destino;

}

  showDialog() {
    this.display = true;
    this.origem = '';
    this.destino = '';

}
  ngOnInit() {

    this.cols = [
      { field: 'origem', header: 'Origem' },
      { field: 'destino', header: 'Destino' }
  ];

  }

  

 
}
