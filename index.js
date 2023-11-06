function distanceFromHqInBlocks(pickup) {
    const hq = 42
    const distance = Math.abs(pickup -hq);
    return distance;
};

function distanceFromHqInFeet(pickup) {
    const blocks = distanceFromHqInBlocks(pickup);
    const feet = 264;
    const distance = blocks * feet
    return distance;
};

function distanceTravelledInFeet(start, destination) {
    const distance = Math.abs(destination - start);
    const feet = 264;
    const distanceInFeet = distance * feet;
    return distanceInFeet;
}

function calculatesFarePrice(start, destination) {
    const distanceTravelled = distanceTravelledInFeet(start, destination);
    if (distanceTravelled <= 400) {
        return 0
    } else if (distanceTravelled > 400 && distanceTravelled < 2000) {
        return 2.56
    } else if (distanceTravelled > 2000 && distanceTravelled < 2500) {
        return 25
    } else (distanceTravelled > 2500)
        return 'cannot travel that far'
};