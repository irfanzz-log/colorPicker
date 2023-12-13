
const warnaMerah = document.querySelector('.setcolor1 input[name=warnaM]');
const warnaHijau = document.querySelector('.setcolor1 input[name=warnaH]');
const warnaBiru = document.querySelector('.setcolor1 input[name=warnaB]');

const hasilWarna = document.querySelector('.hasilWarna');
const judulwarna = document.querySelector('.setcolor1 h1');
const kodeW = document.querySelector('.setcolor1 p');


warnaMerah.addEventListener('input', function(){
    const m = warnaMerah.value;
    const h = warnaHijau.value;
    const b = warnaBiru.value;


    judulwarna.style.color = 'rgb('+ m +', '+ h +','+ b +')';
    hasilWarna.style.backgroundColor = 'rgb('+ m +', '+ h +','+ b +')';
    document.querySelector('.inputkode .r').innerHTML = m;
    kodeW.style.color = 'rgb('+ m +', '+ h +','+ b +')';
});
warnaHijau.addEventListener('input', function(){
    const m = warnaMerah.value;
    const h = warnaHijau.value;
    const b = warnaBiru.value;

    judulwarna.style.color = 'rgb('+ m +', '+ h +','+ b +')';
    hasilWarna.style.backgroundColor = 'rgb('+ m +', '+ h +','+ b +')';
    document.querySelector('.inputkode .g').innerHTML = h;
    kodeW.style.color = 'rgb('+ m +', '+ h +','+ b +')';

});
warnaBiru.addEventListener('input', function(){
    const m = warnaMerah.value;
    const h = warnaHijau.value;
    const b = warnaBiru.value;

    judulwarna.style.color = 'rgb('+ m +', '+ h +','+ b +')';
    hasilWarna.style.backgroundColor = 'rgb('+ m +', '+ h +','+ b +')';
    document.querySelector('.inputkode .b').innerHTML = b;
    kodeW.style.color = 'rgb('+ m +', '+ h +','+ b +')';

});

const warnaMerah2 = document.querySelector('.setcolor2 input[name=warnaM]');
const warnaHijau2 = document.querySelector('.setcolor2 input[name=warnaH]');
const warnaBiru2 = document.querySelector('.setcolor2 input[name=warnaB]');

const hasilWarna2 = document.querySelector('.header');
const setcolor1 = document.querySelector('.setcolor1');
const setcolor2 = document.querySelector('.setcolor2');
const judulwarna2 = document.querySelector('.setcolor2 h1');


warnaMerah2.addEventListener('input', function(){
    const m = warnaMerah2.value;
    const h = warnaHijau2.value;
    const b = warnaBiru2.value;

    hasilWarna2.style.backgroundColor = 'rgb('+ m +', '+ h +','+ b +')';
    setcolor1.style.borderColor = 'rgb('+ m +', '+ h +','+ b +')';
    setcolor2.style.borderColor = 'rgb('+ m +', '+ h +','+ b +')';
    judulwarna2.style.color = 'rgb('+ m +', '+ h +','+ b +')';

    });
warnaHijau2.addEventListener('input', function(){
    const m = warnaMerah2.value;
    const h = warnaHijau2.value;
    const b = warnaBiru2.value;

    hasilWarna2.style.backgroundColor = 'rgb('+ m +', '+ h +','+ b +')';
    setcolor1.style.borderColor = 'rgb('+ m +', '+ h +','+ b +')';
    setcolor2.style.borderColor = 'rgb('+ m +', '+ h +','+ b +')';
    judulwarna2.style.color = 'rgb('+ m +', '+ h +','+ b +')';
    });
    
warnaBiru2.addEventListener('input', function(){
    const m = warnaMerah2.value;
    const h = warnaHijau2.value;
    const b = warnaBiru2.value;

    hasilWarna2.style.backgroundColor = 'rgb('+ m +', '+ h +','+ b +')';
    setcolor1.style.borderColor = 'rgb('+ m +', '+ h +','+ b +')';
    setcolor2.style.borderColor = 'rgb('+ m +', '+ h +','+ b +')';
    judulwarna2.style.color = 'rgb('+ m +', '+ h +','+ b +')';
    

});