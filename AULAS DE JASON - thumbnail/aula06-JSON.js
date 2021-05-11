//    METODO SICRONO

function mostrar(){

    let imagem = document.getElementById("imagem").files[0];

    let img = document.createElement("img");

    img.src = URL.createObjectURL(imagem);
    img.width = 200;

    document.getElementById("area").appendChild(img);




}


//  METODO ASSINCRONO




function mostrar2(){

    let reader = new FileReader();

    let imagem2 = document.getElementById("imagem2").files[0];

       reader.onloadend = function(){

        let img2 = document.createElement("img");
        img2.src =  reader.result 
        img2.width = 200;

        document.getElementById("area2").appendChild(img2);

    }

   reader.readAsDataURL(imagem2);

}