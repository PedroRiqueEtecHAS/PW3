import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.css']
})
export class CadastroComponent {
  ocultarSenha = true;


  constructor(private formBuilder: FormBuilder){}

    cadastroForm = this.formBuilder.group({

      nome : [null],
      email: [null],
      usuario: [null],
      senha: [null],
      confirmaSenha: [null]

    });

    onEnviar(){
      console.table(this.cadastroForm.value)
    }
}
