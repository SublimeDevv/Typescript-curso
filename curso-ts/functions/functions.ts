(() => {
    const hero: string = 'Flash';
    function returnName():string {
        return hero;
    }

    const activateBatiSignal = () => {
        return 'Bati señal activada';
    }
    console.log(typeof activateBatiSignal);

    const heroName = returnName();
    console.log(heroName)
})()