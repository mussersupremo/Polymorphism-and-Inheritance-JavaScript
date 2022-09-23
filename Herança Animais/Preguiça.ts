import { animal, bicho } from "./Animais";

export class preguica extends animal
{
    mostrarPreguica()
    {
        if(sloth.garras == true)
        {
            console.log(`Este animal se chama ${sloth.nomeAnimal}, ele é um(a) ${sloth.especieAnimal}, tem ${sloth.idadeAnimal} anos, esse animal possui garras, se alimenta de ${sloth.tipoAliment}, se locomove ${sloth.locomocao} e se comunica ${sloth.somEmitido}.`)
        }
        else
        {
            console.log(`Este animal se chama ${sloth.nomeAnimal}, ele é um(a) ${sloth.especieAnimal}, tem ${sloth.idadeAnimal} anos, esse animal não possui garras, se alimenta de ${sloth.tipoAliment}, se locomove ${sloth.locomocao} e se comunica ${sloth.somEmitido}.`)
        }
    }
}
    
    var sloth = new preguica
    sloth.nomeAnimal = "Flecha"
    sloth.especieAnimal = "preguiça-comum (Bradypus variegatus)"
    sloth.idadeAnimal = 30
    sloth.garras = true 
    sloth.quantasPatas = 4
    sloth.tipoAliment = "Folhas, frutos e seiva das arvores"
    sloth.locomocao = "sobe em arvores"
    sloth.somEmitido = "grito (quando ameaçado)"

    sloth.mostrarPreguica()