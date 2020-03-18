const callfunction = require("./observerBl");
try {
    let main = () => {
        let observer = new callfunction.subject();
        observer.subscribe("observer 1");
        observer.subscribe("observer 2");
        observer.notifyAll("observer 2");
    };
    main();
} catch (error) {
    throw error;
}