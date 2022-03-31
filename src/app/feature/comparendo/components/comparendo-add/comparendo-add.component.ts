import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { AbstractControlOptions, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ComparendoService } from '../../shared/service/comparendo.service';
import { PosiblesInfractorService } from '@comparendo/shared/service/posibles_infractores.service';
import { PosiblesInfractor } from '@comparendo/shared/model/posibles_infractores';
import { first } from 'rxjs/operators';

import { AgenteSharedService } from '@shared/services/Agente/agente.shared.service';
import { Categoria } from '@shared/models/Categoria/categoria';
import { CategoriaSharedService } from '@shared/services/Categoria/categoria.service';
import { Agente } from '@shared/models/Agente/agente';

@Component({
    selector: 'app-comparendo-add',
    templateUrl: './comparendo-add.component.html',
    styleUrls: ['./comparendo-add.component.css']
})
export class ComparendoAddComponent implements OnInit {
    form!: FormGroup;
    id!: string;
    isAddMode!: boolean;
    isAgenteValido!: boolean;
    loading = false;
    submitted = false;
    habilitado = true;
    fechaHora = new Date();
    agentes!: Agente[];
    categorias!: Categoria[];
    posiblesInfractores!: PosiblesInfractor[];

    constructor(
        private formBuilder: FormBuilder,
        private route: ActivatedRoute,
        private router: Router,
        private agenteService: AgenteSharedService,
        private categoriaService: CategoriaSharedService,
        private comparendoService: ComparendoService,
        private posiblesInfractorService: PosiblesInfractorService
    ) { }

    ngOnInit() {
        this.posiblesInfractorService.consultar()
            .pipe(first())
            .subscribe(res => {
                this.posiblesInfractores = res;
            });
        this.agenteService.consultar()
            .pipe(first())
            .subscribe(res => this.agentes = res);
        this.categoriaService.consultar()
            .pipe(first())
            .subscribe(res => this.categorias = res);
        this.id = this.route.snapshot.params.id;
        this.isAddMode = !this.id;
        const formOptions: AbstractControlOptions = {};
        this.form = this.formBuilder.group({
            id: ['', Validators.required],
            posibles_infractoresId: ['', Validators.required],
            agentesId: ['', Validators.required],
            categoriasId: ['', Validators.required],
            fecha: new Date(),
            valor: ['', Validators.required]
        }, formOptions);
        if (!this.isAddMode) {
            this.comparendoService.consultarId(this.id)
                .pipe(first())
                .subscribe(x => this.form.patchValue(x));
        }

    }

    // convenience getter for easy access to form fields
    get f() { return this.form.controls; }

    onSubmit() {
        this.submitted = true;

        // stop here if form is invalid
        if (this.form.invalid) {
            return;
        }

        this.loading = true;
        if (this.isAddMode) {
            this.createComparendo();
        } else {
            this.updateComparendo();
        }
    }

    onSelectPosibleInfractor(item) {
        const objectKeys = Object.values(item);
        const pesoLeido = +objectKeys[2];
        const pesoPermitido = +objectKeys[3];
        const sobrePaso = pesoPermitido - pesoLeido;
        console.log(sobrePaso);
    }

    onSelectAgente(item) {
        const objectKeys = Object.values(item);
        const hora = new Date();
        const horaInicioLabor = objectKeys[3];
        const horaFinLabor = objectKeys[4];
        if (hora.getHours() >= horaInicioLabor && hora.getHours() < horaFinLabor){
            this.isAgenteValido = false;
            this.loading = false;
        }
        else{
            this.isAgenteValido = true;
            this.loading = true;
        }
    }

    private createComparendo() {
        this.comparendoService.guardar(this.form.value)
            .pipe(first())
            .subscribe(() => {
                this.router.navigate(['../'], { relativeTo: this.route });
            })
            .add(() => this.loading = false);
    }

    private updateComparendo() {
        this.comparendoService.guardar(this.form.value, this.id)
            .pipe(first())
            .subscribe(() => {
                this.router.navigate(['../../'], { relativeTo: this.route });
            })
            .add(() => this.loading = false);
    }
}
