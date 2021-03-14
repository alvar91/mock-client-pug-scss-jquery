$(document).ready(function () {
    const jsForm = $(".js-form-call");
    $(".js-popup-call").click(function () {
      jsForm.fadeIn(300);
    });
  
    $(".js-form-close-call").click(function () {
      jsForm.fadeOut(300);
    });
  
    jsForm.click(function (event) {
      if (!event.target.closest(".js-content-call")) {
        jsForm.fadeOut(300);
      }
    });
  });
  