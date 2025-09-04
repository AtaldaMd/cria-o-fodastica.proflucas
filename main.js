        // muda o nome a partir do seletor de classe
        var pacientes = document.querySelector("pessoas");
	    pacientes.textContent = "Meus Pacientes";
		var aparecida = document.querySelector("nutrições");
		aparecida.textContent = "Mariazinha nutrições";
		var Nutrição = document.querySelector("h1");
		Nutrição. textContent = "Apenas nutrições";

        // acessar a tag tr - paciente Paulo
        var paciente = document.querySelector(".paciente");
        for(var i = 0; i < paciente.length; i++){
   //seleciona o coteúdo peso da tag
   var tdPeso = paciente.querySelector(".info-peso");
   var peso = tdPeso.textContent;

   var tdAltura = paciente.querySelector(".info-altura");
   var altura = tdAltura.textContent;

   var imc = peso / (altura * altura );

   //variáveis com valor true
    var pesoValido = true;
   var alturaValida = true;

   if (pesoValido && alturaValida){
       // acessa e altera o imc
 var tdImc = paciente.querySelector(".info-peso");
 tdImc.textContent = imc;
 }
   //define limites de peso e altura
   if(peso < 0 || peso > 1000) {
       aletrt("Peso inválido"); 
       var pesoValido = false; 
       tdImc.textContent = "Peso Inválido";
   }

   if(altura < 0 || altura > 4.00){
       alert("Altura inválida");
       var alturaValida = false;
       tdImc.textContent = "Altura Inválido";
   }

       // acessar a tag tr - paciente João
   var paciente = document.querySelector("#segundo-paciente");
   //seleciona o coteúdo peso da tag
   var tdPeso = paciente.querySelector(".info-peso");
   var peso = tdPeso.textContent;

   var tdAltura = paciente.querySelector(".info-altura");
   var altura = tdAltura.textContent;

   var imc = peso / (altura * altura );
  
   //variáveis com valor true
   var pesoValido = true;
   var alturaValida = true;

   if (pesoValido && alturaValida){
       // acessa e altera o imc
 var tdImc = paciente.querySelector(".info-peso");
 tdImc.textContent = imc;
 }
   //define limites de peso e altura
   if(peso < 0 || peso > 1000) {
       aletrt("Peso inválido"); 
       var pesoValido = false; 
       tdImc.textContent = "Peso Inválido";
   }

   if(altura < 0 || altura > 4.00){
       alert("Altura inválida");
       var alturaValida = false;
       tdImc.textContent = "Altura Inválido";
   } 

   // acessar a tag tr - paciente Erica
   var paciente = document.querySelector("#terceiro-paciente");
   //seleciona o coteúdo peso da tag
   var tdPeso = paciente.querySelector(".info-peso");
   var peso = tdPeso.textContent;

   var tdAltura = paciente.querySelector(".info-altura");
   var altura = tdAltura.textContent;

   var imc = peso / (altura * altura );

   //variáveis com valor true
   var pesoValido = true;
   var alturaValida = true;

   if (pesoValido && alturaValida){
       // acessa e altera o imc
 var tdImc = paciente.querySelector(".info-peso");
 tdImc.textContent = imc;
 }
   //define limites de peso e altura
   if(peso < 0 || peso > 1000) {
       aletrt("Peso inválido"); 
       var pesoValido = false; 
       tdImc.textContent = "Peso Inválido";
   }

   if(altura < 0 || altura > 4.00){
       alert("Altura inválida");
       var alturaValida = false;
       tdImc.textContent = "Altura Inválido";
   }
   
   // acessar a tag tr - paciente Douglas
   var paciente = document.querySelector("#quarto-paciente");
   //seleciona o coteúdo peso da tag
   var tdPeso = paciente.querySelector(".info-peso");
   var peso = tdPeso.textContent;

   var tdAltura = paciente.querySelector(".info-altura");
   var altura = tdAltura.textContent;

   var imc = peso / (altura * altura );

   //variáveis com valor true
   var pesoValido = true;
   var alturaValida = true;

   if (pesoValido && alturaValida){
       // acessa e altera o imc
 var tdImc = paciente.querySelector(".info-peso");
 tdImc.textContent = imc;
 }
   //define limites de peso e altura
   if(peso < 0 || peso > 1000) {
       aletrt("Peso inválido"); 
       var pesoValido = false; 
       tdImc.textContent = "Peso Inválido";
   }

   if(altura < 0 || altura > 4.00){
       alert("Altura inválida");
       var alturaValida = false;
       tdImc.textContent = "Altura Inválido";
   }

   // acessar a tag tr - paciente Tatiana
   var paciente = document.querySelector("#quinto-paciente");
   //seleciona o coteúdo peso da tag
   var tdPeso = paciente.querySelector(".info-peso");
   var peso = tdPeso.textContent;

   var tdAltura = paciente.querySelector(".info-altura");
   var altura = tdAltura.textContent;

   var imc = peso / (altura * altura );

   //variáveis com valor true
   var pesoValido = true;
   var alturaValida = true;

   if (pesoValido && alturaValida){
       // acessa e altera o imc
 var tdImc = paciente.querySelector(".info-peso");
 tdImc.textContent = imc;
 }
   //define limites de peso e altura
   if(peso < 0 || peso > 1000) {
       aletrt("Peso inválido"); 
       var pesoValido = false; 
       tdImc.textContent = "Peso Inválido";
   }

   if(altura < 0 || altura > 4.00){
       alert("Altura inválida");
       var alturaValida = false;
       tdImc.textContent = "Altura Inválido";
   }

        }