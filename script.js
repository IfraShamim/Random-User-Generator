document.getElementById("fetchUser").addEventListener("click", fetchUserData);
function fetchUserData() {
  fetch("https://randomuser.me/api/")
    .then((response) => {
      if (!response.ok) {
        throw new Error("Error");
      }
      return response.json();
    })
    .then((data) => {
      document.getElementById(
        "display"
      ).innerHTML = `Name: ${data.results[0].name.first} ${data.results[0].name.last}<br/>
      Gender: ${data.results[0].gender}<br/>
      Age: ${data.results[0].dob.age}<br/>
      City: ${data.results[0].location.city}<br/>`;
    })
    .catch((error) => {
      console.log(error);
    });
}
