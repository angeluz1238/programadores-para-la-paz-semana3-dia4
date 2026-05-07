const comunidades = ["Barrio La Paz", "Comunidad Escolar", "Junta Juvenil" ," fuerza de jubilacion" , "bailando por paz y comunidad"]

console.log("Recorrido de un array con for tradicional")

for (let i = 0; i < comunidades.length; i = i + 1) {
  console.log("Posición:", i)
  console.log("Comunidad:", comunidades[i])
}

console.log("Recorrido con for finalizado.")
