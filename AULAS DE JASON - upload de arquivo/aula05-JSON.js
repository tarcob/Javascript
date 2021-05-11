async function enviar(){

    let arquivo = document.getElementById('arquivo').files[0];

    let body = new FormData();

    body.append('title', 'esste é o título da img');
    body.append('arquivo', arquivo);

   let req = await fetch('https:www.meusite.com.br/upload', {
       method: 'POST',
       body: body,
       headers: {'Content-type':'multipart/form-data'
    
            }
   });

}