
document.addEventListener("DOMContentLoaded", function() {
  

  const form = document.getElementById("orderForm");


  form.addEventListener("submit", function(event) {
    event.preventDefault(); 


    const name = form.name.value.trim();
    const phone = form.phone.value.trim();
    const address = form.address.value.trim();


    if (name === "" || phone === "" || address === "") {
      alert("Пожалуйста, заполните все обязательные поля!");
      return;
    }


    const phonePattern = /^[0-9\-\+\(\)\s]+$/;
    if (!phonePattern.test(phone)) {
      alert("Введите корректный номер телефона!");
      return;
    }

    alert(`Спасибо, ${name}! Ваша заявка на эвакуацию принята.`);


    form.reset();
  });


  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener("click", function(e) {
      e.preventDefault();
      const targetId = this.getAttribute("href");
      document.querySelector(targetId).scrollIntoView({
        behavior: "smooth"
      });
    });
  });
});
