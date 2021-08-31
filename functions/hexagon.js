const side = Number(prompt("Enter the side of hexagon"))

function areaOfHexagon() {
    let area = ((3 * Math.sqrt(3))*(side*side)/2).toFixed(3);
    return area
}

areaOfHexagon()