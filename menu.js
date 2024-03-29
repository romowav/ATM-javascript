const actions = document.querySelector("#actions");

// (this) en funciones de Javascript

// Esta es mi funcion la cual estoy llamando en el archivo main.js
const renderMenu = (nombre) => {
let menu = `
    <div>
        <h1>${nombre}</h1>
        <div class="row">
            <div class="col">
                <a class="btn btn-success" href="#" role="button" onClick="consultar()">Consultar</a>
            </div>
            <div class="col">
                <a class="btn btn-warning" href="#" role="button" onClick="depositar()">Depositar</a>
            </div>
            <div class="col">
                <a class="btn btn-info" href="#" role="button" onClick="retirar()">Retirar</a>
            </div>
            <div class="col">
                <a class="btn btn-danger" href="#" role="button" onClick="salir()">Salir</a>
            </div>
        </div>
    </div>`;

wrapper.innerHTML = menu;
};

// Funciones del ATM, una vez que ya ingresamos
const consultar = () => {
    actions.innerHTML = ""
    actions.innerHTML = `<p>Su saldo es $${selected[0].saldo}</p>`
    };

const depositar = () => {
    let amount = prompt("Ingresa el monto a depositar", "");
    if (amount === null) {
        actions.innerHTML = `Tu saldo se mantuvo en $${selected[0].saldo}`;
    }else if (amount === "") {
        actions.innerHTML = `Tu saldo se mantuvo en $${selected[0].saldo}`;
    } else if (parseFloat(selected[0].saldo) + parseFloat(amount) > 990) {
        actions.innerHTML = `Tu saldo no puede ser mayor a 990`;
    } else {
        let balance = parseFloat(selected[0].saldo) + parseFloat(amount);
        selected[0].saldo = balance.toFixed(2);
        actions.innerHTML = `<p>Monto depositado: $${amount}</p><p>Tu nuevo saldo es $${selected[0].saldo}</p>`;
    }
};

const retirar = () => {
    let amount = prompt("Ingresa el monto a retirar", "");
    // selected[0].saldo = balance.toFixed(2)
    // actions.innerHTML = `Tu nuevo saldo es $${selected[0].saldo}`
    if (amount === null) {
        actions.innerHTML = `Tu saldo se mantuvo en $${selected[0].saldo}`;
    }else if (amount === "") {
        actions.innerHTML = `Tu saldo se mantuvo en $${selected[0].saldo}`;
    } else if (parseFloat(selected[0].saldo) - parseFloat(amount) < 10) {
        actions.innerHTML = `Tu saldo no puede ser menor a 10`;
    } else {
        let balance = parseFloat(selected[0].saldo) - parseFloat(amount);
        selected[0].saldo = balance.toFixed(2);
        actions.innerHTML = `<p>Monto retirado: $${amount}</p><p>Tu nuevo saldo es $${selected[0].saldo}</p>`;
    }
};

const salir = () => {
    location.reload();
    }