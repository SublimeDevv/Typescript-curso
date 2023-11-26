(() =>{
    class Avenger {
        constructor(name, power) {
            this.name = name;
            this.power = power;
        }
    }

    class FlyingAvenger extends Avenger {
        constructor(name, power) {
            super(name, power)
            this.flying = true
        }
    }

    const falcon = new FlyingAvenger('Falcon', 550);
    console.log(falcon.name)

    const hulk = new Avenger('Hulk', 90000);
    console.log(hulk)
})()