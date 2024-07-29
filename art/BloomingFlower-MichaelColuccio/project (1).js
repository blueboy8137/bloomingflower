//Define an array of colors
const Lcolors = ['#ade3a8', '#abe2a6', '#87d680', '#a6e2bf', '#c9e2a6'];
const Fcolors = ['#dfa8e4', '#e0a9e5', '#d182d9', '#e5a9cc', '#c2a9e5'];


// Function to get a random color from the array
function getRandomLColor() {
    const randomIndex = Math.floor(Math.random() * Lcolors.length);
    return Lcolors[randomIndex];
}
function getRandomFColor() {
    const randomIndex = Math.floor(Math.random() * Fcolors.length);
    return Fcolors[randomIndex];
}
//@title: BloomingFlower
//@author: MichaelColuccio
//@snapshot: BloomingFlower
const width = 125;
const height = 125;

setDocDimensions(width, height);

const t = new bt.Turtle();
const leafSide = bt.randIntInRange(45,60);
const lowStemLength = bt.randIntInRange(50,60);
const highStemLength = bt.randIntInRange(15,30);
const leaf2 = bt.randIntInRange(1,2);
const leafSide2 = bt.randIntInRange(20,35);
const leaf3 = bt.randIntInRange(1,2);
const leaf4 = bt.randIntInRange(1,2);
// start pointing diagonally, and further within drawing area
t.left(81.85).jump([8, 8]);
t.forward(leafSide);
t.left(16.3);
t.forward(leafSide);
t.left(163.7);
t.forward(leafSide);
t.left(16.3);
t.forward(leafSide);
t.left(73.7);
t.forward(leafSide);
t.left(16.3);
t.forward(leafSide);
t.left(163.7);
t.forward(leafSide);
t.left(16.3);
t.forward(leafSide);
t.left(180);
t.forward(1.333);
t.left(36.9);

if (leaf2==1){
t.left(8).jump([8, 8]);
t.forward(leafSide2);
t.left(16.3);
t.forward(leafSide2);
t.left(163.7);
t.forward(leafSide2);
t.left(16.3);
t.forward(leafSide2);
}
if ((leaf3==1) && (leaf2==2)){
t.right(35)
t.forward(leafSide2);
t.left(16.3);
t.forward(leafSide2);
t.left(163.7);
t.forward(leafSide2);
t.left(16.3);
t.forward(leafSide2);
}
if ((leaf3==1) && (leaf2==1)){
t.left(120)
t.forward(leafSide2);
t.left(16.3);
t.forward(leafSide2);
t.left(163.7);
t.forward(leafSide2);
t.left(16.3);
t.forward(leafSide2);
}
const d = new bt.Turtle();
d.left(44.2).jump([9.13, 8.16]);
d.forward(lowStemLength);
d.right(90);
d.forward(29.2);
d.left(169.2);
d.forward(15.566);
d.right(135.8);
d.forward(15.566);
d.left(158.3);
d.forward(15.566);
d.right(135.8);
d.forward(15.566);
d.left(158.3);
d.forward(15.566);
d.right(135.8);
d.forward(15.566);
d.left(158.3);
d.forward(15.566);
d.right(135.8);
d.forward(15.566);
d.left(158.3);
d.forward(15.566);
d.right(135.8);
d.forward(15.566);
d.left(158.3);
d.forward(15.566);
d.right(135.8);
d.forward(15.566);
d.left(158.3);
d.forward(15.566);
d.right(135.8);
d.forward(15.566);
d.left(158.3);
d.forward(15.566);
d.right(135.8);
d.forward(15.566);
d.left(169.2);
d.forward(30.8);
d.left(180);
d.forward(1.6);
d.left(90);
d.forward(lowStemLength);
d.left(180);
d.forward(lowStemLength);
d.up();
d.forward(25.821);
d.down();
const m = new bt.Turtle();
if (leaf4==1){
m.left(43.69).jump([65.3, 65.0]);
m.forward(highStemLength);
m.right(135);
m.forward(1.131);
m.left(90);
m.forward(1.131);
m.right(135);
m.forward(highStemLength);
m.right(180);
m.forward(highStemLength);
m.right(45);
m.forward(28.869);
m.left(169.2);
m.forward(15.566);
m.right(135.8);
m.forward(15.566);
m.left(158.3);
m.forward(15.566);
//
m.right(135.8);
m.forward(15.566);
m.left(158.3);
m.right(135.8);
m.forward(15.566);
m.left(158.3);
m.forward(15.566);
m.right(135.8);
m.forward(15.566);
m.left(169.2);
m.forward(30);
}
if (leaf4==2){
  m.left(43.69).jump([65.3, 65.0]);
m.forward(highStemLength);
m.right(135);
m.forward(1.131);
m.left(90);
m.forward(1.131);
m.right(135);
m.forward(highStemLength);
m.right(180);
m.forward(highStemLength);
m.right(45);
m.forward(28.869);
m.left(169.2);
m.forward(15.566);
m.right(135.8);
m.forward(15.566);
m.left(158.3);
m.forward(15.566);
m.right(135.8);
m.forward(15.566);
m.left(158.3);
m.forward(15.566);
m.right(135.8);
m.forward(15.566);
m.left(158.3);
m.forward(15.566);
m.right(135.8);
m.forward(15.566);
m.left(169.2);
m.forward(30);

}
const upperStemLines = t.lines();

drawLines(upperStemLines, { fill: getRandomLColor() });
const stem = m.lines();

drawLines(stem, { fill: getRandomFColor() });
const flower = d.lines();

drawLines(flower, { fill: getRandomFColor() });
drawLines(t.lines());
drawLines(m.lines());
drawLines(d.lines());
