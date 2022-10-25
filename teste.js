function click(qtlaluno){
    try{
        let array = []
        for(let cont= 0; cont <= qtlaluno; cont++){
            array[cont]= cont
        }
        return(array)
        

    }
    catch(err){
        return err.message
    }
}


console.log(click(5))