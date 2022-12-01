import { getNumberOfCurrencyDigits } from "@angular/common";
import { Injectable } from "@angular/core";
import { FormBuilder, Validators } from "@angular/forms";

@Injectable({providedIn:"root"})

export class ParametersForms{

    constructor(private formBuilder: FormBuilder){}

    baseForm = this.formBuilder.group({
        funcion: ['', [Validators.required]],
        limiteInferior: ['', [Validators.required]],
        limiteSuperior: ['', [Validators.required]],
        decimales: [0, [Validators.required]],
        error: ['', [Validators.required]],
        result: [0]
    })
}