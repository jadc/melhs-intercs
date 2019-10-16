// Line Analyzer

// Add Event Listener
document.getElementById('analyze').addEventListener('click', analyzeLine);

// Event Function
function analyzeLine() {
    // Get Inputted Point Data (pt1x, pt1y) and (pt2x, pt2y)
    let pt1x = Number(document.getElementById('pt1x').value);
    let pt1y = Number(document.getElementById('pt1y').value);
    let pt2x = Number(document.getElementById('pt2x').value);
    let pt2y = Number(document.getElementById('pt2y').value);

    // Call Analyze Functions and Display results
    document.getElementById('length').innerHTML = getLength(pt1x, pt1y, pt2x, pt2y);
    document.getElementById('slope').innerHTML = getSlope(pt1x, pt1y, pt2x, pt2y);
    document.getElementById('description').innerHTML = getDescription(pt1x, pt1y, pt2x, pt2y);
    document.getElementById('location-1').innerHTML = getPointLocation(pt1x, pt1y);
    document.getElementById('location-2').innerHTML = getPointLocation(pt2x, pt2y);
    document.getElementById('equation').innerHTML = getEquation(pt1x, pt1y, pt2x, pt2y);
}

// Line Analyzer Functions (Write your solutions here... getLength is done for you)

function getLength(x1, y1, x2, y2) {
    // Use pythagorean theorem to determine length from (x1, y1) to (x2, y2)
    let rise = y2 - y1;
    let run = x2 - x1;
    return (rise ** 2 + run ** 2) ** 0.5
}

function getSlope(x1, y1, x2, y2){
    let rise = y2 - y1;
    let run = x2 - x1;
    if(run == 0) return undefined;
    return (rise / run);
}

function getDescription(x1, y1, x2, y2){
    let slope = getSlope(x1, y1, x2, y2);
    if(slope > 0) return "increasing";
    if(slope < 0) return "decreasing";
    if(slope == 0) return "horizontal";
    if(slope == undefined) return "vertical";
}

function getPointLocation(x, y){
    if(x == 0 && y == 0) return "origin";
    if(x == 0) return "y-axis";
    if(y == 0) return "x-axis";
    if(x > 0 && y > 0) return "quadrant 1";
    if(x < 0 && y > 0) return "quadrant 2";
    if(x < 0 && y < 0) return "quadrant 3";
    if(x > 0 && y < 0) return "quadrant 4";
}

function getEquation(x1, y1, x2, y2){
    let m = getSlope(x1, y1, x2, y2);
    let b = y1 - m * x1;

    // Horizontal Lines
    if(m == 0) return `y = ${y1}`;
    // Vertical Lines
    if(m == undefined) return `x = ${x1}`;

    // Normal Slopes
    /*
    Utilizes ternary operators to make 
    the code unreadable-- I mean to hide unnecessary
    numbers such as slope when it equals 1 or the y intercept when its 0
    */
    return "y = "
     + ((m != 1) ? m : "") + "x"
     + ((b != 0) ? (b > 0 ? " + " : " - ") : "")
     + ((b != 0) ? " " + Math.abs(b) : "")
}