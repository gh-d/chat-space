$(function(){
  function buildHTML(message){
    var image = (message.image.url) ? `<p><img src="${message.image.url}"></p>` : "";
    var html = `<div class="message">
                  <div class="upper-message">
                    <div class="upper-message__user-name">
                      ${message.name}
                    </div>  
                    <div class="upper-message__date">
                      ${message.date}
                    </div>
                  </div>
                  <div class="lower-message">
                    <p class="lower-message__content">
                      ${message.content}
                    </p>
                  </div>
                  <div class="lower-message__image">
                    ${image}
                  </div>
                </div>`
    return html;
  }
  $('#new_message').on('submit',function(e){
   e.preventDefault();
    var formData = new FormData(this);
    var url =$(this).attr('action');
  $.ajax({
    url: url,
    type: "POST",
    data: formData,
    dataType: 'json',
    processData: false,
    contentType: false
  })
  .done(function(data){
    var html = buildHTML(data);
    $('.messages').append(html)
    $('#message_content').val('')
    $('.messages').animate({scrollTop: $('.messages')[0].scrollHeight}, 'fast');
  })
  .fail(function(){
    alert('エラー');
  })
  });
});