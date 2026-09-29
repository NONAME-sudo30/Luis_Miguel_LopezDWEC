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

function totalIngresos() {
	let total = 0;

	for (const movimiento of movimientos) {
		if (movimiento.importe > 0) {
			total += movimiento.importe;
		}
	}

	return total;
}

function totalGastos() {
	return movimientos.reduce((total, movimiento) => {
		if (movimiento.importe < 0) {
			return total + movimiento.importe;
		}
		return total;
	}, 0);
}

function saldoActual() {
	return saldoInicial + totalIngresos() + totalGastos();
}

function gastosPorCategoria() {
	return movimientos.reduce((gastos, movimiento) => {
		if (movimiento.importe < 0) {
			const categoria = movimiento.categoria;
			gastos[categoria] = (gastos[categoria] || 0) + Math.abs(movimiento.importe);
		}
		return gastos;
	}, {});
}

function mostrarCategoriaMayorGasto() {
	const elementoCategoria = document.querySelector("#categoria-mayor-gasto");
	const mayorGasto = Object.entries(gastosPorCategoria()).reduce(
		(mayor, [categoria, total]) => {
			if (mayor === null || total > mayor.total) {
				return { categoria, total };
			}
			return mayor;
		},
		null,
	);

	if (mayorGasto === null) {
		elementoCategoria.textContent = "No hay gastos registrados.";
		return;
	}

	elementoCategoria.textContent = `${mayorGasto.categoria}: ${formatearDinero(mayorGasto.total)}`;
}

function pintarMovimientos(listaMovimientos = movimientos) {
	const cuerpoMovimientos = document.querySelector("#cuerpo-movimientos");
	cuerpoMovimientos.replaceChildren();

	for (const movimiento of listaMovimientos) {
		const fila = document.createElement("tr");
		const valores = [
			movimiento.fecha,
			movimiento.concepto,
			movimiento.categoria,
			formatearDinero(movimiento.importe),
		];

		for (const [indice, valor] of valores.entries()) {
			const celda = document.createElement("td");
			celda.textContent = valor;

			if (indice === 3 && movimiento.importe !== 0) {
				celda.classList.add(movimiento.importe > 0 ? "ingreso" : "gasto");
			}

			fila.append(celda);
		}

		cuerpoMovimientos.append(fila);
	}
}

function configurarFiltroCategoria() {
	const filtroCategoria = document.querySelector("#filtro-categoria");
	const categorias = [...new Set(movimientos.map((movimiento) => movimiento.categoria))];

	for (const categoria of categorias) {
		const opcion = document.createElement("option");
		opcion.value = categoria;
		opcion.textContent = categoria;
		filtroCategoria.append(opcion);
	}

	filtroCategoria.addEventListener("change", () => {
		const categoriaSeleccionada = filtroCategoria.value;
		const movimientosFiltrados = categoriaSeleccionada
			? movimientos.filter((movimiento) => movimiento.categoria === categoriaSeleccionada)
			: movimientos;

		pintarMovimientos(movimientosFiltrados);
	});
}

console.log(`Ingresos: ${formatearDinero(totalIngresos())}`);
console.log(`Gastos: ${formatearDinero(totalGastos())}`);
console.log(`Saldo actual: ${formatearDinero(saldoActual())}`);

mostrarCategoriaMayorGasto();
configurarFiltroCategoria();
pintarMovimientos();
