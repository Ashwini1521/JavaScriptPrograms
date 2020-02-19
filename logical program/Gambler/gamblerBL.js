module.exports = {
    gambling: (stake, goal, Nooftrails) => {
        var playCount = 0;
        var win = 0;
        while ((stake > 0 || stake < goal) && Nooftrails > 0) {
            var rand = Math.random();
            console.log(rand);
            if (rand > 0.5) {
                win++;
                stake++;
            }
            else {
                stake--;
            }
            console.log("current amount is: " + stake);
            Nooftrails--;
            playCount++;
        }
        console.log("no. of time played: " + playCount);
        console.log("percentage of win: " + (win / playCount * 100) + "%");
    }
}