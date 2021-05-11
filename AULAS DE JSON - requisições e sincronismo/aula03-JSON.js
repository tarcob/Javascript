function pegarTemperatura(){

    return new Promise(function(resolve, reject){

        console.log("pegando temperatura...");

        setTimeout(function(){

            resolve('40 na sombra');
        }, 2000);
    });

}

// USANDO A PROMISE

let temp = pegarTemperatura();
temp.then(function(resultado){

    console.log("TEMPERATURA: "+resultado);
});
temp.catch(function(error){

    console.log("Eita, deu erro!");
});


// AULA DE JSON - REQUISIÇÃO - CARREGANDO POST


async function loadPosts(){

document.getElementById('posts').innerHTML = 'caregando...';

   let req = await fetch('https://jsonplaceholder.typicode.com/posts');
   let json = await  req.json();
   montarBlog(json);

}
    
    
        
    /*  .then(function(resultado){

            return resultado.json();
        })
        .then(function(json){

            montarBlog(json);

           
        })
        .catch(function(error){

            console.log('deu problema!');
        })

}

*/

function montarBlog(lista){

    let html = '';

    for(let i in lista){

        html +=  '<h3>'+ lista[i].title +'</h3>';
        html += lista[i].body + '<br/>';
        html += '<hr/>';
    }

    document.getElementById('posts').innerHTML = html;

}