 /* Sidebar Menu*/
    function openMenu() {
      document.getElementById("mySidebar").style.width = "500px";
    }

    function closeMenu() {
      document.getElementById("mySidebar").style.width = "0";
    }



   // Main Dropdown
    function toggleMenu() {
      let dropdown = document.getElementById("dropdown");
      let arrow = document.getElementById("mainArrow");
      if (dropdown.style.display === "block") {
        dropdown.style.display = "none";
        arrow.classList.remove("up");
      } else {
        dropdown.style.display = "block";
        arrow.classList.add("up");
      }
    }

    // Submenu toggle
    function toggleMenusub(item) {
      let subarrow = item.querySelector(".sub-arrow");
      let submenu = item.nextElementSibling;

      if (submenu.style.display === "block") {
        submenu.style.display = "none";
        subarrow.classList.remove("up");
      } else {
        submenu.style.display = "block";
        subarrow.classList.add("up");
      }
    }

    document.querySelectorAll(".faq-header").forEach(header => {
      header.addEventListener("click", () => {
        const content = header.nextElementSibling;
        const btn = header.querySelector(".toggle-btn");

        if (content.style.display === "block") {
          content.style.display = "none";
          btn.textContent = "+";
        } else {
          content.style.display = "block";
          btn.textContent = "–";
        }
      });
    });