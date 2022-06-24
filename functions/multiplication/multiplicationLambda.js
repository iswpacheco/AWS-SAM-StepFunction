exports.lambdaHandler = async (event, context) => {
   
    let multi = event.numeroUno * event.numeroDos
    
    event["Resultado"] = multi
    return event
    
  }