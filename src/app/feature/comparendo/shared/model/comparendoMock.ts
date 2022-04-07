import { Comparendo } from '@shared/models/Comparendo/comparendo';
import { PosiblesInfractor } from './posibles_infractores';
import { Agente } from '@shared/models/Agente/agente';
import { Categoria } from '@shared/models/Categoria/categoria';
const PESO_LEIDO = 12;
const PESO_PERMITIDO = 12;
const HORA_INICIO_LABOR = 8;
const HORA_FIN_LABOR = 22;
const VALOR = 1200000;
export const ComparendoMock = new Comparendo('1', new PosiblesInfractor ( '1', 'ERT 554', PESO_LEIDO, PESO_PERMITIDO + 2, new Date ('2022-04-01') ),
                                            new Agente( '1', 'Agente 1', '312234123', HORA_INICIO_LABOR, HORA_FIN_LABOR ),
                                            new Categoria( '1', 'Camion 2 ejes' ), new Date ('2022-04-01'), VALOR);

export const ComparendoMockArray = [
                                new Comparendo('1', new PosiblesInfractor ( '1', 'ERT 554', PESO_LEIDO + 2, PESO_PERMITIDO, new Date ('2022-04-01') ),
                                new Agente( '1', 'Agente 1', '312234123', HORA_INICIO_LABOR, HORA_FIN_LABOR ),
                                new Categoria( '1', 'Camion 2 ejes' ), new Date ('2022-04-01'), VALOR),
                                new Comparendo('2', new PosiblesInfractor ( '2', 'XXX 999', PESO_LEIDO + 2, PESO_PERMITIDO, new Date ('2022-04-01') ),
                                new Agente( '1', 'Agente 1', '312234123', HORA_INICIO_LABOR, HORA_FIN_LABOR ),
                                new Categoria( '1', 'Camion 2 ejes' ), new Date ('2022-04-01'), VALOR)
];
