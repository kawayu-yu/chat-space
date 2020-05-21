$(function() {
    function buildHTML(message) {
      if ( message.image ) {
        var html =
          `<div class="message">
            <div class="main-message__info">
              <div class="main-message__info--name">
                ${message.user_name}
              </div>
              <div class="main-message__info--date">
                ${message.created_at}
              </div>
            </div>
              <div class="main-message__text">
                <p class="maim-message__text--comment">
                  ${message.body}
                </p>
                <img class="image" src=${message.image} alt="Test">
              </div>
          </div>`
          return html;
      } else {
        var html = 
        `<div class="message">
          <div class="main-message__info">
            <div class="main-message__info--name">
              ${message.user_name}
            </div>
            <div class="main-message__info--date">
              ${message.created_at}
            </div>
          </div>
            <div class="main-message__text">
              <p class="maim-message__text--comment">
                ${message.body}
              </p>
            </div>
        </div>`
          return html;
      }
    }



  $('#new_message').on('submit', function(e) {
    e.preventDefault()
    var formData = new FormData(this);
    var url = $(this).attr('action')

    $.ajax({
      url: url,
      type: "POST",
      data: formData,
      dataType: 'json',
      processData: false,
      contentType: false
    })
      .done(function(data) {
        var html = buildHTML(data);
        $(".main-message").append(html);
        $('form')[0].reset();
        $('.chat-main__message-list').animate({ scrollTop: $('.chat-main__message-list')[0].scrollHeight});
        $('.form__submit-btn').prop('disabled', false);
      })
      .fail(function() {
          alert("メッセージの送信に失敗しました")
      });
  })

  var reloadMessages = function() {
    var last_message_id = $('.message:last').data("message-id");
    $.ajax({
      url: "api/messages",
      type: 'get',
      dataType: 'json',
      data: {id: last_message_id}
    })
    .done(function(messages) {
      console.log('success');
    })
    .fail(function() {
      alert('error');
    });
  };
});