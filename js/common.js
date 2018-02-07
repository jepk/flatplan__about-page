$(document).ready(function () {

  $('.txt_block .hidden_block').height(0);

  //плавное раскрытие вопросов
  $('.frequent-questions .txt_block h3').click(function(){
    if($(this).hasClass('active')){
      $(this).removeClass('active');
      $(this).next().height(0);
    }else{
      $(this).next().height('auto');
      var elemHeight = $(this).next().height();
      $(this).next().height(0);
      $(this).next().height(elemHeight);
      $(this).addClass('active');
    }
  });

  //delete project from busket
  $("a.delete_btn").click(function () {
    var elemUrl = $(this).parent().parent();
    elemUrl.fadeOut(600);
    setTimeout(function () {
      elemUrl.remove();
    }, 600);

  }); //END delete project from busket

  //open dropdown
  $(".btn_messenger").click(function () {

    $(this).toggleClass('active');

  });//END open dropdown

  $(".drop_down li").click(function () {

    var elemTxt = $(this).text();
    elemTxt = elemTxt + '<input type="hidden" name="messager" value="'+elemTxt+'">';
    $(this).parent().prev().html(elemTxt);
  });//END

});
