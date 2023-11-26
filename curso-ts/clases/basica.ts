(() => {
    class Avenger {

        static avgAge = 35;

        static getAvgAge () {
            return this.name;
        }

        constructor(
            private nombre: string,
            private team: string, 
            public realName?: string)
        {}

        public bio () {
            return `${this.nombre} (${this.team})`
        }
    }

    const antMan: Avenger = new Avenger('Ant Man', 'Capitan America', 'Scott Lang');
    //console.log(Avenger.getAvgAge());


})()