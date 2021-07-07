var score=[0,0];
var resultat=0
var tour_jeu=0;
var en_jeu=false;
var dé;
var te=1;
var ecrire;




function lancerdes(){
    en_jeu=true;
    ecrire=  document.getElementById('score-' + tour_jeu)
    dé = Math.floor(Math.random() * 6) + 1;
    var lancesdesDOM = document.querySelector('.lancesdes');
    lancesdesDOM.style.display = 'block';
        lancesdesDOM.src = 'images/D6_-_' + dé + '.png';

        if (dé!=1)
     {
         
        resultat += dé
        ecrire.textContent = resultat
        
     }
        else{
            
            resultat=0
            ecrire.textContent = resultat
            document.querySelector('.player-0-panel').classList.toggle('active');
            document.querySelector('.player-1-panel').classList.toggle('active');
            tour_jeu === 0 ? tour_jeu = 1 : tour_jeu = 0;
                
        }
            
        

        
  }

  function gagnant(){
      if(en_jeu){
        if(score[tour_jeu]>=20){
            document.getElementById('winner' + tour_jeu).textContent = "Winner"
    
        }
        
      score[tour_jeu] += resultat;
       
    document.getElementById('score_player' + tour_jeu).textContent = score[tour_jeu]
    if(score[tour_jeu]>=20){
        document.getElementById('player' + tour_jeu).textContent = "Winner"
        

    }

    resultat=0
    ecrire.textContent = resultat
    tour_jeu === 0 ? tour_jeu = 1 : tour_jeu = 0;
    
        
    
  }


}


        


function nouveau_jeu(){
    document.getElementById('score_player0').textContent = '0'
    document.getElementById('score_player1').textContent = '0'
    score = [0, 0];
    tour_jeu = 0;
    resultat = 0;
    en_jeu = true;
    document.querySelector('.lancesdes').style.display = 'none';
}









