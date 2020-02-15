var backdrop = document.querySelector(".backdrop");
var modal = document.querySelector(".modal");
var modalNoButton = document.querySelector(".modal__action--negative");
var selectPlanButtons = document.querySelectorAll(".plan button");
var toggleButton = document.querySelector(".toggle-button");
var mobileNav = document.querySelector(".mobile-nav");

// console.dir(backdrop.style['background-image']);

// console.dir(backdrop);
for (var i = 0; i < selectPlanButtons.length; i++) {
    selectPlanButtons[i].addEventListener("click", function() {
        // modal.style.display = "block";
        // backdrop.style.display = "block";
        // modal.className = 'open'; // This will actually overwrite the complete class list
        modal.classList.add("open");
        backdrop.classList.add("open");
    });
}

backdrop.addEventListener("click", function() {
    // mobileNav.style.display = 'none';
    mobileNav.classList.remove("open");
    closeModal();
});

if (modalNoButton) {
    modalNoButton.addEventListener("click", closeModal);
}

function closeModal() {
    //   backdrop.style.display = "none";
    //   modal.style.display = "none";
    if (modal) {
        modal.classList.remove("open");
    }
    backdrop.classList.remove("open");
}

toggleButton.addEventListener("click", function() {
    // mobileNav.style.display = 'block';
    // backdrop.style.display = 'block';
    mobileNav.classList.add("open");
    backdrop.classList.add("open");
});

$(function () {
    //zoom img onclick
    $(".zoom").click(function () {
        $(".hover-buttons").css("visibility", "hidden");
        $(".overlay").addClass("active");
        $(".popup").addClass("active");

        var activeImg = $(this).attr("href");
        $(activeImg).fadeIn();
    });
    //close img onclick
    $(".close").click(function () {
        $(".overlay").removeClass("active");
        $(".popup").removeClass("active");
        $(".full-image").hide();
        $(".hover-buttons").css("visibility", "visible");
    });

    $(document).on("click", ".overlay", function() {
        $(".overlay").removeClass("active");
        $(".popup").removeClass("active");
        $(".full-image").hide();
        $(".hover-buttons").css("visibility", "visible");
    });

    $(".overlay").click(function () {
        $(".overlay").removeClass("active");
        $(".popup").removeClass("active");
        $(".full-image").hide();
        $(".hover-buttons").css("visibility", "visible");
    });
});