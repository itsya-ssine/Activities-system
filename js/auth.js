document.getElementById("openRegister").addEventListener("click", () => {
    document.getElementById("loginBox").classList.add("hidden");
    document.getElementById("registerBox").classList.remove("hidden");
});

document.getElementById("backToLogin").addEventListener("click", () => {
    document.getElementById("registerBox").classList.add("hidden");
    document.getElementById("loginBox").classList.remove("hidden");
});

const typeButtons = document.querySelectorAll(".type-btn");
typeButtons.forEach(btn => {
    btn.addEventListener("click", () => {
        typeButtons.forEach(b => b.classList.remove("active"));
        btn.classList.add("active");

        const selectedType = btn.dataset.type;
        console.log("Login as:", selectedType);
    });
});
