let  titularCuenta = "Luismi";
const saldoInicial = 300;
const simboloMoneda = "€";
const movimientos = [
	{
		id: 1,
		concepto: "Nómina",
		importe: 1800,
		categoria: "Ingresos",
		fecha: "2026-09-01",
	},
	{
		id: 2,
		concepto: "Alquiler",
		importe: -750,
		categoria: "Vivienda",
		fecha: "2026-09-02",
	},
	{
		id: 3,
		concepto: "Compra semanal",
		importe: -86.45,
		categoria: "Alimentación",
		fecha: "2026-09-04",
	},
	{
		id: 4,
		concepto: "Venta de bicicleta",
		importe: 120,
		categoria: "Ingresos extra",
		fecha: "2026-09-10",
	},
	{
		id: 5,
		concepto: "Factura de electricidad",
		importe: -48.7,
		categoria: "Suministros",
		fecha: "2026-09-12",
	},
	{
		id: 6,
		concepto: "Abono transporte",
		importe: -32.5,
		categoria: "Transporte",
		fecha: "2026-09-15",
	},
];

function formatearDinero(cantidad) {
	const cantidadFormateada = new Intl.NumberFormat("es-ES", {
		minimumFractionDigits: 2,
		maximumFractionDigits: 2,
	}).format(cantidad);

	return `${cantidadFormateada} ${simboloMoneda}`;
}
