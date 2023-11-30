function valdiationForm(e) {
  e.preventDefault();
  const email = $('#inp-email');
  const nama = $('#inp-nama');
  const phone = $('#inp-phone-number');
  const message = $('#inp-message');
  if (!$(email).val()) {
    alert('Nama Wajib Di isi');
  } else if (!$(nama).val()) {
    alert('Email Wajib Diisi');
  } else if (!$(phone).val()) {
    alert('Nomor Hp Wajib Di isi');
  } else if (!$(message).val()) {
    alert('Pesan Wajib Diisi');
  } else {
    $(nama).val('');
    $(email).val('');
    $(phone).val('');
    $(message).val('');
    alert('Berhasil Dikirim');
  }
}
let promptValue = prompt('Siapa Nama Kamu?');
alert(`Selamat Datang ${promptValue} Di Website Portofolio Saya`);
