let  titularCuenta = "Luismi";
const saldoInicial = 300;
const simboloMoneda = "€";
let movimientos = [
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

let siguienteIdMovimiento = movimientos.reduce(
	(mayorId, movimiento) => Math.max(mayorId, movimiento.id),
	0,
) + 1;

// Da formato monetario a una cantidad.
function formatearDinero(cantidad) {
	const cantidadFormateada = new Intl.NumberFormat("es-ES", {
		minimumFractionDigits: 2,
		maximumFractionDigits: 2,
	}).format(cantidad);

	return `${cantidadFormateada} ${simboloMoneda}`;
}

// Suma los importes positivos de los movimientos.
function totalIngresos() {
	let total = 0;

	for (const movimiento of movimientos) {
		if (movimiento.importe > 0) {
			total += movimiento.importe;
		}
	}

	return total;
}

// Suma con reduce los importes negativos de los movimientos.
function totalGastos() {
	return movimientos.reduce((total, movimiento) => {
		if (movimiento.importe < 0) {
			return total + movimiento.importe;
		}
		return total;
	}, 0);
}

// Calcula el saldo inicial mas los ingresos y gastos.
function saldoActual() {
	return saldoInicial + totalIngresos() + totalGastos();
}

// Agrupa los importes gastados por categoria.
function gastosPorCategoria() {
	return movimientos.reduce((gastos, movimiento) => {
		if (movimiento.importe < 0) {
			const categoria = movimiento.categoria;
			gastos[categoria] = (gastos[categoria] || 0) + Math.abs(movimiento.importe);
		}
		return gastos;
	}, {});
}

// Muestra en la pagina la categoria con mayor gasto.
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

// Dibuja las filas de movimientos en la tabla.
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

		const celdaAcciones = document.createElement("td");
		const botonBorrar = document.createElement("button");
		botonBorrar.type = "button";
		botonBorrar.className = "boton-borrar";
		botonBorrar.textContent = "Borrar";
		botonBorrar.setAttribute("aria-label", `Borrar movimiento: ${movimiento.concepto}`);
		botonBorrar.addEventListener("click", () => borrarMovimiento(movimiento.id));
		celdaAcciones.append(botonBorrar);
		fila.append(celdaAcciones);

		cuerpoMovimientos.append(fila);
	}
}

// Actualiza las categorias disponibles en el filtro.
function actualizarOpcionesFiltroCategoria() {
	const filtroCategoria = document.querySelector("#filtro-categoria");
	const categoriaSeleccionada = filtroCategoria.value;
	const categorias = [...new Set(movimientos.map((movimiento) => movimiento.categoria))];
	filtroCategoria.replaceChildren();

	const opcionTodas = document.createElement("option");
	opcionTodas.value = "";
	opcionTodas.textContent = "Todas";
	filtroCategoria.append(opcionTodas);

	for (const categoria of categorias) {
		const opcion = document.createElement("option");
		opcion.value = categoria;
		opcion.textContent = categoria;
		filtroCategoria.append(opcion);
	}

	if (categorias.includes(categoriaSeleccionada)) {
		filtroCategoria.value = categoriaSeleccionada;
	} else {
		filtroCategoria.value = "";
	}
}

// Pinta en la tabla los movimientos que coinciden con el filtro.
function pintarMovimientosFiltrados() {
	const categoriaSeleccionada = document.querySelector("#filtro-categoria").value;
	const listaFiltrada = categoriaSeleccionada
		? movimientos.filter((movimiento) => movimiento.categoria === categoriaSeleccionada)
		: movimientos;

	pintarMovimientos(listaFiltrada);
}

// Conecta el filtro de categoria con la tabla.
function configurarFiltroCategoria() {
	document.querySelector("#filtro-categoria").addEventListener("change", pintarMovimientosFiltrados);
}

// Actualiza las cifras visibles y la categoria con mayor gasto.
function pintarEstadisticas() {
	document.querySelector("#total-ingresos").textContent = formatearDinero(totalIngresos());
	document.querySelector("#total-gastos").textContent = formatearDinero(Math.abs(totalGastos()));
	document.querySelector("#saldo-actual").textContent = formatearDinero(saldoActual());
	mostrarCategoriaMayorGasto();
}

// Actualiza el filtro, la tabla y las estadisticas.
function refrescar() {
	actualizarOpcionesFiltroCategoria();
	pintarMovimientosFiltrados();
	pintarEstadisticas();
	console.log(`Ingresos: ${formatearDinero(totalIngresos())}`);
	console.log(`Gastos: ${formatearDinero(totalGastos())}`);
	console.log(`Saldo actual: ${formatearDinero(saldoActual())}`);
}

// Elimina un movimiento y actualiza la pagina.
function borrarMovimiento(id) {
	movimientos = movimientos.filter((movimiento) => movimiento.id !== id);
	refrescar();
}

// Valida y guarda el movimiento enviado desde el formulario.
function configurarFormulario() {
	const formulario = document.querySelector("#formulario-movimiento");
	formulario.addEventListener("submit", (evento) => {
		evento.preventDefault();

		const concepto = document.querySelector("#concepto").value.trim();
		const importeTexto = document.querySelector("#importe").value.trim();
		const importe = Number(importeTexto);
		const categoria = document.querySelector("#categoria").value.trim();
		const mensajeError = document.querySelector("#error-formulario");

		if (!concepto || !categoria || !importeTexto || !Number.isFinite(importe)) {
			mensajeError.textContent = "Completa todos los campos e introduce un importe valido.";
			return;
		}

		const hoy = new Date();
		const fecha = `${hoy.getFullYear()}-${String(hoy.getMonth() + 1).padStart(2, "0")}-${String(hoy.getDate()).padStart(2, "0")}`;
		movimientos.push({
			id: siguienteIdMovimiento,
			concepto,
			importe,
			categoria,
			fecha,
		});
		siguienteIdMovimiento += 1;
		formulario.reset();
		mensajeError.textContent = "";
		document.querySelector("#filtro-categoria").value = "";
		refrescar();
	});
}

configurarFiltroCategoria();
configurarFormulario();
refrescar();
