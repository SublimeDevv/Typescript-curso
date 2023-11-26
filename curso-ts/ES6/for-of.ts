(() => {
    type Avenger = {
        nombre: string,
        weapon: string
    }

    const ironman: Avenger = {
        nombre: 'Tony Stark',
        weapon: 'Armour Suit'
    }

    const hulk: Avenger = {
        nombre: 'Hulk',
        weapon: 'Smash'
    }

    const thor: Avenger = {
        nombre: 'Thor',
        weapon: 'Mjolnir'
    }

    const avengers: Avenger[] = [ironman, hulk, thor];

    for (const avenger of avengers) {
        console.log(avenger.nombre, avenger.weapon)
    }

})()