exports.lambdaHandler = async (event, context) => {
   
    let sum = event.numeroUno + event.numeroDos
    
    event["Resultado"] = sum
    return event
    
  }