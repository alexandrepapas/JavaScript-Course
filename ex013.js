var agora = new Date()
var diaSem = agora.getDay()

 
/* DOMINGO
    01=SEGUNDA
    02=TERÇA 
    =03QUARTA 
    =04QUINTA 
    =05SEXTA
    =06SABADO

*/
 console.log(diaSem)

 switch(diaSem){
    case 0:
        console.log('Domingo')
        break
    case 1:
        console.log("segunda")
        break
    case 2: 
        console.log("Terça")
    case 3: 
        console.log('Quarta') 
        break
    case 4:
        console.log("Quinta")
        break
    case 5: 
        console.log ("sexta")
        break

    case 6:
        console.log("Sábado ")
        break
    
    default:
        console.log('[ERRO] Dia Inválido')
        break

 }
 