(() => {
    interface Xmen {
        name: string,
        realName: string,
        power(id: number):string;
    }

    interface Human {
        age: number;    
    }

    interface Xmen {
        name: string;
        realName: string;
        power(id: number): string;
    }
    
    interface Human {
        age: number;    
    }
    
    class Mutant implements Xmen, Human {
        constructor(
            public name: string,
            public realName: string,
            public age: number
        ) {}
    
        power(id: number): string {
            return 'Shazaam';
        }
    }
    
})()