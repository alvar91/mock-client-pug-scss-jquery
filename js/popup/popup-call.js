$(document).ready(function () {
    const jsForm = $(".js-form-call");
    $(".js-popup-call").click(function () {
      document.body.style.overflow = 'hidden';
      jsForm.fadeIn(300);

    });
  
    $(".js-form-close-call").click(function () {
      document.body.style.overflow = 'auto';
      jsForm.fadeOut(300);
    });
  
    jsForm.click(function (event) {
      if (!event.target.closest(".js-content-call")) {
        document.body.style.overflow = 'auto';
        jsForm.fadeOut(300);
      }
    });
  });
  