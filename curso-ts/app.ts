// Cree una interfaz para validar el auto (el valor enviado por parametro)
interface Automovil {
  encender: boolean,
  velocidadMaxima: number,
  acelerar():void;
}

const batimovil: Automovil = {
  encender:false,
  velocidadMaxima:0,
  acelerar() {
    console.log("...... gogogo!!!");
  }
}

const conducirBatimovil = ( auto: Automovil ):void => {
  auto.encender = true;
  auto.velocidadMaxima = 100;
  auto.acelerar();
}

conducirBatimovil(batimovil)

// Cree una interfaz con que permita utilzar el siguiente objeto utilizando propiedades opcionales
interface Villian {
  reir?: boolean,
  comer?: boolean,
  llorar?: boolean
}

const guason: Villian = {
  reir: true,
  comer:true,
  llorar:false
}

const reir = ( guason: Villian ):void => {
  if( guason.reir ){
    console.log("JAJAJAJA");
  }
}

reir(guason);

// Cree una interfaz para la siguiente funcion
interface Ciudad {
  (ciudadanos: string[]): number;
}

const ciudadGotica: Ciudad = ( ciudadanos:string[] ):number => {
  return ciudadanos.length;
}

// Cree una interfaz que obligue crear una clase
// con las siguientes propiedades y metodos
interface clasePersona {
  nombre: string,
  edad: number,
  sexo: string,
  estadoCivil: string,
  imprimirBio(): void;
}

class Persona implements clasePersona {
  constructor(public nombre: string, public edad: number, public sexo: string, public estadoCivil: string) {
  }

  imprimirBio() {
    console.log('Bio')
  }
}