(() => {
    class Avenger {
        constructor(public name: string, public realName: string) {
            console.log('Constructor Avenger llamado.')
        }

        protected getFullName () {
            return `${this.name} ${this.realName}`;
        }
    }

    class Xmen extends Avenger {
        constructor(name: string, realName: string, public isMutant: boolean) {
            super(name, realName);
        }

        get fullName () {
            return `${this.name} ${this.realName}`
        }

        set fullName (value: string) {
            if (value.length < 3) throw new Error('Debe ser mayor a 3 caracteres.');
            this.name = value;
        }

        getFullNameDesdeXmen () {
            console.log(super.getFullName());
        }
    }

    //const wolverine = new Xmen('Wolverine', 'Logan', true);
    //wolverine.fullName = 'Logansito'
   // console.log(wolverine.fullName)

})()