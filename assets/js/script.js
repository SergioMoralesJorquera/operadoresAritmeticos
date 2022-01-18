$(document).ready( function (){

    $( "#operacionesAritmeticas" ).click( function (){

        //se crean las 2 variables y luego por medio del prompt se pide al usuario los numeros transformados en enteros 
        var n1 = prompt("Ingrese un primer número entero: ");
        var n1 = parseInt(n1);
        var n2 = prompt("Ingrese un segundo número entero: ");
        var n2 = parseInt(n2);

        //se realiza las operaciones respectivas y se muestra el resultado
        alert("El resultado de las operaciones son:\n\n"
        +"1. suma:"+" "+(n1+n2)+"\n"
        +"2. resta:"+" "+(n1-n2)+"\n"
        +"3. multiplicación:"+" "+(n1*n2)+"\n"
        +"4. división:"+" "+(n1/n2)+"\n"
        +"5. modulo:"+" "+(n1%n2)+"\n");
    });

    
    $( "#transformacionTemperaturas" ).click( function (){

        //se crea la variable y luego por medio del prompt se pide al usuario la temperatura 
        var n1 = prompt("Ingrese la temperatura en grados celcius: ");
        var n1 = parseInt(n1);

        //se realiza las operaciones respectiva de transformación de temperatura y se muestra el resultado
        alert("1. El resultado en grados kelvin es:"+" "+(n1+273.15)+"K°"+"\n"
        +"2. El resultado en grados fahrenheit es:"+" "+(n1 * (9/5) +32)+"F°"
        );
    });

    $( "#calculoDias" ).click( function (){

        //se crea la variable y luego por medio del prompt se pide al usuario la cantidad de dias 
        var n1 = prompt("Ingrese la cantidad de dias a calcular: ");
        var n1 = parseInt(n1);
        //se divide para calcular el año
        var años = Math.floor((n1/365));
        //se obtiene el resto
        var añosresto=n1%365;
        
        //se divide el resto anterior
        var semana=Math.floor(añosresto/7);
        
        //por el modulo se obtiene el numero de dias 
        var semanaresto =(añosresto%7);

        //se muestra en alert los resultados
        alert("1. El resultado es:\n"+
        años+" años"+"\n"+
        semana+" semanas"+"\n"+
        semanaresto+" dias"
        );
    });

    $( "#sumaPromedio" ).click( function (){

        //se crea las variable y luego por medio del prompt se pide al usuario los 5 numeros a ingresar 
        var n1 = prompt("Ingrese el primer numero: ");
        var n1 = parseInt(n1);
        var n2 = prompt("Ingrese el segundo numero: ");
        var n2 = parseInt(n2);
        var n3 = prompt("Ingrese el tercer numero: ");
        var n3 = parseInt(n3);
        var n4 = prompt("Ingrese el cuarto numero: ");
        var n4 = parseInt(n4);
        var n5 = prompt("Ingrese el quinto numero: ");
        var n5 = parseInt(n5);

        //se muestra en un alert el promedio y la suma
        alert("1. El resultado de la suma de los 5 numeros ingresados son:"+" "+(n1+n2+n3+n4+n5)+"\n"
        +"2. El resultado del promedio de los 5 numeros ingresados son:"+" "+((n1+n2+n3+n4+n5)/5));
    });
});