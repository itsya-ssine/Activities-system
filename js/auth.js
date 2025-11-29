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

document.addEventListener("DOMContentLoaded", () => {
    const loggedSection = document.getElementById("logged");
    const notLoggedSection = document.getElementById("not-logged");

    const user = JSON.parse(localStorage.getItem("user"));

    if (user) {
        notLoggedSection.style.display = "none";
        loggedSection.style.display = "flex";

        document.getElementById("navName").textContent = user.name;
        document.getElementById("navAvatar").src = user.avatar;
    } else {
        loggedSection.style.display = "none";
        notLoggedSection.style.display = "flex";
    }

    const logoutBtn = document.getElementById("logoutBtn");
    if (logoutBtn) {
        logoutBtn.addEventListener("click", () => {
            localStorage.removeItem("user");
            location.reload();
        });
    }
});
