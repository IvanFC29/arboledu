export const calcularImpacto = (numArboles: number, tiempoAnios: number) => {
    /** CO2 compensado por Arbol en un anio  */
    const CO2 = 22;
    /** Oxigeno que genera un arbol por anio */
    const oxigeno = 118;

    var CO2compensado = numArboles * CO2 * tiempoAnios;
    var O2_generado = numArboles * oxigeno * 365 * tiempoAnios;

    return {CO2compensado , O2_generado};
}