        // muda o nome a partir do seletor de classe
        var pacientes = document.querySelector("pessoas");
	    pacientes.textContent = "Meus Pacientes";
		var aparecida = document.querySelector("nutrições");
		aparecida.textContent = "Mariazinha nutrições";
		var Nutrição = document.querySelector("h1");
		Nutrição. textContent = "Apenas nutrições";

        // acessar a tag tr - paciente Paulo
        var paciente = document.querySelector("#primeiro-paciente");
        //seleciona o coteúdo peso da tag
        var tdPeso = paciente.querySelector(".info-peso");
        var peso = tdPeso.textContent;

        var tdAltura = paciente.querySelector(".info-altura");
        var altura = tdAltura.textContent;

        var imc = peso 

        // acessa e altera o imc
        var tdImc = paciente.querySelector(".info-peso");
        tdImc.textContent = imc;
        
        if(peso < 0 || peso > 1000) {
            aletrt("Peso inválido");   
        }

        if(altura < 0 || altura > 4.00){
            alert("Altura inválida");
        }