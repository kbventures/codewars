//PREP
//
//Parameters scales object contains an internally stored array of 8 elements(index 0 to 7) each having the same value except one
// which is greater.
// It also has a public method getWeight() which take two array of indexes and retursn -1, 0 or 1 based on acumulation of values 
// found at the idexes passed are heavier, equal or lighter
//
// getWeight returns -1 if left pan is heavier, 1 if right pan is heavier and 0 if the pans weight the same

function findBall(scales) {
    // call scales.getWeight() max 4 times
    // return indexOfHeavyBall;
    // YOu can only loop 4 times before it breaks
    // Compare the last one with the first one and the iterate up for the first one and down for the last one. 
    // Since there are 8 balls it will find the heavier one before the balance breaks
    for (var i = 1; i < 8; i++) {
        var leftPan = [8 - i];
        var rightPan = [i - 1];
        console.log(leftPan)
        console.log(rightPan)
        var w = scales.getWeight(leftPan, rightPan);

        if (w === -1) {// left pan is heavier
            return leftPan[0];
        }

        if (w === 1) {// right pan is heavier
            return rightPan[0];
        }
    }
}

    // Example findball(1,1,1,1,1,1,7) returns 7; 