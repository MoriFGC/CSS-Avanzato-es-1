/* JS Exercises should go here */
 // EXTRA Crea con JavaScript la funzionalità per rimuovere il link "twitter" sotto alla sezione "Altro" nell'elemento "aside". Deve avvenire al caricamento della pagina, automticamente.

//  let ol = document.getElementsByClassName("list-unstyled")[1]
 
//  document.addEventListener('DOMContentLoaded', function() {
//      ol.innerHTML = `<li><a href="#">GitHub</a></li>
//                      <li><a href="#">Facebook</a></li>`
//  })

document.addEventListener("DOMContentLoaded", function () {
    let twitter = document.querySelector(".blog-sidebar div:nth-of-type(3) li:nth-of-type(2) a").remove()
})

 // EXTRA Crea con JavaScript la funzionalità per rimuovere il corrispondente elemento padre dal DOM cliccando sul link "Continua a leggere".

 let continua1 = document.querySelector(".col-md-6:first-of-type .stretched-link");
 let continua2 = document.querySelector(".col-md-6:last-of-type .stretched-link");
 let post1 = document.querySelector(".row.mb-2:nth-of-type(2) .col-md-6:first-of-type")
 let post2 = document.querySelector(".row.mb-2:nth-of-type(2) .col-md-6:last-of-type")
 console.log(continua2);
 continua1.addEventListener("click", function() {
     post1.remove()
 })

  continua2.addEventListener("click", function() {
      post2.remove()
  })
 
    

 // EXTRA Crea con JavaScript la funzionalità per creare un alert col nome dell'autore ogni volta che il cursore passa sopra l'autore del post.

    let autore = document.querySelectorAll(".blog-post-meta a")
    for (let i = 0; i < autore.length; i++) {
        autore[i].addEventListener('mouseover', function() {
            alert("Il nome dell'autore è  " + autore[i].innerHTML)
        })
    }
    
        
    
    
    

      