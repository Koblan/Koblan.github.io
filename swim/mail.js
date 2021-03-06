var selector = 'form';
$(selector).each(function(indx){if($(this).attr('action') === undefined){$(this).attr('action', '/').attr('method','post');}});
$(function(){
  $(selector+'[action = "/"]').submit(function(e) {

    hide = 1; // 1 - прятать форму после отправки (0 - не прятать)
    delay = 0; // задержка исчезновения сообщения в миллисекундах (0 - не скрывать)
    success_msg = "Ваше сообщение отправлено!"; // сообщение об успешной отправке
    error_msg = "Ошибка отправки! Попробуйте позже."; // сообщение об ошибке
    wait_msg = 'Идет отправка...'; // сообщение об отправке (оставить пустым чтоб не показывать)
    redirect = ''; // страница, на котороую перейти после отправки (оставить пустым чтоб никуда не переходить)
    action = $('[src $= mail\\.js]').attr('src').replace('js','php'); // путь к скрипту отправки почты

    cur_id = '#'+$(this).attr('id');
    if($(cur_id).attr('data-hide') !== undefined){ hide = parseInt($(cur_id).attr('data-hide')); }
    if($(cur_id).attr('data-delay') !== undefined){ delay = parseInt($(cur_id).attr('data-delay')); }
    cur_success = $(cur_id).siblings('.w-form-done').text().trim();
    if(cur_success !== 'Thank you! Your submission has been received!'){ success_msg = cur_success; }
    cur_error = $(cur_id).siblings('.w-form-fail').text().trim();
    if(cur_error !== 'Oops! Something went wrong while submitting the form'){ error_msg = cur_error; }
    cur_wait = $(cur_id).find('[data-wait]').attr('data-wait'); if(cur_wait !== 'Please wait...'){ wait_msg = cur_wait; }
    cur_redirect = $(cur_id).attr('data-redirect'); if(cur_redirect !== undefined){ redirect = cur_redirect; }
    cur_action = $(cur_id).attr('action'); if(cur_action !== '/'){ action = cur_action; }
    submit_div = $(cur_id).find('[type = submit]');
    submit_txt = submit_div.attr('value');
    if(wait_msg !== ''){ submit_div.attr('value', wait_msg); }
    if($(cur_id).attr('data-send') !== undefined){ $('<input type="hidden" name="sendto" value="'+$(cur_id).attr('data-send')+'">').prependTo(cur_id); }
    $('<input type="hidden" name="Форма" value="'+$(cur_id).attr('data-name')+'">').prependTo(cur_id);
    $('<input type="hidden" name="Страница" value="'+document.location.href+'">').prependTo(cur_id);
    $('<input type="hidden" name="required_fields">').prependTo(cur_id);
    required_fields = '';
    $(cur_id).find('[required=required]').each(function(){
      required_fields = required_fields + ',' + $(this).attr('name');
    });
    $(cur_id).find('[name=required_fields]').val(required_fields);
    e.preventDefault();
    var formData = new FormData($(cur_id)[0]);
    $.ajax({
      url: action,
      type: 'POST',
      processData: false,
      contentType: false,
      data: formData
    })
    .done(function( result ) {
      if(result == 'success'){
        if(redirect !== '' && redirect !== '/-') { document.location.href = redirect; return(true); }
        $(cur_id).siblings('.w-form-fail').hide();
        replay_class = '.w-form-done';
        replay_msg = success_msg;
      } else {
        $(cur_id).siblings('.w-form-done').hide();
        result === 'ERROR_REQUIRED' ? replay_msg = 'Не заполнено обязательное поле!' : replay_msg = error_msg;
        replay_class = '.w-form-fail';
      }
      replay_div = $(cur_id).siblings(replay_class);
      //replay_div.find('div').text(replay_msg); //закоментировать, если не требуется автозамена сообщения об отправке
      replay_div.show();
      if(hide){$(cur_id).hide();}
      submit_div.attr('value', submit_txt);
      if(delay !== 0) { replay_div.delay(delay).fadeOut(); }
      if(result == 'success'){
$(cur_id).siblings('.w-form-done').show();
	  //$(cur_id).trigger("reset");

	  }
  });
  });
});
$('textarea').val('');
$('.w-form [data-name]').each(function(indx){$(this).attr('name', $(this).attr('data-name'));});
$('label[for^=file]').each(function(){
  file_id = $(this).attr('for');
  $(this).after('<input name="file[]" type="file" id="'+file_id+'" multiple style="display:none;">');
  $('input#'+file_id).change(function(){$(this).siblings('div[for]').text('Файл выбран.');});
});
