$(document).ready(function() {

	var init = function() {
		$("#alertArroz").hide();
		$("#alertSabonete").hide();
		$("#alertFeijao").hide();
		$("#alertBatata").hide();
		$("#alertBicicleta").hide();
		$("#alertCarro").hide();
		$("#alertAlgodao").hide();
		$("#alertMoto").hide();
		$("#alertOculos").hide();
		$("#alertCadeira").hide();
		$("#alertSombrinha").hide();
		$("#alertMaquina").hide();
		$("#alertBola").hide();
		$("#alertSkate").hide();
		$("#alertPatins").hide();
		$("#alertChave").hide();
		$("#successTriangulo").hide();
		$("#errorTriangulo").hide();
		$("#successQuadrado").hide();
		$("#errorQuadrado").hide();
		$("#successRetangulo").hide();
		$("#errorRetangulo").hide();
		$("#successCirculo").hide();
		$("#errorCirculo").hide();
	};

	$("#arroz").on("click", function() {
		init();
		$("#alertArroz").show();
		$('html, body').animate({scrollTop: $('#arroz').offset().top});
	});
	$("#sabonete").on("click", function() {
		init();
		$("#alertSabonete").show();
		$('html, body').animate({scrollTop: $('#sabonete').offset().top});
	});
	$("#feijao").on("click", function() {
		init();
		$("#alertFeijao").show();
		$('html, body').animate({scrollTop: $('#feijao').offset().top});
	});
	$("#batata").on("click", function() {
		init();
		$("#alertBatata").show();
		$('html, body').animate({scrollTop: $('#batata').offset().top});
	});
	$("#bicicleta").on("click", function() {
		init();
		$("#alertBicicleta").show();
		$('html, body').animate({scrollTop: $('#bicicleta').offset().top});
	});
	$("#carro").on("click", function() {
		init();
		$("#alertCarro").show();
		$('html, body').animate({scrollTop: $('#carro').offset().top});
	});
	$("#algodao").on("click", function() {
		init();
		$("#alertAlgodao").show();
		$('html, body').animate({scrollTop: $('#algodao').offset().top});
	});
	$("#moto").on("click", function() {
		init();
		$("#alertMoto").show();
		$('html, body').animate({scrollTop: $('#moto').offset().top});
	});
	$("#oculos").on("click", function() {
		init();
		$("#alertOculos").show();
		$('html, body').animate({scrollTop: $('#oculos').offset().top});
	});
	$("#cadeira").on("click", function() {
		init();
		$("#alertCadeira").show();
		$('html, body').animate({scrollTop: $('#cadeira').offset().top});
	});
	$("#sombrinha").on("click", function() {
		init();
		$("#alertSombrinha").show();
		$('html, body').animate({scrollTop: $('#sombrinha').offset().top});
	});
	$("#maquina").on("click", function() {
		init();
		$("#alertMaquina").show();
		$('html, body').animate({scrollTop: $('#maquina').offset().top});
	});
	$("#bola").on("click", function() {
		init();
		$("#alertBola").show();
		$('html, body').animate({scrollTop: $('#bola').offset().top});
	});
	$("#skate").on("click", function() {
		init();
		$("#alertSkate").show();
		$('html, body').animate({scrollTop: $('#skate').offset().top});
	});
	$("#patins").on("click", function() {
		init();
		$("#alertPatins").show();
		$('html, body').animate({scrollTop: $('#patins').offset().top});
	});
	$("#chave").on("click", function() {
		init();
		$("#alertChave").show();
		$('html, body').animate({scrollTop: $('#chave').offset().top});
	});

	$("#btTriangulo").on("click", function() {
		$("#triangulo").on("click", function() {
			init();
			$("#successTriangulo").show();
		});
		$("#circulo").add("#retangulo").add("#quadrado").on("click", function() {
			init();
			$("#errorTriangulo").show();
		});
	});
	$("#btQuadrado").on("click", function() {
		$("#quadrado").on("click", function() {
			init();
			$("#successQuadrado").show();
		});
		$("#triangulo").add("#circulo").add("#retangulo").on("click", function() {
			init();
			$("#errorQuadrado").show();
		});
	});
	$("#btCirculo").on("click", function() {
		$("#circulo").on("click", function() {
			init();
			$("#successCirculo").show();
		});
		$("#retangulo").add("#quadrado").add("#triangulo").on("click", function() {
			init();
			$("#errorCirculo").show();
		});
	});
	$("#btRetangulo").on("click", function() {
		$("#retangulo").on("click", function() {
			init();
			$("#successRetangulo").show();
		});
		$("#quadrado").add("#triangulo").add("#circulo").on("click", function() {
			init();
			$("#errorRetangulo").show();
		});
	});
});
