const url = "http://localhost:3000/api/send";

const data = {
  name: "Piotr",
  content: "dupadupadupa",
  email: "abcdefg@gmail.com",
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
