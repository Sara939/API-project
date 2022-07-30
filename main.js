async function catchiquote(){
try{
    return await fetch("https://api.goprogram.ai/inspiration")
	.then(response => response.json())
	// .then(response => console.log(response))
	
}
catch(err){
     console.log (err);
}
}

onload= function printquote(){
    catchiquote().then((response)=>{
        for (const key in response) {
            document.getElementById("main").innerHTML+= `<h1>${response[key]}</h1> `
        }  
    });
}
