function toggleDetail(e) {
  const target = $(e.target);

  const item = $(target).parents();

  const detail = $(item).children('.exp-detail');

  $(detail).slideToggle();

  if ($(target).hasClass('active')) {
    $(target).html('Info Detail').removeClass('active');
  } else {
    $(target).html('Baca Info').addClass('active');
  }
}
