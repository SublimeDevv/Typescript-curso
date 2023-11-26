(() => {
    const heroe: [string, number, boolean] = ['Dr. Strange', 100, false];
    heroe[0] = 'Pedro';
    heroe[1] = 50;
    heroe.push("Hola");
    heroe.forEach(x => {
        console.log(x)
    })
})()