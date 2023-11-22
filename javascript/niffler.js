console.log("Hello"); 
// Variabelen // 

var delfstoffer = document.querySelector(".delfstoffer"); 
var muntElement = document.querySelector(".munt"); 
var steenElement = document.querySelector(".steen"); 
var meterElement = document.querySelector(".meter"); 
var healthbar = document.querySelector(".inhoudmeter");
var teller = 5;
var delfstofferBegin = document.querySelector(".welkom"); 
var delfstofferVangen = document.querySelector(".button-delfstoffer");
var naamveld = document.querySelector(".form"); 
var windowWidth = window.innerWidth - delfstofferVangen.offsetWidth; 
var windowHeight = window.innerHeight - delfstofferVangen.offsetHeight; 
var randomTop = willekeurigGetal(windowHeight); 
var randomLeft = willekeurigGetal(windowWidth); 
var bodyStart = document.querySelector(".start"); 
var bodySpel = document.querySelector(".spel"); 
var submit = document.querySelector(".submit"); 
var welkomstGroet = document.querySelector(".welkomst-tekst"); 
var bewaarNaam; 
var counter = 0; 

 

//Deze functie geeft de Delfstoffer op de beginpagina een willekeurige plaats op de webpagina  // 
function plaatsingDelfstoffer(){ 
    randomTop = willekeurigGetal(windowHeight); 
    randomLeft = willekeurigGetal(windowWidth);
    delfstofferVangen.style.top = randomTop + "px"; 
    delfstofferVangen.style.left = randomLeft + "px"; 
}

// Uitleg willekeurige plaatsing
// var randomTop = Math.random() * (windowHeight);
// var randomLeft = Math.random() * (windowWidth);

function willekeurigGetal(max) { 
    return Math.random()*max 
     
} 

// Deze functie kijkt of je de Delfstoffer gevangen hebt door een random cijfer te genereren. In een if/else statement wordt beschreven wanneer je de Delfstoffer gevangen hebt of dat hij ontsnapt is. 
// Je hebt 50% kans om de delfstoffer te vangen. Met behulp van DOM manipulatie wordt de afbeelding aangepast naar de uitkomst. 
function gevangen(){ 
var vangResultaat = Math.random();
 
if (vangResultaat <= 0.5) { 
    delfstofferBegin.src=("images/perkament-ontsnapt.png"); 
    plaatsingDelfstoffer();
}
else { 
    delfstofferBegin.src=("images/perkament-gelukt.png"); 
    naamveld.style.display = "block";
    delfstofferVangen.style.display="none";
    }
}

//eventhandler van de paginawissel. Met deze functie ga je van de Start pagina naar de spel pagina. Door middel van het toevoegen van een class maak ik de gewenste pagina zichtbaar. 
//In deze functie wordt ook de tekst bepaald die de gebruiker te zien krijgt bij de delfstoffer. Ik haal de tekst op uit een array van 4 mogelijke uitspraken, daarin heb ik de naam die
//de gebruiker kon opgeven in het formulier --> deze naam sla ik op in een variabele om deze later nog een keer aan te roepen.  
function paginaWissel(event) { 
    console.log("paginawissel")
    event.preventDefault(); 
    bodySpel.classList.add("spel_show"); 
    bodySpel.classList.remove("spel"); 
    console.log(bodySpel); 
    bodyStart.classList.add("start_hidden");
    bodyStart.classList.remove("start"); 
    var delfstofferNaam = document.querySelector("#delfstofferNaam");
    bewaarNaam = delfstofferNaam.value;  
    console.log(bewaarNaam);  
    var uitspraken =  ["Hallo ik ben "+ delfstofferNaam.value+", zul je goed voor mij zorgen?", "Hoi! Ik ben "+delfstofferNaam.value + ", we gaan er samen een leuk avontuur van maken!", "Hey Daar! Wat leuk je te ontmoeten! Ik ben " + delfstofferNaam.value, "Whazup! Kennen wij elkaar al? Achja, ik ben "+ delfstofferNaam.value + " ik houd enorm van muntjes"]
    var randomGetal = Math.random()*4 
    randomGetal = Math.floor(randomGetal);
    welkomstGroet.textContent = uitspraken[randomGetal];    
}
 
// Deze functie telt 10% op bij de healthbar en wanneer de healthbar helemaal vol is veranderd de tekst van de Delfstoffer en verschijnt er een animatie.Ook wordt de functie 'eindspel' uitgevoerd. 
function muntGeven()   {
    teller = teller + 1 ;

    if(teller == 10){
        delfstoffer.src=('javascript/happy.gif'); 
        welkomstGroet.textContent = "Je hebt me heel erg blij gemaakt! Dankjewel"; 
    }
    eindspel(); 
    healthbar.style.width = (teller * 10) + '%';
    
}
 
//Deze functie trekt 10% af van de healthbar en wanneer deze leeg is speelt een andere animatie af. Ook wordt de functie 'eindspel' uitgevoerd. 
function steenGeven() { 
    console.log(teller);
  teller = teller - 1 ;
    if(teller === 0) {
        delfstoffer.src=("javascript/sad.gif");
        welkomstGroet.textContent = "Eigen schuld, dikke bult!";
         
    }
    eindspel();  
    healthbar.style.width = (teller * 10) + '%';
}

 

//Dit is de functie voor het einde van het spel wanneer de healthbar helemaal leeg is of wanneer hij helemaal vol is. Wanneer de meter leeg is krijgt de gebruiker een melding dat de Delfstoffer 
//gevlucht is en dat je opzoek moet naar een nieuwe. De pagina refreshed door 'location.reload' en begint weer bij het begin. Bij een volle healthbar krijg je de melding dat je opzoek moet naar 
//een vriendje voor je Delfstoffer en daarna wordt je weer teruggeleid naar het startscherm. 
function eindspel(){ 
    setTimeout(function eindspel() { 
    if (teller===0)  {
        console.log(teller + " nummer 1"); 
         location.reload(); 
        console.log(teller + " nummer twee");
        if(confirm("Je Delfstoffer is gevlucht! Ga opzoek naar een nieuwe")){
                  
        } 
      
    }
    if (teller===10) { 
        location.reload(); 
       if  (confirm("Je Delfstoffer is super blij met je! Ga opzoek naar een vriendje voor "+ bewaarNaam+"!")){       
 } } } ,3000); } 


 //Deze functie is een easterEgg. Je moet aan bepaalde condities voldoen die ik in een if statement heb gezet. Met een setTimeout functie geef ik voor een bepaalde tijd de Delfstoffer  
 // een andere class en image source.
function easterEgg() { 
counter = counter + 1; 
    console.log(counter); 

    if (counter >= 12 && teller >= 7) { 
        delfstoffer.classList.add("easterEgg"); 

    } 
    setTimeout(function timeOut(){ delfstoffer.classList.remove("easterEgg")}, 7000);  
console.log(delfstoffer); 
}


//Hieronder worden de functies en events uitgevoerd. 


plaatsingDelfstoffer(); 
delfstoffer.addEventListener('click', easterEgg); 
delfstofferVangen.addEventListener('click', gevangen); 
submit.addEventListener('click', paginaWissel);  
steenElement.addEventListener('click', steenGeven);
steenElement.addEventListener('dragend', steenGeven); 
muntElement.addEventListener('click', muntGeven);
muntElement.addEventListener('dragend', muntGeven); 