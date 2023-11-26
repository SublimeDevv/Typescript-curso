(() =>{
    class Apocalipsis {
        static instance: Apocalipsis;
        private constructor(public nombre: string) {
            
        }

        static callApocalipsis (): Apocalipsis {
            if (!Apocalipsis.instance) {
                Apocalipsis.instance = new Apocalipsis('Soy Apocalipsis');
            }
            return Apocalipsis.instance;
        }

        changeName (value: string):void {
            this.nombre = value
        }
    }


    const apocalipsis1 = Apocalipsis.callApocalipsis();
    // apocalipsis1.changeName('Hola')
    // const apocalipsis2 = new Apocalipsis('Soy apocalipsis... el único');
    // const apocalipsis3 = new Apocalipsis('Soy apocalipsis... el único');

    // console.log(apocalipsis1)
})()