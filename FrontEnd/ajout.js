
async function ajout(){
   
    const reponse = await fetch('http://localhost:5678/api/works')
    const travaux= await reponse.json()
    //fonction qui genere toute la page web
    function genererTravaux(travaux){
        for (let i=0; i < travaux.length; i++){
            // Création des balises 
            const sectionTravaux = document.querySelector(".galleryModal")
            const figureElement=document.createElement("figure")
            figureElement.className="figureModale"
            const imageElement = document.createElement("img") 
            imageElement.className="imgModale"
            const buttonFlecheElement=document.createElement("button")              
            buttonFlecheElement.className = ("noir fleche"  )
            const FlecheElement=document.createElement("img")  
            const buttonSupprimerElement=document.createElement("button") 
            buttonSupprimerElement.className = "noir supprimer"; 
            const SupprimerElement=document.createElement("img")  
            const titreElement = document.createElement("figcaption")
            imageElement.src = travaux[i].imageUrl            
            titreElement.innerText = "modifier"
            imageElement.setAttribute("crossorigin","anonymous")
            SupprimerElement.src=`./assets/icons/suppression.png`          
            FlecheElement.src=`./assets/icons/fleches.png`
            //Rattachement de nos balises au DOM
            sectionTravaux.appendChild(figureElement)
            figureElement.appendChild(imageElement)
      
            imageElement.appendChild(titreElement)
            figureElement.appendChild(buttonFlecheElement)
            buttonFlecheElement.appendChild(FlecheElement)
            figureElement.appendChild(buttonSupprimerElement)
            buttonSupprimerElement.appendChild(SupprimerElement)
             sectionTravaux.appendChild(figureElement);
             figureElement.appendChild(imageElement)
             figureElement.appendChild(titreElement);

             //Suppression
            buttonSupprimerElement.addEventListener("click",async function(){
                console.log(travaux[i].id)
                const answer=await fetch (`http://localhost:5678/api/works/${travaux[i].id}`,{
                    method:'DELETE', 
                    headers: {
                        'Content-Type': 'application/json; charset=utf-8'
                    },
                })
                if(answer.status===200){
                    console.log("element supprime");
                }else{
                    console.log(" element non supprimé")
                }
            })
            
        }
     }
    //premier affichage de la page
    genererTravaux(travaux)
    
   
    }
ajout()