import { Agente } from '@shared/models/Agente/agente';
import { Categoria } from '@shared/models/Categoria/categoria';
import { Comparendo } from './comparendo';
import { PosiblesInfractor } from './posibles_infractores';
export const ComparendoMockArray = [
                                new Comparendo('1', new PosiblesInfractor ( '1', 'ERT 554', 12, 10, new Date ('2022-04-01') ),
                                new Agente( '1', 'Agente 1', '312234123', 2, 22 ),
                                new Categoria( '1', 'Camion 2 ejes' ), new Date ('2022-04-01'), 12000),
                                new Comparendo('2', new PosiblesInfractor ( '2', 'XXX 999', 12, 10, new Date ('2022-04-01') ),
                                new Agente( '1', 'Agente 1', '312234123', 2, 22 ),
                                new Categoria( '1', 'Camion 2 ejes' ), new Date ('2022-04-01'), 12000)];
export const ComparendoMock = new Comparendo('1', new PosiblesInfractor ( '1', 'ERT 554', 12, 10, new Date ('2022-04-01') ),
                                            new Agente( '1', 'Agente 1', '312234123', 2, 22 ),
                                            new Categoria( '1', 'Camion 2 ejes' ), new Date ('2022-04-01'), 12000);
