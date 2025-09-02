export default class Alcancia {
    constructor() {
        this.moneda200 = 0;
        this.moneda500 = 0;
        this.moneda1000 = 0;
    }

    agregarMoneda200() {
        this.moneda200++;
    }

    agregarMoneda500() {
        this.moneda500++;
    }

    agregarMoneda1000() {
        this.moneda1000++;
    }

    calcularTotalMonedas() {
        const total = (this.moneda200 * 200) +
                      (this.moneda500 * 500) +
                      (this.moneda1000 * 1000);
        return total;
    }
}
