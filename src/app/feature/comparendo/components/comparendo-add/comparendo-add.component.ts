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
import Swal from 'sweetalert2';
import { Comparendo } from '@comparendo/shared/model/comparendo';

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

    notificacion = Swal.mixin({
        toast: true,
        position: 'center'
    });

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
        this.leetInfo();
        this.id = this.route.snapshot.params.id;
        this.isAddMode = !this.id;
        this.initForm();
        if (!this.isAddMode) {
            this.comparendoService.consultarId(this.id)
                .pipe(first())
                .subscribe((x: Comparendo) => {
                    this.initForm(x);
                });
        }
    }

    public initForm(x?) {
        const formOptions: AbstractControlOptions = {};
        this.form = this.formBuilder.group({
            id: [x ? x.id : '', Validators.required],
            posiblesInfractores: [x ? x.posiblesInfractores.placa : '', Validators.required],
            agentesId: [x ? x.agentesId.nombre : '', Validators.required],
            categoriasId: [x ? x.categoriasId.descripcion : '', Validators.required],
            fecha: new Date(),
            valor: [x ? x.valor : '', Validators.required]
        }, formOptions);
    }

    public leetInfo() {
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
        this.form.patchValue({
            valor: this.generarValor(item)
        });
    }

    onSelectAgente(item) {
        const objectKeys = Object.values(item);
        const hora = new Date();
        const horaInicioLabor = objectKeys[3];
        const horaFinLabor = objectKeys[4];
        if (hora.getHours() >= horaInicioLabor && hora.getHours() < horaFinLabor) {
            this.isAgenteValido = false;
            this.loading = false;
        }
        else {
            this.isAgenteValido = true;
            this.loading = true;
        }
    }

    public generarValor(posiblesInfractor: PosiblesInfractor) {
        const pesoLeido: number = posiblesInfractor.pesoLeido;
        const pesoPermitido: number = posiblesInfractor.pesoPermitido;
        const diferencia = pesoPermitido - pesoLeido;
        if (diferencia > 4) {
            return 150000;
        }
        else {
            return 100000;
        }
    }

    private createComparendo() {
        this.comparendoService.guardar(this.form.value)
            .pipe(first())
            .subscribe(() => {
                this.success('El comparendo se ha generado correctamente');
                this.router.navigate(['../'], { relativeTo: this.route });
            }, error => this.mostrarError(error.error.mensaje))
            .add(() => this.loading = false);
    }

    private updateComparendo() {
        this.comparendoService.guardar(this.form.value, this.id)
            .pipe(first())
            .subscribe(() => {
                this.success('El comparendo se ha modificado correctamente');
                this.router.navigate(['../../'], { relativeTo: this.route });
            }, error => this.mostrarError(error.error.mensaje))
            .add(() => this.loading = false);
    }

    public success(tit: string) {
        this.notificacion.fire({
            title: 'Éxito',
            text: tit,
            icon: 'success'
        });
    }

    public mostrarError(mensaje) {
        this.notificacion.fire({
            title: 'Error',
            text: mensaje,
            icon: 'error'
        });
    }
}
