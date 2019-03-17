$(function () {
    function buildHTML(message) {
      image = (message.image) ? `<img class= "chatroom__main__message__image" srcsrc=${message.image}>` : "";
      var html =
        `<div class="chatroom__main__box">
          <div class="chatroom__main__info flex">
            <div class="chatroom__main__messanger">
              ${message.user.name}
            </div>
            <div class="chatroom__main__info__dates">
              ${message.created_at}
            </div>
          </div>
          <div class="chatroom__main__message">
              ${message.content}
            ${image}
          </div>
        </div>`
      return html;
    }
  },

  function ScrollTOMessage() {
    $('.chatroom__main').animate({
      scrollTop: $('.chatroom__main')[0].scrollHeight
    }, 'fast');
  },

  $('#new_message').on('submit', function (e) {
    e.preventDefault();
    var formData = new FormData(this);
    var url = $(this).attr('action');
    $.ajax({
        url: url,
        type: "POST",
        data: formData,
        dataType: 'json',
        processData: false,
        contentType: false
      })
      .done(function (data) {
        var html = buildHTML(data);
        $('.chatroom_main').append(html);
        ScrollToNewMessage();
        $('.form__message').val('');
        $(".form__submit").prop('disabled', false);
      })
      .fail(function () {
        alert('error');
      });
  })


)