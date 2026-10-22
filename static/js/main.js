function toggleMenu() {
  const navLinks = document.querySelector(".nav-links");
  navLinks.classList.toggle("active");
}

// مراقبة الضغطات في الصفحة لإغلاق القائمة عند الضغط بالخارج
document.addEventListener("click", function (event) {
  const navLinks = document.querySelector(".nav-links");
  const toggleBtn = document.querySelector(".toggle");

  // إذا كانت القائمة مفتوحة، والضغطة تمت خارج القائمة وخارج زر الفتح
  if (
    navLinks.classList.contains("active") &&
    !navLinks.contains(event.target) &&
    !toggleBtn.contains(event.target)
  ) {
    navLinks.classList.remove("active");
  }
});
