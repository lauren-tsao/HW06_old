let data = [];

function preload() {
  data = loadTable("mushroom.csv", "csv", "header");
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  background(233, 238, 217);

  angleMode(DEGREES);

  //mushrooms
  for (let idx = 0; idx < data.getRowCount(); idx++) {
    let x = map(idx, 0, data.getRowCount() - 1, 0, width);
    let capColor = data.getString(idx, "cap-color");
    let stemHeight = data.getNum(idx, "stem-height");
    let stemWidth = data.getNum(idx, "stem-width");
    let capDiameter = data.getNum(idx, "cap-diameter");
    let h = map(stemHeight, 0, 20, 0, height - height / 10);
    let thicc = map(stemWidth, 0, 20, 0, 5);
    let d = map(capDiameter, 0, 200, 0, height);
    stroke(84, 71, 63);
    strokeWeight(thicc);
    line(x, height - height / 9, x, h);
    noStroke();
    arc(x, h, d, d - 10, -180, 0, CHORD);

    if (capColor.includes("o")) {
      fill(154, 126, 111);
    } else if (capColor.includes("e")) {
      fill(214, 192, 179);
    }
  }

  //grass
  for (let xGrass = 0; xGrass < width; xGrass += 3) {
    let lightG = color(140, 160, 72);
    let darkG = color(121, 134, 69);
    let strokeColor = random([lightG, darkG]);
    let grassHeight = random(height - height / 9, height - height / 8);
    stroke(strokeColor);
    strokeWeight(3);
    line(xGrass, height - height / 9, xGrass, grassHeight);
  }

  //ground
  fill(84, 71, 63);
  noStroke();
  rect(0, height - height / 9, width, height - height / 9);
}

function draw() {}