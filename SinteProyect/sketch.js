let wave;
let wave2;
let wave3;
let playing = false;
let cvn;
const w = innerWidth - 100;
const h = innerHeight - 150;

function setup() {

    cnv = createCanvas(w, h);
    cnv.mousePressed(toggle);
    //--------OSCILADORES------------------
   
    
    
}
function toggle() {

   

    //-------DELAY--------------------------
    delay = new p5.Delay();
    delay2 = new p5.Delay();

    if (!playing) {
       
        wave = new p5.Oscillator();
        wave2 = new p5.Oscillator();
    
    
    
        //--------OSC1-SETUP--------------------
        wave.setType('sawtooth');
        wave.start();
        wave.freq(440);
        wave.amp(0);
       
        //--------OSC2-SETUP--------------------
        wave2.setType('sawtooth');
        wave2.start();
        wave2.freq(440);
        wave2.amp(0);
        
        wave.amp(0.5, 1);
        wave2.amp(0.4, 1);
        playing = true;

    } else {

        wave.amp(0, 1);
        wave2.amp(0, 1);
        playing = false;

    }
}


function draw() {



    if (playing) {

        playOSC();
        circulos();
        background(255, 255, 153, 10);

    } else {
        background(255, 153, 153, 10);
    }

}

function circulos() {

    stroke(255);
    strokeWeight(2);
    noFill();
    arc(w / 2, h / 2, mouseX, mouseX, 0, HALF_PI);
    arc(w / 2, h / 2, mouseX + 10, mouseX + 10, HALF_PI, PI);
    arc(w / 2, h / 2, mouseX + 20, mouseX + 20, PI, PI + QUARTER_PI);
    arc(w / 2, h / 2, mouseX + 30, mouseX + 30, PI + QUARTER_PI, TWO_PI);
    arc(w / 2, h / 2, mouseY - 10, mouseY - 10, 0, HALF_PI);
    arc(w / 2, h / 2, mouseY - 20, mouseY - 20, HALF_PI, PI);
    arc(w / 2, h / 2, mouseY - 30, mouseY - 30, PI, PI + QUARTER_PI);
    arc(w / 2, h / 2, mouseY - 40, mouseY - 40, PI + QUARTER_PI, TWO_PI);

}

function playOSC() {

    wave.freq(mouseX / 2);
    wave2.freq(mouseY);

    delay.process(wave, 0.12, .7, 2300);
    delay2.process(wave2, 0.30, .5, 5000);

}

