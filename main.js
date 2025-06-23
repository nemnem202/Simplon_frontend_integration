document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("form");

  form.addEventListener("submit", (event) => {
    event.preventDefault(); // pour ne pas recharger la page
    const formData = new FormData(form);
    const values = {};
    for (const [key, value] of formData.entries()) {
      values[key] = value;
    }
    console.warn("form was not submitted: ", values);
  });
});
