(() => {
    const addNumbers = (a: number, b: number) => a + b;
    const greet = (name: string) => 'Hola '+ name;
    const saveWorld = () => 'El mundo está salvado';

    // let myFunction: (y: number, z: number) => number;
    let myFunction: (y: number, z: number) => number;

    myFunction = addNumbers;
    console.log(myFunction(2, 1));

    /*myFunction = greet;
    console.log(myFunction('Joselu'));*/

    /*myFunction = saveWorld;
    console.log(myFunction());*/
})()