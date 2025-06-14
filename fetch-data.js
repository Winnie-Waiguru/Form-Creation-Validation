document.addEventListener("DOMContentLoaded", function () {
  async function fetchUserData() {
    const apiUrl = "https://jsonplaceholder.typicode.com/users";
    const dataContainer = document.getElementById("api-data");

    try {
      const response = await fetch(apiUrl); //Fetch data from the API
      const users = await response.json(); //convert response to JSON

      dataContainer.innerHTML = ""; //    Clear data container
      const userList = document.createElement("ul");

      // Loop through the users
      users.forEach((user) => {
        const listItem = document.createElement("li");
        listItem.textContent = user.name;
        userList.appendChild(listItem); // Add li to ul
      });

      dataContainer.appendChild(userList); // Add the complete list to the div
    } catch (error) {
      //clear content of data container
      dataContainer.innerHTML = "";
      dataContainer.textContent = "Failed to load user data.";
    }
  }

  fetchUserData();
});
