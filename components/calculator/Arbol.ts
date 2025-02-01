class Arbol {
    especie: string;
    edad: number;
    altura: number;
    diametroTronco: number;
    frecuenciaRiego: string;
    plagasEnfermedades: string;
  
    constructor(especie: string, edad: number, altura: number, diametroTronco: number,frecuenciaRiego: string, plagasEnfermedades: string) {
      this.especie = especie;
      this.edad = edad;
      this.altura = altura;
      this.diametroTronco = diametroTronco;
      this.frecuenciaRiego = frecuenciaRiego;
      this.plagasEnfermedades = plagasEnfermedades;
    }
}