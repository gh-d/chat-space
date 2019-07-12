$(function(){
  function buildHTML(message){
    var image_url = (message.image_url)? `<image class="lower-message_image" src="${message.image_url}">`:"";
    var html = `<div class="message" id='${message.id}'>
                  <div class="upper-message" >
                    <div class="upper-message__name">
                    ${message.name}
                    </div>
                    <div class="upper-message__time">
                    ${message.time}
                  </div>
                </div>
                  <div class="lower-message">
                    <p class="lower-message__content"></p>
                    ${message.content}
                    ${image_url}
                  </div>`
    return html;
  }
  

  var reloadMessages = function(){
    last_message_id = $(".message:last").data("id");
    console.log(last_message_id)
    $.ajax({
      url: "api/messages",
      type: 'get',
      dataType: 'json',
      data: {last_message_id: last_message_id}
    })

    .done(function(messages){
      console.log(messages)
      messages.forEach(function(message){
        console.log(message)
        if(message !== null){
          var html = buildHTML(message);
          $('.messages').append(html);
          $('.messages').animate({scrollTop: $('.messages')[0].scrollHeight}, 'fast');
        };
      });
    })

    .fail(function(){
      alert('error');
    });
  };

  if(window.location.href.match("messages")){
    setInterval(reloadMessages, 5000);
  };
});