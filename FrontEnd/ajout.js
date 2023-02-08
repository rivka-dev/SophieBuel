
async function ajout(){
    const reponse = await fetch('http://localhost:5678/api/works');
    const travaux= await reponse.json();

    //fonction qui genere toute la page web
    function genererTravaux(travaux){
        for (let i=0; i < travaux.length; i++){
            // Création des balises 
            const sectionTravaux = document.querySelector(".galleryModal");
            const figureElement=document.createElement("figure");
            const imageElement = document.createElement("img");            
            const titreElement = document.createElement("figcaption");
            imageElement.src = travaux[i].imageUrl;
            titreElement.innerText = "modifier"
            imageElement.setAttribute("crossorigin","anonymous");

             //Rattachement de nos balises au DOM

             sectionTravaux.appendChild(figureElement);
             figureElement.appendChild(imageElement)
             figureElement.appendChild(titreElement);
        }
    }
    //premier affichage de la page
    genererTravaux(travaux);

    

   
}




  ajout()