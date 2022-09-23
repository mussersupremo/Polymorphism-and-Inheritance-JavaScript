import { cachorro } from "./Cachorro"

export {bicho}
export class animal
{
    nomeAnimal: string
    idadeAnimal: number
    especieAnimal: string
    garras: boolean
    quantasPatas: number
    tipoAliment: string
    locomocao: string
    somEmitido: string
    possuiGarras: string

    mostrarCao(){}
    mostrarCavalo(){}
    mostrarPreguica(){}
}

var bicho = new animal

bicho.mostrarCao()
bicho.mostrarCavalo()
bicho.mostrarPreguica()
