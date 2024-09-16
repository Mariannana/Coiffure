const formMessage= document.querySelector(".form");
        console.log(formMessage);

        formMessage.addEventListener("submit", function(event) {
             event.preventDefault(); 

             const formData = new FormData(formMessage);// Récupérer les données du formulaire
             formData.append("submit", "");
             console.log([...formData.entries()]);

      //        Envoyer les données à un fichier PHP 
             fetch("contact.php", {
                 method: 'POST',
                 body: formData
             })
             .then(response => {
                 console.log(response);
                 return response.json();
    //         
             })
             .then(data=>{
                console.log(data);
                if(data.statut=="OK"){
                    window.location.href = "http://localhost/coiffure/contactsuccess.html";
                }
             })
             .catch(error => {
                 console.error(error);
             });
         });




          