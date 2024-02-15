function myFunction() {
    // Pega a caixa de seleção
    var checkBox = document.getElementById("myCheck");
    // Obtém o texto de saída
    var text = document.getElementById("modal");
  
     // Se a caixa de seleção estiver marcada, exibe o texto de saída
    if (checkBox.checked == true){
      text.style.display = "block";
    } else {
      text.style.display = "none";
    }
  }

  $("[name='toggle']").click(function(){
    var cont = $("[name='toggle']:checked").length;
    $("#submit").prop("disabled", cont ? false : true);
 });

 function Checkfiles(){
  var fup = document.getElementById('filename');
  var fileName = fup.value;
  var ext = fileName.substring(fileName.lastIndexOf('.') + 1);

  if(ext =="jpeg" || ext=="png"){
      return true;
  }
  else{
      return false;
  }
}

$("#cpf").keypress(function() {
  $(this).mask('000.000.000-00');
});
$("#cep").keypress(function() {
  $(this).mask('00.000-000');
});

$("#telefone").keypress(function() {
  $(this).mask('(00) 0000-00009')
});       
$("#rg").keypress(function() {
$(this).mask('99.999.999-99');
});

function validacaoEmail(field) {
  usuario = field.value.substring(0, field.value.indexOf("@"));
  dominio = field.value.substring(field.value.indexOf("@")+ 1, field.value.length);
  if ((usuario.length >=1) &&
      (dominio.length >=3) &&
      (usuario.search("@")==-1) &&
      (dominio.search("@")==-1) &&
      (usuario.search(" ")==-1) &&
      (dominio.search(" ")==-1) &&
      (dominio.search(".")!=-1) &&
      (dominio.indexOf(".") >=1)&&
      (dominio.lastIndexOf(".") < dominio.length - 1)) {
  document.getElementById("msgemail").innerHTML="E-mail válido";
  alert("email valido");
  }
  else{
  document.getElementById("msgemail").innerHTML="<font color='red'>Email inválido </font>";
  alert("E-mail invalido");
  }
  }

  