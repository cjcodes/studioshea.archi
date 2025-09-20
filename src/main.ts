import "./style.css";

document
  ?.getElementById("contact")
  ?.addEventListener("submit", (e: SubmitEvent) => {
    e.preventDefault();

    const form = e.currentTarget;

    if (form && form instanceof HTMLFormElement) {
      grecaptcha.ready(function () {
        grecaptcha
          .execute("6LfZf88rAAAAAL7Jc8esU-j4a_v6Vu-z_K_XouGx", {
            action: "submit",
          })
          .then(function (token) {
            const body = new FormData(form);
            body.append("g-recaptcha-response", token);

            fetch(form.action, {
              method: form.method,
              body,
              headers: {
                Accept: "application/json",
              },
            });
          });
      });
    }
  });

const copy = document?.getElementById("copyright");

if (copy) {
  copy.innerHTML = copy.innerHTML.replace(
    "©",
    "© " + new Date().getFullYear(),
  );
}
