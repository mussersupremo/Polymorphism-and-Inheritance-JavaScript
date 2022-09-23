import { animal, bicho } from "./Animais";

export class cachorro extends animal
{
    mostrarCao()
    {

        if(cao.garras == true)
        {
            cao.possuiGarras = "esse animal possui garras"
        }
        else
        {
            cao.possuiGarras = "esse animal não possui garras"
        }

        console.log(`Este animal se chama ${cao.nomeAnimal}, ele é um(a) ${cao.especieAnimal}, tem ${cao.idadeAnimal} anos, ${cao.possuiGarras}, se alimenta de ${cao.tipoAliment}, se locomove ${cao.locomocao} e se comunica ${cao.somEmitido}.`)
    }
}
    
    var cao = new cachorro
    cao.nomeAnimal = "Skye"
    cao.especieAnimal = "dalmata"
    cao.idadeAnimal = 2
    cao.garras = true 
    cao.quantasPatas = 4
    cao.tipoAliment = "ração especial Golden Chow"
    cao.locomocao = "correndo e andando"
    cao.somEmitido = "latindo"

cao.mostrarCao()