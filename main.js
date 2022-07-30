
async function getinfo(){
try{

    return await fetch("https://api.goprogram.ai/inspiration")
	.then(response => response.json())
	// .then(response => console.log(response))
	
}
catch(err){
    console.log (err);
}
}


onload= function printinfo(){
    getinfo().then((response)=>{
        for (const key in response) {
            document.getElementById("main").innerHTML+= `<h1>${response[key]}</h1> `
        }  
    });
}
