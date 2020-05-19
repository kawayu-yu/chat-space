$(function() {
    function buildHTML(message) {
      if ( message.image ) {
        var html =
        `
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
              </div>`
          return html;
      } else {
        var html = 
          `<div class="main-message__info">
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
            </div>`
          return html;
      }
    }



  $('#new_message').on('submit', function(e) {
    e.preventDefault()
    var formData = new FormData(this);
    var url = $(this).attr('action')

    console.log(url);
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
        console.log(html);
      })
  })
});