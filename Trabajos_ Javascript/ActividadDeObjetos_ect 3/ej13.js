function crearAlumno(nombre, notas) {
    return {
        nombre,
        notas,
        promedio() {
            const suma = this.notas.reduce((acc, nota) => acc + nota, 0);
            return suma / this.notas.length;
        }
    };
}
const alumno = crearAlumno("Juan", [4, 3, 5, 2, 4]);
console.log(alumno.promedio());  