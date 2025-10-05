// Ждём, пока страница загрузится
document.addEventListener("DOMContentLoaded", function() {
  
  // Находим форму по ID
  const form = document.getElementById("orderForm");

  // Обработка отправки формы
  form.addEventListener("submit", function(event) {
    event.preventDefault(); // Отменяем стандартную отправку

    // Получаем значения из полей формы
    const name = form.name.value.trim();
    const phone = form.phone.value.trim();
    const address = form.address.value.trim();

    // Простая валидация: проверяем, чтобы поля не были пустыми
    if (name === "" || phone === "" || address === "") {
      alert("Пожалуйста, заполните все обязательные поля!");
      return;
    }

    // Можно добавить простую проверку телефона
    const phonePattern = /^[0-9\-\+\(\)\s]+$/;
    if (!phonePattern.test(phone)) {
      alert("Введите корректный номер телефона!");
      return;
    }

    // Если всё хорошо — показываем уведомление
    alert(`Спасибо, ${name}! Ваша заявка на эвакуацию принята.`);

    // Очищаем форму
    form.reset();
  });

  // Плавная прокрутка при клике по меню
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
