

    const callfunction = require('./2pastackBL');
    try {
        let stack = callfunction.getAnagram();
        while (!stack.isEmpty()) {
            console.log(stack.pop());
        }
    }
    catch (err) {
        console.log(err);
    }