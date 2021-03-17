$(document).ready(function () {
  const jsForm = $(".js-form");
  $(".js-popup").click(function () {
    document.body.style.overflow = 'hidden';
    jsForm.fadeIn(300);
  });

  $(".js-form-close").click(function () {
    document.body.style.overflow = 'auto';
    jsForm.fadeOut(300);
  });

  jsForm.click(function (event) {
    if (!event.target.closest(".js-content")) {
      document.body.style.overflow = 'auto';
      jsForm.fadeOut(300);
    }
  });
});
