async function catchiquote(){
    try{
        return await fetch(`https://rawcdn.githack.com/kamikazechaser/administrative-divisions-db/master/api/${input.value}.json`)
        .then(response => response.json())
        // .then(response => console.log(response))
        
    }
    catch(err){
         console.log (err);
    }
    }
 
  function printquote(){
        catchiquote().then((response)=>{
            response.forEach(element => {
                document.getElementById("countries_list").innerHTML+= `<li>${element}</li>`
            });
            
           
        });
    }
    
