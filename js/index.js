const encuesta = {
    pregunta: 'Elija su marca preferida japonesa de los años 90',
    opciones: ['0: nissan', '1: toyota', '2: mazda', '3: honda', '4: subaru', '5: mitsubishi', '6: acura', '7: lexus'],

    respuestas: new Array(8).fill(0),
    
    registrarNuevaRespuesta() {
        const registrar = Number(
            prompt(` ${this.pregunta}\n\n${this.opciones.join('\n')}
        \n(Escriba el numero de su fabricante)`)
        );

        typeof registrar === `number` &&
        registrar < this.respuestas.length &&
        this.respuestas[registrar]++;

        return this.respuestas;
    },
};

const captureOn = function () {
    const confirmacion = confirm(
        `Elija su marca preferida de los años 90\n\n${encuesta.opciones.join(
            '\n'
        )}\n\n`
    );

    if (confirmacion === true) {
        const memory = encuesta.registrarNuevaRespuesta();
        const a = [];
        encuesta.opciones.map((element, index, array) => {
            const recibirConteo = `${element.padEnd(30, ' -')} ${memory[index]}`;
            a.push(recibirConteo);
        });
        alert(`Conteo :\n\n${a.join('\n')}`);
        console.log(a);
        llamada();
    } else if (confirmacion === false) {
        alert('Gracias por participar en esta encuesta a continuacion un video de la cultura jdm en los 90');
        Esc;
    }
};

const llamada = function () {
    captureOn();
    const memory = encuesta.registrarNuevaRespuesta();
    console.log(memory);
};

captureOn();

