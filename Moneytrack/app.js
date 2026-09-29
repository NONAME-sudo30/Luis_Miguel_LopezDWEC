let  titularCuenta = "Luismi";
const saldoInicial = 300;
const simboloMoneda = "€";

function formatearDinero(cantidad) {
	const cantidadFormateada = new Intl.NumberFormat("es-ES", {
		minimumFractionDigits: 2,
		maximumFractionDigits: 2,
	}).format(cantidad);

	return `${cantidadFormateada} ${simboloMoneda}`;
}
