import { animal, bicho } from "./Animais";

export class cavalo extends animal
{
    mostrarCavalo()
    {

        if(horse.garras == true)
        {
            horse.possuiGarras = "esse animal possui garras"
        }
        else
        {
            horse.possuiGarras = "esse animal não possui garras"
        }

        console.log(`Este animal se chama ${horse.nomeAnimal}, ele é um(a) ${horse.especieAnimal}, tem ${horse.idadeAnimal} anos, ${horse.possuiGarras}, se alimenta de ${horse.tipoAliment}, se locomove ${horse.locomocao} e se comunica ${horse.somEmitido}.`)
    }
}
    
    var horse = new cavalo
    horse.nomeAnimal = "Spirit"
    horse.especieAnimal = "cavalo da especie Frísio"
    horse.idadeAnimal = 15
    horse.garras = false 
    horse.quantasPatas = 4
    horse.tipoAliment = "feno"
    horse.locomocao = "correndo e andando"
    horse.somEmitido = "relincho"

    horse.mostrarCavalo()