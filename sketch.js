let xBolinha = 300;
let yBolinha = 200;
let diametro = 60;
let vxbolinha = 6;
let raio = diametro / 2;
let vyBolinha=6;

function setup() {
    createCanvas(600, 400);
}

function draw() {
    background(0);
    criarBolinha();
    movimentarBolinha();
}

    circle(xBolinha, yBolinha, diametro);


    xBolinha = xBolinha + vxbolinha;

    if (xBolinha + raio > width || xBolinha - raio < 0) {
        vxbolinha *= -1;
    }

    yBolinha = yBolinha + vyBolinha;

    if (yBolinha + raio > height || yBolinha - raio < 0) {
        vyBolinha *= -1;
    }

function criarBolinha(){
    circle(xBolinha,yBolinha,diametro)
}
function movimentarBolinha(){
    xBolinha=xBolinha+vxbolinha;

}
function bordaBolinha (){

     if (xBolinha + raio > width || xBolinha - raio < 0) {
        vxbolinha *= -1;
}


    

