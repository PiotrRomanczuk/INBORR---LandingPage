const url = "http://localhost:3000/api/testingRoute";

console.log(url);

const data = {
  email: "piotr@gmail.com",
  content: "dupa",
};

fetch(url, {
  method: "POST",
  headers: {
    "Content-Type": "application/json",
  },
  body: JSON.stringify(data),
})
  .then((response) => response.json())
  .then((data) => {
    console.log("Success:", data);
  })
  .catch((error) => {
    console.error("Error:", error);
  });
