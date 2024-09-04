import { Component } from '@angular/core';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-cep',
  standalone: true,
  imports: [
    FormsModule,
    ReactiveFormsModule
  ],
  templateUrl: './cep.component.html',
  styleUrl: './cep.component.css'
})
export class CepComponent {

  formCep = new FormGroup({
    cep: new FormControl<string>(''),
    logradouro: new FormControl<string>(''),
    localidade: new FormControl<string>(''),
    uf: new FormControl<string>(''),
    bairro: new FormControl<string>(''),
    numero: new FormControl<number>(0),
    complemento: new FormControl<string>(''),
  })
}
