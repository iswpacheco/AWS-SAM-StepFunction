exports.lambdaHandler = async (event, context) => {
   
    let numberOne = 40
    let numberTwo = 80

    let data = {
        "numeroUno": numberOne,
        "numeroDos": numberTwo
    }
    event = data
    return event
    
  }