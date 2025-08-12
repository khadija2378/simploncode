const cards=document.querySelector(".cards")
function afficher(){ 
     cards.innerHTML = "";
axios.get('http://localhost:4000/programme').then(res=>
    
    res.data.forEach(element => { 
        
       let div=document.createElement("div")
       div.classList.add("card") 
       div.innerHTML=`<i class="fi fi-br-cross" onclick="suprimer('${element.id}')"></i>
        <h3>${element.titre}</h3>
        <p>${element.desc}</p>
        <p><strong>Duree: </strong>${element.duree}</p>
        <p><strong>Competences: </strong>${element.competences}</p>`
    
       cards.appendChild(div);
       
  
    })
)
}afficher()
const form=document.getElementById("formulaire")
form.addEventListener("submit",function(event){ 
  event.preventDefault();   
const nouveauCarde = {
  titre: form.titre.value,
  desc: form.desc.value,
  duree: form.duree.value,
  competences: form.competences.value
}

axios.post('http://localhost:4000/programme',nouveauCarde).then(res=>res.data)
afficher()
 
})


function suprimer(id){ 
  axios.delete(`http://localhost:4000/programme/${id}`)
    .then(res => {
      console.log(res.data);
      afficher();    
    })
    
}