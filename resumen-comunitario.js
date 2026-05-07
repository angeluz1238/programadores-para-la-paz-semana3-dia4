const actividades = [
    "Revisar propuestas recibidas",
    "Confirmar fuentes de información",
    "Publicar mensajes claros",
    "Hacer seguimiento a compromisos" ,
    "Actualizar la información de la comunidad" ,
   "Compartir avisos fáciles de entender" ,
    "Coordinar reuniones del barrio" ,
    "Realizar jornadas de limpieza",  
    "Publicar avisos claros para los vecinos"
  ]
  
  console.log("Resumen de actividades comunitarias con for tradicional:")
  
  for (let i = 0; i < actividades.length; i = i + 1) {
    console.log("Actividad pendiente", i + 1, ":", actividades[i])
  }
  
  console.log("Resumen de actividades comunitarias con for...of:")
  
  for (const actividad of actividades) {
    console.log("Actividad pendiente:", actividad)
  }
  
  console.log("Resumen comunitario finalizado.")
  