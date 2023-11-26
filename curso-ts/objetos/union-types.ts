(() => {
  type heroe = {
    name: string;
    age: number;
    powers: number[];
    getName?: () => string;
  }

  let customVariable: (string | number | heroe) = 'Fernando';
  console.log(typeof customVariable);   

  customVariable = 20;
  console.log(typeof customVariable)

  customVariable = {
    name: 'Kick Buttowski',
    age: 15,
    powers: [0]
  }

  console.log(typeof customVariable)


type coche = {
  carroceria: string,
  modelo: string,
  antibalas: boolean,
  pasajeros: number,
  disparar?: () => void
}

// Objetos
const batimovil: coche = {
  carroceria: "Negra",
  modelo: "6x6",
  antibalas: true,
  pasajeros:4
};

const bumblebee: coche = {
  carroceria: "Amarillo con negro",
  modelo: "4x2",
  antibalas: true,
  pasajeros:4,
  disparar () { 
    console.log("Disparando");
  }
};

// Villanos debe de ser un arreglo de objetos personalizados

type villians = {
  nombre: string,
  edad: (number | undefined),
  mutante: boolean
}

const villanos: villians[] = [{
  nombre:"Lex Luthor",
  edad: 54,
  mutante:false
},{
  nombre: "Erik Magnus Lehnsherr",
  edad: 49,
  mutante: true
},{
  nombre: "James Logan",
  edad: undefined,
  mutante: true
}];

// Multiples tipos
// cree dos tipos, uno para charles y otro para apocalipsis

type hero = {
  poder: string,
  estatura: number
}

type villanoXmen = {
  lider: boolean,
  miembros: string[]
}

const charles: hero = {
  poder:"psiquico",
  estatura: 1.78
};

const apocalipsis: villanoXmen = {
  lider:true,
  miembros: ["Magneto","Tormenta","Psylocke","Angel"]
}

// Mystique, debe poder ser cualquiera de esos dos mutantes (charles o apocalipsis)
let mystique: (hero | villanoXmen);
mystique = charles;
mystique = apocalipsis;

  
})();
