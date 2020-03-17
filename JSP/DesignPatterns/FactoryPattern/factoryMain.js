const callfunction = require('./factoryBl');
try {
    let clgfactory = new callfunction.collegefactory();
    let college = [];
    college.push(clgfactory.create("RahulGowda", "Professor"));
    college.push(clgfactory.create("Navya", "Professor"));
    college.push(clgfactory.create("Ashwini", "Student"));
    college.push(clgfactory.create("Mamta", "Student"));
   
    for (let clg in college) {
        console.log(`Hi I am ${college[clg].name} And I am a ${college[clg].type}`);
    }
    
} catch (error) {
    throw error;
}