const joinBtns = document.querySelectorAll(".join-btn");
const form = document.getElementById("joinForm");
const overlay = document.getElementById("overlay");
const closeBtn = document.querySelector(".close-btn");
const formTitle = document.getElementById("formTitle");

joinBtns.forEach(btn => {
    btn.addEventListener("click", () => {
        const clubName = btn.parentElement.querySelector(".club-title").textContent;
        formTitle.textContent = `Join ${clubName}`;

        form.style.display = "block";
        overlay.style.display = "block";
        document.body.classList.add("blurred");
    });
});

function closeForm() {
    form.style.display = "none";
    overlay.style.display = "none";
    document.body.classList.remove("blurred");
}

closeBtn.addEventListener("click", closeForm);
overlay.addEventListener("click", closeForm);