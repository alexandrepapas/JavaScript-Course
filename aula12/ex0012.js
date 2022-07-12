var agora=new Date()
var hora= agora.getHours()

console.log(`agora sao exatamente ${hora} horas.`)
if (hora<12){
    console.log(`Estamos na parte da manha`)
} else if (hora<=18){
   console.log(`Estamos na parte da tarde`)

} else{
    console.log(`estamos na parte da noite `)
}

