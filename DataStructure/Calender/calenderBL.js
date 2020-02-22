module.exports = {
    calendar: (month, year) => {
        let array = [[]];
        for (var i = 0; i < 7; i++) {
            array[i] = [[]];
        }
        var months = [
            "",
            "January", "February", "March", 
            "April", "May", "June",
            "July", "August", "September",
            "October", "November", "December"
        ]
        let dayname = ['sun', 'mon', 'tues', 'wed', 'thu', 'fri', 'sat'];
        var days = [
            0, 31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31
        ]

        if (month == 2 && module.exports.isLeapYear(year)) {
            days[month] = 29;
        }
        console.log(" " + months[month] + " " + year);
        //for days of the week
        let k = 0;
        for (let i = 0; i < 7; i++) {
            for (let j = 0; j < 1; j++) {
                array[j][i] = dayname[k];
                k++;
            }
        }
        // for printing weeks of the day
        for (let i = 0; i < 7; i++) {
            for (let j = 0; j < 1; j++) {
                process.stdout.write(array[j][i] + '\t');
            }
        }
        process.stdout.write('\n');
        let d = module.exports.day(month, 1, year);
        let jj = 1;
        let ii = 0;
        let count = 1;
        for (let i = 0; i < d; i++) {
            array[jj][ii] = null;
            process.stdout.write('\t');
            ii++;
        }
        for (let i = 1; i <= days[month]; i++) {
            array[jj][ii] = i;
            process.stdout.write(array[jj][ii] + '\t');
            ii++;
            if ((parseInt((i + d) % 7) == 0) || (i == days[month])) {
                process.stdout.write('\n');
                jj++;
                ii = 0;
                count++;
                console.log();
            }
        }

    },
    isLeapYear: (year) => {
        if ((year % 4 == 0) && (year % 100 != 0)) {
            return true;
        }
        if (year % 400 == 0) {
            return true;
        }
        return false;
    },
    day: (month, day, year) => {
        let y = year - Math.floor((14 - month) / 12);
        let x = y + Math.floor(y / 4) - Math.floor(y / 100) + Math.floor(y / 400);
        let m = month % 13 + 12 * Math.floor(((14 - month) / 12)) - 2;
        let d = (1 + x + Math.floor((31 * m) / 12)) % 7;
        return d;
    }


}