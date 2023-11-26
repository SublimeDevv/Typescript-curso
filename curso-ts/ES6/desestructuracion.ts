(() => {

    type Avengers = {
        nick: string;
        ironman: string;
        captainAmerica: string;
        activos: boolean;
        poder: number; 
    }

    const avengers: Avengers = {
        nick: 'Samuel L. Jackson',
        ironman: 'Robert Downey Jr',
        captainAmerica: 'Chris Evans',
        activos: true,
        poder: 1500
        
    }

    const { nick, poder } = avengers;
    //console.log(nick.toUpperCase(), poder.toFixed(2))

    const printAvenger = ({ironman, ...rest}:Avengers) => {
        console.log(ironman, rest);
    }

    //printAvenger(avengers)

    const arrAvengers: string[] = ['Capitan America', 'Iron Man'];
    const [capi, ...rest] = arrAvengers;
    //console.log(capi, rest)



})()