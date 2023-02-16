async function work(){
    let work={
      "image": "string"($binary),
      "title": "string",
      "category":"integer"($int64)
    }
    // Création de l’objet .
    var form = document.forms.namedItem("fileinfo");
    form.addEventListener('submit', async function(ev) {
        const submitLogin=document.querySelector("#connexion")
        submitLogin.addEventListener("click", async function(event){      
            event.preventDefault()
            work = {
                image:document.querySelector("#getFile").value,
                titre: document.querySelector("#titre").value,
                categorie:document.querySelector("#categorie").value
            }
            let response = await fetch('http://localhost:5678/api/works',{
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json; charset=utf-8'
                },
                body: JSON.stringify(work)
            })
            let result = await response.json()
            //reponse positive ou negative
            if (response.status === 200) {
                console.log("Envoyé");
            } else {
                console.log(`erreur  lors de la tentative d’envoi du fichier`);
            }  
        })
    })
    



 work()
  
  

}


