import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { CustomValidator } from '../validator/custom-validator';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.css']
})
export class CadastroComponent {
  ocultarSenha = true;


  constructor(private formBuilder: FormBuilder){}

    cadastroForm = this.formBuilder.group({

      nome : this.formBuilder.control('', [Validators.required, Validators.minLength(3), Validators.maxLength(35)]),
      email: this.formBuilder.control('', [Validators.required, Validators.email, Validators.maxLength(40)], ),
      usuario: this.formBuilder.control('',[Validators.required, Validators.maxLength(15), CustomValidator.contemEspacos]),
      senha: [null],
      confirmaSenha: [null]

    });

    onEnviar(){
      console.table(this.cadastroForm.value)
    }
}
