module.exports = {
    /**
     * Find And Print quadratic.
     * @param {a, b, c} Numbers - it take array as integer.
     * return distance.
     */
    findQuadratic: (a, b, c) => {
        let root1, root2;
        let determinant = b * b - 4 * a * c;
        if (determinant > 0) {
            root1 = (-b + Math.sqrt(determinant)) / (2 * a);
            root2 = (-b - Math.sqrt(determinant)) / (2 * a);
            console.log(`root1 = ${root1} and root2 = ${root2}.`);
        } else if (determinant == 0) {
            root1 = root2 = -b / (2 * a);
            console.log(`root1 = root2 = ${root1}`);
        }else {
            let realPart = -b / (2 * a);
            let imaginaryPart = Math.sqrt(-determinant) / (2 * a);
            console.log(`root1 = ${realPart} + ${imaginaryPart} and root2 = ${realPart}-${imaginaryPart}`);
        }
    }
}