const fields = document.querySelectorAll("input");
const button = document.querySelector(".submit");

const name = document.querySelector(".pib");
const group = document.querySelector(".group");
const phone = document.querySelector(".phone");
const id = document.querySelector(".id-card");
const faculty = document.querySelector(".faculty");

const patterns = {
    name: /^.+ [A-Za-zА-Яа-яЁҐЄІЇ]\.[A-Za-zА-Яа-я]\.$/,
    group: /^[A-ZА-Яа-яЁҐЄІЇ]{2}-\d{2}$/,
    phone: /^\(\d{3}\)-\d{3}-\d{2}-\d{2}$/,
    id: /^[A-Za-zА-Яа-яЁҐЄІЇ]{2} №\d{6}$/,
    faculty: /^[A-Za-zА-Яа-яЁҐЄІЇ]+$/,
  };

  button.addEventListener("click", () => {
    verifyData(patterns.name, name, ".info-pib", "ПІБ");
    verifyData(patterns.group, group, ".info-group", "Група");
    verifyData(patterns.phone, phone, ".info-phone", "Телефон");
    verifyData(patterns.id, id, ".info-id", "ID-card");
    verifyData(patterns.faculty, faculty, ".info-faculty", "Факультет");
  });
  

function verifyData(pattern, enteredData, className, label) {
    const field = document.querySelector(className);
    const isValid = pattern.test(enteredData.value);
  
    if (isValid) {
      if (!field.textContent.includes(enteredData.value)) {
        field.innerHTML = `${label}: ${enteredData.value}`;
      }
    } else {
      enteredData.style.color = "red";
    }
  }

fields.forEach((input) => {
    input.addEventListener("input", () => {
      input.style.color = "black";
    });
  });