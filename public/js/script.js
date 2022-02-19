//select form abastecimento
$("#car").change(function() {
    if ($(this).data('options') == undefined) {
      /*pegando options-carros e vinculando select-placas*/
      $(this).data('options', $('#placas option').clone());
    }
    var id = $(this).val();
    if (id == "all") {
      var options = $(this).data('options');
      $('#placas').html(options);
  }else {
      var options = $(this).data('options').filter('[value=' + id + ']');
      $('#placas').html(options);
  }
});

