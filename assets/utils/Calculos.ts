export const calcularImpacto = (especie: string, edad: number, altura: number, diametroTronco: number,frecuenciaRiego: string, plagasEnfermedades: boolean) => {
    /** Clasificacion de arboles y plantas (estimacion) */
    var arboles_frondosos: string[] = ['pino', 'roble', 'molle', 'jacaranda', 'eucalipto'];
    var plantas: string[] = ['limon', 'granada', 'pingo de oro', 'nepal', 'uva'];

    /** CALCULOS */

    /** Primero calculamos el volumen del arbol */
    const factor_forma: number = 0.496;
    var volumen: number = factor_forma * (altura * Math.pow(diametroTronco/100, 2))/4*Math.PI;

    /** Calculamos la biomasa del tronco y ramas 
     *  El primero es para arboles frondosos y el segundo para madera blanda 
     */
    const densidades: number[] = [0.546, 0.438]; 
    var densidad: number = 0.0;

    for (let index = 0; index < arboles_frondosos.length; index++) {
        const nomArbol:string = arboles_frondosos[index];
        if (nomArbol == especie) {
           densidad = densidades[0];
           break;
        }else{
            for (let index2 = 0; index2 < plantas.length; index2++) {
                const nomPlanta:string = plantas[index2];
                if ( nomPlanta == especie) {
                    densidad = densidades[1];
                    break;
                } else{
                    console.log("No e encontro la planta / arbol");
                }
            }
        }
        break;
    }

    var biomasaInicial: number = densidad * volumen;

    /** Calculamos la biomasa total arbol + hojas */
    const factores_expancion_lista:number[] = [1.28, 1.30];
    var factor_expansion:number = 0.0;

    if (densidad == 0.546) {
        factor_expansion = factores_expancion_lista[0];
    } else {
        factor_expansion = factores_expancion_lista[1];
    }

    var biomasaTotal:number = biomasaInicial * factor_expansion;

    /** Cantidad de CO2 almacenada en el arbol/planta */

    const tasaCarbono: number = 0.475;
    const masa_molar_co2: number = 44/12;

    var CO2compensado = tasaCarbono * biomasaTotal *masa_molar_co2;

    /** Calcular la produccion de oxigeno del arbol/planta */
    var O2_generado = Math.exp(biomasaInicial + biomasaTotal/edad);

    return {CO2compensado , O2_generado, especie, edad};
}