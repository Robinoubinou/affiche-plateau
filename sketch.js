//déclaratin des variables
let monImage;
let monImage2;
let son;

//classe Case
class Case {
  
//constructeur de la classe Case
 constructor(a, b, c, d) {
   
    this.x = a;
    this.y = b;
    this.couleur = c;
    this.largeur = 150;
    this.hauteur = 150;
    this.son = loadSound(d);
}
  
//fonction qui fait changer le son
changerSon() { 
 }
  
//fonction qui dessine la case
dessiner() {
  
  //couleur
  fill(this.couleur );
  
  //rectangle
  rect(this.x, this.y, this.largeur, this.hauteur);
  
  //cliquer sur une case pour faire un son
  if(mouseIsPressed){
    
    if(mouseX > this.x && mouseX < this.x + this.largeur && mouseY > this.y && mouseY < this.y + this.hauteur)
      
     //son
      this.son.play();
  }
 }
}

//déclaratin des variables
 let case1;
 let case2;
 let case3;
 let case4;
 let case5;
 let case6;
 let case7;
 let case8;
 let case9;

//met le son
function preload(){
son = loadSound('cheval.mp3');
}

function setup() {
  createCanvas(600, 850);
  //image de fond
  monImage2 = loadImage("plateau.png");
  noCursor()
  //image curseur
  monImage = loadImage("curseur.png");
  imageMode(CENTER);

  //emplacement des cases
  case1 = new Case(10, 10, color(0), 'puissance.mp3');
  case2 = new Case(440, 10, color(0), 'mikado.mp3');
  case3 = new Case(125, 250, color(0), 'echec.mp3');
  case4 = new Case(320, 250, color(0), 'monopoly.mp3');
  case5 = new Case(35, 425, color(0), 'cheval.mp3');
  case6 = new Case(425, 420, color(0), 'scrabble.mp3');
  case7 = new Case(240, 465, color(0), 'poker.mp3');
  case8 = new Case(10, 690, color(0), 'domino.mp3');
  case9 = new Case(440, 690, color(0), 'navale.mp3');
  
}

function draw() {
  background(255);
  
  noStroke();
  
  //dessins des cases
  case1.dessiner();
  case2.dessiner();
  case3.dessiner();
  case4.dessiner();
  case5.dessiner();
  case6.dessiner();
  case7.dessiner();
  case8.dessiner();
  case9.dessiner();

  //image de fond
  image(monImage2, 300, 425);
  
  //image curseur, taille
  image(monImage, mouseX, mouseY);
  monImage.resize(70, 70);
  
}
//fonction quand on clique sur la souris
function mousePressed() {
  
}

