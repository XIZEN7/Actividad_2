// Principios de responsabilidad unica
/**
 * @class Coche
 */
class Coche {
  constructor(coche) {
    this.coche = coche;
  }

  getMarcaCoche(marca) {
    return (this.marca = marca);
  }
}

/**
 * @class CocheBD
 * @extends {Coche}
 */
class CocheBD extends Coche {
  constructor(coche) {
    super(coche);
  }

  guardarCocheDB(coche) {
    return coche;
  }

  guardarCocheDB(coche) {
    return coche;
  }
}

// Principio de substitución de Liskov
/**
 * Abstract Class Coche.
 *
 * @class Coche
 */
class Coche {
  constructor(asientos) {
    this.asientos = asientos;
  }
}

/**
 * Renault.
 *
 * @class Renault
 * @extends {Coche}
 */
class Renault extends Coche {
  constructor(asientos) {
    super(asientos);
  }
  numAsientos() {
    return this.asientos;
  }
}

/**
 * Audi.
 *
 * @class Audi
 * @extends {Coche}
 */
class Audi extends Coche {
  constructor(asientos) {
    super(asientos);
  }
  numAsientos() {
    return this.asientos;
  }
}

/**
 * Ford.
 *
 * @class Ford
 * @extends {Coche}
 */
class Ford extends Coche {
  constructor(numAsientos) {
    super(numAsientos);
  }
  numAsientos() {
    return this.asientos;
  }
}

/**
 * Mercedez.
 *
 * @class Mercedez
 * @extends {Coche}
 */
class Mercedez extends Coche {
  constructor(numAsientos) {
    super(numAsientos);
  }
  numAsientos() {
    return this.asientos;
  }
}

function imprimirNumAsientos(arrayCoches) {
  for (const coche of arrayCoches) {
    console.log(coche.numAsientos());
  }
}

const renault = new Renault(5);
const audi = new Audi(2);
const ford = new Ford(4);
const mercedez = new Mercedez(5);

imprimirNumAsientos([renault, audi, ford, mercedez]);




//Principio Abierto Cerrado
class Coche {
  constructor (precio) {
    this.precio = precio;
  }
  precioMedioCoche ();
}
//obetenemos precio de cada coche y lo cerramos para evitar datos ambiguos entr clases
class Renault extends Coche{
  precioMedioCoche(){ return 12000; }
}

class Audi extends Coche{
  precioMedioCoche(){ return 20000; }
}

class Mercedes extends Coche {
  precioMedioCoche(){ return 38000; }
}

const renault = new Renault();
const audi = new Audi();
const mercedez = new Mercedez();

function imprimirPrecioMedioCoche(arrayCoches) {
  for (const coche of arrayCoches) {
    console.log(coche.precioMedioCoche());
  }

}
imprimirPrecioMedioCoche([renault, audi, mercedez]);


//Principio de inversión de dependencias

class Conexion{
  constructor(dato){
    this.dato = dato;
  }
  getDatos();
  setDatos();
}
//aqui vemos que ahora para cualquier iteracion de la conexion depende directamente de la clase conexion**
class AccesoDatos extends Conexion{
    getDatos();
    setDatos(); 
}

