const API= "https://my-json-server.typicode.com/Jeck99/fake-server/users" ;

async function getUsersInfo() {
    try {
        return await fetch(API)
            .then(res => res.json())
    }
    catch (err) {
        console.log(err)
    }
    finally { }
}



function printUsersInfo() {

    getUsersInfo().then((answer) => {answer.forEach(element => {
    users_table.innerHTML += `<tr id="${element._id}">
    <td>${element._id}</td><td>${element.age}</td><td>${element.name.first}</td><td>${element.name.last}</td><td>
    ${element.email}</td><td>${element.index}</td><td>${element.phone}</td><td>
    <img class="img-thumbnail" src="/imges/gettyimages-1250238624-612x612.jpg"/></td><td>
   <button onclick="deletUser('${element._id}')">&#9940;</button></td>
    </tr>
    `
        });
    })
}


printUsersInfo()


async function deletUser(id){
    try{
        let result = await fetch(`${API}/${id}`, {method: "DELETE"})
        if(result.status <= 299 || 404) document.getElementById(id).remove()
    }
    catch(err){console.log(err)}
    finally{}

}


