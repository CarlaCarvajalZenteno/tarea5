var nom,anio,edad,dia;
nom=prompt(" nombre  :");
document.write("<br>hola </br>"+ nom);document.write("<br>hola </br>"+ nom);
anio=parseInt(prompt("anio nacimiento:"));
edad=2024-anio;
if (edad>=18) {
    document.write("mayor edad"+ nom);
} else {
    document.write("<br>menor edad </br>"+ nom);
}
dia=parseInt(prompt(" dia entre uno y siete :"));
switch (dia) {
    case 1: alert("lunes"); break;
    case 2: alert("martes"); break;
    case 3: alert("miercoles"); break;
    case 4: alert("jueves"); break;
    case 5: alert("viernes"); break;
    case 6: alert("sabado"); break;
    case 17: alert("domingo"); break;
    default:alert("fuera");
}