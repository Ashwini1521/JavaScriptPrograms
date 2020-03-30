module.exports = {
    // Find And Print the windchill temperature
    findWindChill: () => {
        let t=10;
        let v=15;
        console.log(35.74 + 0.6215 * t + (0.4275 * t - 35.75) * Math.pow(v, 0.16));
    }
}