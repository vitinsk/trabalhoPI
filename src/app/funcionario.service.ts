import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable(
  
)
export class FuncionarioService {

  funcionariosUrl = 'http://192.168.1.3:8080/funcionarios';

  constructor(private http: HttpClient) { }
listar(){
  return this.http.get<any[]>(this.funcionariosUrl);
}

gravar(funcionarios: any ){ 
  return this.http.post(this.funcionariosUrl, funcionarios);
}

}
