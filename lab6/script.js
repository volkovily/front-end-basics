const fetchDataBtn = document.getElementById("fetchDataBtn");
const userInfoContainer = document.getElementById("userInfoContainer");

fetchDataBtn.addEventListener("click", () => {
  fetchUserData();
});

function fetchUserData() {
  fetch("https://randomuser.me/api")
    .then((response) => {
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      return response.json();
    })
    .then((data) => {
      displayUserData(data);
    })
    .catch((error) => {
      console.error(error);
    });
}

function displayUserData(data) {
  const user = data.results[0];
  const userPicture = user.picture.large;
  const userCountry = user.location.country;
  const userEmail = user.email;
  const userPhone = user.phone;
  const userCoordinates = `${user.location.coordinates.latitude}, ${user.location.coordinates.longitude}`;

  const userInfoDiv = document.createElement("div");
  userInfoDiv.classList.add("user-info-block");
  userInfoDiv.innerHTML = `
            <img src="${userPicture}" alt="User Picture">
            <p><strong>Country:</strong> ${userCountry}</p>
            <p><strong>Email:</strong> ${userEmail}</p>
            <p><strong>Phone:</strong> ${userPhone}</p>
            <p><strong>Coordinates:</strong> ${userCoordinates}</p>
        `;

  userInfoContainer.appendChild(userInfoDiv);
}
