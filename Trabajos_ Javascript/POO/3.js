class CuentaBancaria {
  #saldo;

  constructor(titular, saldoInicial) {
    this.titular = titular;
    this.#saldo = saldoInicial;
  }

  depositar(monto) {
    if (monto > 0) {
      this.#saldo += monto;
      console.log(`Depósito de ${monto} realizado. Nuevo saldo: ${this.#saldo}`);
    } else {
      console.log('El monto debe ser positivo.');
    }
  }

  retirar(monto) {
    if (monto > 0 && monto <= this.#saldo) {
      this.#saldo -= monto;
      console.log(`Retiro de ${monto} realizado. Nuevo saldo: ${this.#saldo}`);
    } else if (monto > this.#saldo) {
      console.log('Fondos insuficientes.');
    } else {
      console.log('El monto debe ser positivo.');
    }
  }

  obtenerSaldo() {
    return this.#saldo;
  }
}


const cuenta = new CuentaBancaria('César', 250000);
cuenta.depositar(50000);  
cuenta.retirar(100000);   
cuenta.retirar(300000);   
console.log(cuenta.obtenerSaldo());  