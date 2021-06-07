
var tulButton = document.querySelector('#tul-button');
var fonButton = document.querySelector('#fon-button');
var guneslikButton = document.querySelector('#guneslik-button');
var storButton = document.querySelector('#stor-button');
var equalButton = document.querySelector('#equal-button');
const perdeler = document.getElementById('perdeler');
const results = document.getElementById('results');
const bosluk = document.getElementById('bosluk');
var perdeSonuc = document.getElementById('perdeSonuc');
var divCard;
var divCardHeader;
var divCardBody;
var labelEn;
var labelBirimFiyat;
var birimFiyat;
let totalPrice = 0;
var i = document.getElementById('i');

var val = 0, count = 0;

function createOption(perde, list) {
    const option = document.createElement('option');
    option.appendChild(document.createTextNode(perde));
    list.appendChild(option);
}

function createCard() {
    divCard = document.createElement('div');
    divCard.className = 'card';
    divCard.setAttribute('onclick', 'myFunction(event)');
    divCard.setAttribute('style', 'background: rgb(242, 246, 253)');

    divCardHeader = document.createElement('div');
    divCardHeader.className = 'card-header';
    divCard.appendChild(divCardHeader);

    divCardBody = document.createElement('div');
    divCardBody.className = 'card-body';
    divCard.appendChild(divCardBody);
}

function CreatePerdeAdi(name) {
    labelAd = document.createElement('label');
    labelAd.setAttribute('for', 'en');
    labelAd.setAttribute('style', 'margin-top: 12px');
    labelAd.appendChild(document.createTextNode(name));
    divCardHeader.appendChild(labelAd);

    var i = document.createElement('i');
    i.appendChild(document.createTextNode('x'));
    i.className = 'float-right cclose';
    i.id = name;
    //i.setAttribute('onclick', 'cancelButton(e)');
    i.setAttribute('style', 'font-size: 2rem;');
    divCardHeader.appendChild(i);
    
}

function createLabelEn() {
    labelEn = document.createElement('label');
    labelEn.setAttribute('for', 'en');
    labelEn.setAttribute('id', 'labelEn');
    labelEn.appendChild(document.createTextNode('En: (cm)'));
    divCardBody.appendChild(labelEn);
}

function createEnInput(name, type) {

    var en = document.createElement('input');
    en.setAttribute('type', type);
    en.setAttribute('name', name);
    en.setAttribute('id', 'en'+val);
    en.className = 'form-control';
    divCardBody.appendChild(en);
    
}

function createBoyInput() {
    var labelBoy = document.createElement('label');
    labelBoy.setAttribute('for', 'boy');
    labelBoy.appendChild(document.createTextNode('Boy: (cm)'));
    divCardBody.appendChild(labelBoy);

    var boy = document.createElement('input');
    boy.setAttribute('type', 'number');
    boy.setAttribute('value', 200);
    boy.setAttribute('id', 'boy'+val);
    boy.className = 'form-control';
    divCardBody.appendChild(boy);
}

function createLabelBirimFiyat() {
    labelBirimFiyat = document.createElement('label');
    labelBirimFiyat.setAttribute('for', 'birimFiyat');
    labelBirimFiyat.appendChild(document.createTextNode('m / m² Fiyatı: '));
    divCardBody.appendChild(labelBirimFiyat);
}

function createBirimFiyat(type) {

    birimFiyat = document.createElement('input');
    birimFiyat.setAttribute('type', type);
    birimFiyat.setAttribute('id', 'birimFiyat'+val);
    birimFiyat.className = 'form-control';
    divCardBody.appendChild(birimFiyat);
    divCard.appendChild(divCardBody);
}

function fonCiftKanatFiyat() {
    labelKanatFiyat = document.createElement('label');
    labelKanatFiyat.setAttribute('for', 'birimFiyat');
    labelKanatFiyat.appendChild(document.createTextNode('2 kanat fiyatı: '));
    divCardBody.appendChild(labelKanatFiyat);
}

function createRadioButton() {
    const bosluk = document.createElement('div');
    bosluk.innerHTML = `<br>`;
    divCardBody.appendChild(bosluk);
    var labelDuz = document.createElement('label');
    labelDuz.setAttribute('style', 'margin-left: 4px');
    labelDuz.innerHTML = 'Düz ';
    var labelKruvaze = document.createElement('label');
    labelKruvaze.setAttribute('style', 'margin-left: 4px');
    labelKruvaze.innerHTML = 'Kruvaze ';
    var radioTul = document.createElement('input');
    radioTul.setAttribute('name', 'model'+val);
    radioTul.setAttribute('type', 'radio');
    radioTul.setAttribute('value', 'duz');
    var radioKruvaze = document.createElement('input');
    radioKruvaze.setAttribute('type', 'radio');
    radioKruvaze.setAttribute('name', 'model'+val);
    radioKruvaze.setAttribute('style', 'margin-left: 2rem');
    radioKruvaze.setAttribute('value', 'kruvaze');
    divCardBody.appendChild(radioTul);
    divCardBody.appendChild(labelDuz);
    divCardBody.appendChild(radioKruvaze);
    divCardBody.appendChild(labelKruvaze);
    divCardBody.appendChild(bosluk);
}

function myFunction(event) {
    var card = event.target.parentNode.parentNode;
    if (event.target.id == 'TÜL PERDE') {
        card.remove();
        val--;
    }
    if (event.target.id == 'FON PERDE') {
        card.remove();
        val--;
    }
    if (event.target.id == 'GÜNEŞLİK') {
        card.remove();
        val--;
    }
    if (event.target.id == 'STOR / ZEBRA PERDE') {
        card.remove();
        val--;
    }
        
}

tulButton.addEventListener('click', function(e){
    createCard();  
    CreatePerdeAdi('TÜL PERDE');
    createRadioButton();
    createLabelEn();
    createEnInput('tul', 'number');
    createLabelBirimFiyat();
    createBirimFiyat('number');

    const divBosluk = document.createElement('div');
    divBosluk.innerHTML = `<br> <br>`;

    perdeler.appendChild(divBosluk);
    perdeler.appendChild(divCard);

    val++;

    e.preventDefault();
});

fonButton.addEventListener('click', function(e){   
    createCard();
    CreatePerdeAdi('FON PERDE');
    createEnInput('fon', 'hidden');
    fonCiftKanatFiyat();
    createBirimFiyat('number');

    const divBosluk = document.createElement('div');
    divBosluk.innerHTML = `<br> <br>`;

    perdeler.appendChild(divBosluk);
    perdeler.appendChild(divCard);

    val++;

    e.preventDefault();
});

guneslikButton.addEventListener('click', function(e){
    createCard();
    CreatePerdeAdi('GÜNEŞLİK');
    createLabelEn();
    createEnInput('guneslik', 'number');
    createBirimFiyat('hidden');
    
    const divBosluk = document.createElement('div');
    divBosluk.innerHTML = `<br> <br>`;

    perdeler.appendChild(divBosluk);
    perdeler.appendChild(divCard);

    val++;

    e.preventDefault();
});

storButton.addEventListener('click', function(e){
    createCard();
    CreatePerdeAdi('STOR / ZEBRA PERDE');
    createLabelEn();
    createEnInput('stor', 'number');
    createBoyInput();
    createLabelBirimFiyat();
    createBirimFiyat('number');

    const divBosluk = document.createElement('div');
    divBosluk.innerHTML = `<br> <br>`;

    perdeler.appendChild(divBosluk);
    perdeler.appendChild(divCard);

    val++;

    e.preventDefault();
});

equalButton.addEventListener('click', function(e){
    var en, birimFiyat, boy, tulModelDizi, tulModel, tulFiyat = 0;;
    var bosluk1 = `<i style="margin-right: 9px;"> </i>`;
    var bosluk2 = `<i style="margin-right: 14px;"> </i>`;
    var bosluk3 = `<i style="margin-right: 27px;"> </i>`;
    perdeSonuc.innerHTML = ``;
    perdeSonuc.innerHTML += `<hr>`;

    for(var i=0; i<val; i++) {
        en = parseFloat(document.getElementById('en'+i).value);
        perdeCesit = (document.getElementById('en'+i).name);
        birimFiyat = parseFloat(document.getElementById('birimFiyat'+i).value);

        if(perdeCesit === '') {
            console.log('faaaaaalseeeeee');
        }
        if(perdeCesit === 'tul') {
            tulModelDizi = (document.getElementsByName('model'+i));
            
            for(var j=0; j<tulModelDizi.length; j++) {
                if(tulModelDizi[j].checked) {
                    tulModel = tulModelDizi[j].value;
                }
                if(tulModelDizi[j].checked==false) {
                    tulModel = 'duz';
                }
            }

            if(tulModel === 'duz') {
                tulFiyat = parseFloat(en/100 * 3 * birimFiyat);
                console.log(tulFiyat);
            }
            if(tulModel === 'kruvaze') {
                tulFiyat = parseFloat((en+50)/100 * 3 * birimFiyat + 50);
                console.log(tulFiyat);
            }
            
            if(en && birimFiyat){
                totalPrice += tulFiyat;
                perdeSonuc.innerHTML += i+1+') Tül Perde: '+bosluk2 + parseFloat(tulFiyat, '100').toFixed(2);
                perdeSonuc.innerHTML += `<br>`;
            } else {
                tulFiyat=0;
                perdeSonuc.innerHTML += i+1+') Tül Perde: '+bosluk2 + 'EKSİK BİLGİ VAR';
                perdeSonuc.innerHTML += `<br>`;
            }
            
        }
        if(perdeCesit === 'fon') {
            en = 1;
            if(!birimFiyat) {
                birimFiyat=0;
                perdeSonuc.innerHTML += i+1+') Fon Perde: '+bosluk3 + 'EKSİK BİLGİ VAR';
                perdeSonuc.innerHTML += `<br>`;
            }
            if(birimFiyat) {
                perdeSonuc.innerHTML += i+1+') Fon Perde:'+bosluk1 + parseFloat(en*birimFiyat, 100).toFixed(2);
                perdeSonuc.innerHTML += `<br>`;
                totalPrice += en * birimFiyat;
            }
            
        }
        if(perdeCesit === 'guneslik') {
            birimFiyat = 20;
            if(!en) {
                en=0;
                perdeSonuc.innerHTML += i+1+') Güneşlik: '+bosluk3 + 'EKSİK BİLGİ VAR';
                perdeSonuc.innerHTML += `<br>`;
            }
            if(en) {
                perdeSonuc.innerHTML += i+1+') Güneşlik: '+bosluk3 + en/100*birimFiyat;
                perdeSonuc.innerHTML += `<br>`;
                totalPrice += en/100 * birimFiyat;
            }
        }
        if(perdeCesit === 'stor') {
            boy = parseFloat(document.getElementById('boy'+i).value);

            if(en && boy && birimFiyat) {
                totalPrice += en/100 * boy/100 * birimFiyat;
                perdeSonuc.innerHTML += i+1+') Stor / Zebra: ' + parseFloat((en/100 * boy/100 * birimFiyat), '100').toFixed(2);
                perdeSonuc.innerHTML += `<br>`;
            } else {
                birimFiyat=0;
                perdeSonuc.innerHTML += i+1+') Stor / Zebra: ' + 'EKSİK BİLGİ VAR';
                perdeSonuc.innerHTML += `<br>`;
            }

        }

    }
    perdeSonuc.innerHTML += `<hr>`;
    console.log('TOPLAM FİYAT = ' + parseFloat(totalPrice, '100').toFixed(2));
    showResults();
    totalPrice = 0;

    e.preventDefault();
});

function showResults() {

var bosluk = `<i style="margin-right: 11px;"> </i>`;

var toplam = document.getElementById('toplam');    

var modal = document.getElementById("myModal");

var btn = document.getElementById("myBtn");

var span = document.getElementsByClassName("close")[0];

// When the user clicks the button, open the modal 
modal.style.display = "block";
toplam.innerHTML = 'TOPLAM = '+bosluk + parseFloat(totalPrice, '100').toFixed(2) + ' TL';
// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}

}
