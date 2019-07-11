$(function(){
  function buildHTML(message){
    // var image = (message.image.url) ? `<p><img src="${message.image.url}"></p>` : "";
    
      if (message.content && message.image.url) {
        //data-idが反映されるようにしている
        var html = `<div class="message" data-id= &{message.id}  > 
          <div class="upper-message">
            <div class="upper-message__user-name">
              ${message.user_name}
            </div>
            <div class="upper-message__date">
              ${message.created_at} 
            </div>
          </div>
          <div class="lower-message">
            <p class="lower-message__content">
              ${message.content}
            </p>
            <img src=" message.image.url  " class="lower-message__image" >
          </div>
        </div>`
      } else if (message.content) {
        //同様に、data-idが反映されるようにしている
        var html = `<div class="message" data-id=  ${message.id} >
          <div class="upper-message">
            <div class="upper-message__user-name">
              ${message.user_name} 
            </div>
            <div class="upper-message__date">
              ${message.created_at} 
            </div>
          </div>
          <div class="lower-message">
            <p class="lower-message__content">
              ${message.content}
            </p>
          </div>
        </div>`
      } else if (message.image.url) {
        //同様に、data-idが反映されるようにしている
        var html = `<div class="message" data-id= ${message.id} >
          <div class="upper-message">
            <div class="upper-message__user-name">
              ${message.user_name }
            </div>
            <div class="upper-message__date">
              ${message.created_at}
            </div>
          </div>
          <div class="lower-message">
            <img src=" ${message.image.url} " class="lower-message__image" >
          </div>
        </div>`
      };
      return html;
    };
   
  
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
      $('.messages').append(html);
      $('#message_content').val('');
      $('#message_image').val('');
      $('.messages').animate({scrollTop: $('.messages')[0].scrollHeight}, 'fast');
    })
    .fail(function(){
      alert('エラー');
    });
  })

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