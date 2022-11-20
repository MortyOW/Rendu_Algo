
  let nombre=0;
  let jeu=true;



    function ChoppeLaValue(id){
      return document.getElementById(id).value;
    }

    function Game(id,id2,id3){
      let recupById=document.getElementById(id);
      let error=document.getElementById("error1");
      nombre=ChoppeLaValue(id3);
      
      if(nombre<=3 || isNaN(nombre)){
        error.innerHTML="Entrer un chiffre supérieur à 3";
      }else{
        error.innerHTML="";
        recupById.innerHTML="";
        for (let i=0; i<nombre;i++){
          insereimg(id);
        }
        ElmtJoueur=document.getElementById("joueur");
        joueur.textContent="Le joueur 1 joue";
        joueur.style.color="#F91C80";
        jeu=true;
        insereButton(id2);
        document.getElementById("nombre").value="";
      }

    }

    function insereimg(id){
      let elmt=document.getElementById(id);
      let createtd=document.createElement("td");
      let i=document.createElement("IMG");
      i.setAttribute("src", "img/allumette.png");
      i.setAttribute("alt","allumette");
      createtd.appendChild(i);
      elmt.appendChild(createtd);
    }

    function insereButton(idb){
      let retirer=document.getElementById(idb);
      retirer.innerHTML="<p><button type='button' onclick='enlever(nombreAllumEnlev)'>Enlever</button> <input type='text' id='nombreAllumEnlev' name='nombreAllumEnlev' size='5' value=''/><label> allumette(s)</label><span id='error2'></span></p><p id='reste'></p>"
    }


    function enlever(nombre2){
      let recupById=document.getElementById("trfeu");
      let nombreAllumEnlev=parseInt(ChoppeLaValue("nombreAllumEnlev"));
      let recupById2=document.getElementById("reste");

      if(nombreAllumEnlev>3 || nombreAllumEnlev<=0 || isNaN(nombreAllumEnlev)){
        error2=document.getElementById("error2");
        error2.textContent=" Entrez un chiffre entre 0 et 3 et inférieur au nombre d\'allumette(s) restante(s) : "+nombre;
        error2.style.color="red";
      }else if (nombreAllumEnlev>nombre){
        error2.textContent=" Entrez un chiffre inférieur au nombre d\'allumette(s) restante(s) : "+nombre;
        error2.style.color="red";
      }else{
        error2.textContent="";
        jeu=!jeu;
          if (jeu==true) {
            joueur.textContent="Le joueur 1 joue";
          }else{
            joueur.textContent="Le joueur 2 joue";
          }
          for (let i=nombreAllumEnlev-1; i>=0;i--){
            recupById.removeChild(recupById.childNodes[i]);
          } 
          nombre=nombre-nombreAllumEnlev;
      }

      recupById2.textContent="Il reste "+nombre+" allumette(s) à jouer.";
      document.getElementById("nombreAllumEnlev").value="";

      if(nombre===0){ 
        joueur.textContent="";
        jeu=!jeu;
        if (jeu==true) {
            joueur.textContent="Le joueur 1 gagne";
            joueur.style.color="#2E76FF";
          }else{
            joueur.textContent="Le joueur 2 gagne";
            joueur.style.color="#2E76FF";
          }
        let i=document.createElement("IMG");
        i.setAttribute("C'est gagné");
        recupById.appendChild(i);
      }

    }
