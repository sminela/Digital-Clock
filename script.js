var nacrtajBrojcanik = function(id){
    var sviElementi = [];
    var clock = document.getElementById(id);
    var wrapper = document.createElement('div');
    wrapper.className = 'wrapper';

    for(var i = 1; i<8; i++) {
        var element = document.createElement('div');
        element.className = 'segment s' + i;
        wrapper.appendChild(element);
        sviElementi.push(element);
    }

    clock.appendChild(wrapper);

    function ukljuci(element){
        element.classList.remove('ugasen');
    }
   
    function postaviVrijeme (broj){
       for(var i = 0; i<sviElementi.length; i++){
       sviElementi[i].classList.add('ugasen')
        }
        switch(broj){
            case 0: 
                ukljuci (sviElementi[0]);
                ukljuci (sviElementi[1]);
                ukljuci (sviElementi[2]);
                ukljuci (sviElementi[4]);
                ukljuci (sviElementi[5]);
                ukljuci (sviElementi[6]);
            break;
            case 1: 
                ukljuci (sviElementi[2]);
                ukljuci (sviElementi[5]);
            break;
            case 2: 
                ukljuci (sviElementi[0]);
                ukljuci (sviElementi[2]);
                ukljuci (sviElementi[3]);
                ukljuci (sviElementi[4]);
                ukljuci (sviElementi[6]);
            break;
            case 3: 
                ukljuci (sviElementi[0]);
                ukljuci (sviElementi[2]);
                ukljuci (sviElementi[3]);
                ukljuci (sviElementi[5]);
                ukljuci (sviElementi[6]);
            break;
            case 4: 
                ukljuci (sviElementi[1]);
                ukljuci (sviElementi[2]);
                ukljuci (sviElementi[3]);
                ukljuci (sviElementi[5]);
            break;
            case 5: 
                ukljuci (sviElementi[0]);
                ukljuci (sviElementi[1]);
                ukljuci (sviElementi[3]);
                ukljuci (sviElementi[5]);
                ukljuci (sviElementi[6]);
            break;
            case 6: 
                ukljuci (sviElementi[0]);
                ukljuci (sviElementi[1]);
                ukljuci (sviElementi[3]);
                ukljuci (sviElementi[4]);
                ukljuci (sviElementi[5]);
                ukljuci (sviElementi[6]);
            break;
            case 7: 
                ukljuci (sviElementi[0]);
                ukljuci (sviElementi[2]);
                ukljuci (sviElementi[5]);
            break;
            case 8: 
                ukljuci (sviElementi[0]);
                ukljuci (sviElementi[1]);
                ukljuci (sviElementi[2]);
                ukljuci (sviElementi[3]);
                ukljuci (sviElementi[4]);
                ukljuci (sviElementi[5]);
                ukljuci (sviElementi[6]);
            break;
            case 9: 
                ukljuci (sviElementi[0]);
                ukljuci (sviElementi[1]);
                ukljuci (sviElementi[2]);
                ukljuci (sviElementi[3]);
                ukljuci (sviElementi[5]);
                ukljuci (sviElementi[6]);
            break;
        } 
    }

    return {
        setTime: postaviVrijeme
    }

   
}

var tackice = function(id){
    var clock = document.getElementById(id);
    var dvotacka = document.createElement('div');
    dvotacka.className = 'dvotacka';

    for (var i = 1; i<3; i++)
    {
        var tacka = document.createElement('div');
        tacka.className = 'tacka t' + i;
        dvotacka.appendChild(tacka);
    }
    clock.appendChild(dvotacka); 
}

var time = new Date ();

var hours = time.getHours().toString().split('');
var minutes = time.getMinutes().toString().split('');
var seconds = time.getSeconds().toString().split('');
var broj1 = nacrtajBrojcanik('clock');
broj1.setTime(+(hours[0]));
var broj2 = nacrtajBrojcanik('clock');
broj2.setTime(+(hours[1]));
var dvijeTacke1 = tackice('clock');
var broj3 = nacrtajBrojcanik('clock');
broj3.setTime(+(minutes[0]));
var broj4 = nacrtajBrojcanik('clock');
broj4.setTime(+(minutes[1]));
var dvijeTacke2 = tackice('clock');
var broj5 = nacrtajBrojcanik('clock');
var broj6 = nacrtajBrojcanik('clock');

setInterval(function(){
    var seconds = new Date().getSeconds().toString().split('');
    broj5.setTime(+(seconds[0]));
    broj6.setTime(+(seconds[1]));
}, 100);