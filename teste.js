function click(qtlaluno, recipiente, mililitros){
    try{
        let litrostotal = (qtlaluno*mililitros)/1000
        let calma = litrostotal/recipiente
        let as = Math.ceil(calma)*recipiente
        

return calma
    }
    catch(err){
        return err.message
    }
}


console.log(click(2, 3, 3000))