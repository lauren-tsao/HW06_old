let data = [];

function preload() {
  data = loadTable("mushroom_2000.csv", "csv", "header");
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  background(248, 237, 237);

  angleMode(DEGREES);

  //mushrooms
  for (let idx = 0; idx < data.getRowCount(); idx++) {
    let x = map(
      idx,
      0,
      data.getRowCount() - 1,
      width / 3.9,
      width - width / 25
    );
    let capColor = data.getString(idx, "cap-color");
    let stemHeight = data.getNum(idx, "stem-height");
    let stemWidth = data.getNum(idx, "stem-width");
    let capDiameter = data.getNum(idx, "cap-diameter");
    let bruiseOrbleed = data.getString(idx, "does-bruise-or-bleed")
    let h = map(stemHeight, 0, 20, 0, height - height / 10);
    let thicc = map(stemWidth, 10, 20, 0, 1);
    let d = map(capDiameter, 0, 20, 0, height);


    push();
    noFill();
    if (capColor.includes("o")) {
      stroke(128, 136, 54);
    } else if (capColor.includes("e")) {
      stroke(255, 191, 0);
    }  else if (capColor.includes("n")) {
      stroke(255, 130, 37);
    } else if (capColor.includes("g")) {
      stroke(255, 154, 0);
    } else if (capColor.includes("r")) {
      stroke(209, 3, 99);
    }

    arc(width / 4, height / 2, d, d, 90, 270);
    pop();

    push()
    noFill();
    strokeWeight(thicc);
    if (bruiseOrbleed.includes("f")) {
      stroke(82, 34, 88);
    } else if (bruiseOrbleed.includes("t")) {
      stroke(200, 0 ,54);
    }
    line(x, height / 5, x, h);
    pop()
  }
}
function draw() {}