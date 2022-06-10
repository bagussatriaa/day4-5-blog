function submitThis() {
  let name = document.getElementById("name").value;
  let email = document.getElementById("email").value;
  let phone = document.getElementById("phone").value;
  let subject = document.getElementById("subject").value;
  let message = document.getElementById("input-message").value;

  if (name == "") {
    return alert("Mohon mengisi nama anda");
  } else if (email == "") {
    return alert("Mohon mengisi email anda");
  } else if (phone == "") {
    return alert("Mohon mengisi nomor telepon anda");
  } else if (message == "") {
    return alert("Mohon mengisi pesan anda");
  }
  let emailPenerima = "admin@mail.com";
  let anchor = document.createElement("a");

  anchor.href = `mailto:${emailPenerima}?subject=${subject}&body=Hello my name  ${name}.  ${message}`;
  anchor.click();

  console.log(name);
  console.log(email);
  console.log(phone);
  console.log(subject);
  console.log(message);
}
