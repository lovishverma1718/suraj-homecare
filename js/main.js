/* Suraj Home Care Ltd. — site scripts */
(function () {
  // Business email used by the contact & careers forms.
  // TODO: replace with the real address once the domain is purchased.
  var BUSINESS_EMAIL = "info@surajhomecare.ca";

  // Sticky header shadow + back-to-top button
  var header = document.querySelector(".header");
  var toTop = document.querySelector(".to-top");
  function onScroll() {
    var y = window.scrollY;
    if (header) header.classList.toggle("scrolled", y > 10);
    if (toTop) toTop.classList.toggle("show", y > 500);
  }
  window.addEventListener("scroll", onScroll, { passive: true });
  onScroll();
  if (toTop) toTop.addEventListener("click", function () { window.scrollTo({ top: 0, behavior: "smooth" }); });

  // Mobile menu
  var toggle = document.querySelector(".menu-toggle");
  var nav = document.querySelector(".nav");
  if (toggle && nav) {
    toggle.addEventListener("click", function () {
      var open = nav.classList.toggle("open");
      toggle.setAttribute("aria-expanded", open);
      toggle.innerHTML = open ? '<i class="fa-solid fa-xmark"></i>' : '<i class="fa-solid fa-bars"></i>';
    });
    nav.querySelectorAll("a").forEach(function (a) {
      a.addEventListener("click", function () { nav.classList.remove("open"); });
    });
  }

  // Reveal-on-scroll
  var items = document.querySelectorAll(".reveal");
  if ("IntersectionObserver" in window) {
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (e) {
        if (e.isIntersecting) { e.target.classList.add("in"); io.unobserve(e.target); }
      });
    }, { threshold: 0.12 });
    items.forEach(function (el) { io.observe(el); });
  } else {
    items.forEach(function (el) { el.classList.add("in"); });
  }

  // Animated counters
  var counters = document.querySelectorAll("[data-count]");
  if ("IntersectionObserver" in window && counters.length) {
    var co = new IntersectionObserver(function (entries) {
      entries.forEach(function (e) {
        if (!e.isIntersecting) return;
        var el = e.target, end = parseInt(el.getAttribute("data-count"), 10), suffix = el.getAttribute("data-suffix") || "";
        var start = null;
        function step(t) {
          if (!start) start = t;
          var p = Math.min((t - start) / 1600, 1);
          el.textContent = Math.floor(p * end) + suffix;
          if (p < 1) requestAnimationFrame(step);
        }
        requestAnimationFrame(step);
        co.unobserve(el);
      });
    }, { threshold: 0.5 });
    counters.forEach(function (el) { co.observe(el); });
  }

  // Current year
  document.querySelectorAll("[data-year]").forEach(function (el) { el.textContent = new Date().getFullYear(); });

  // Static-site forms: compose an email in the visitor's mail app.
  // (Swap for Formspree/Netlify Forms later by setting a form "action" and removing data-mailto.)
  document.querySelectorAll("form[data-mailto]").forEach(function (form) {
    form.addEventListener("submit", function (ev) {
      ev.preventDefault();
      if (!form.reportValidity()) return;
      var subject = form.getAttribute("data-subject") || "Website enquiry";
      var lines = [];
      form.querySelectorAll("input, select, textarea").forEach(function (f) {
        if (!f.name || f.type === "file" || f.type === "checkbox") return;
        var label = form.querySelector('label[for="' + f.id + '"]');
        var name = label ? label.textContent.replace("*", "").trim() : f.name;
        if (f.value) lines.push(name + ": " + f.value);
      });
      if (form.querySelector('input[type="file"]')) {
        lines.push("", "(Please attach your resume to this email before sending.)");
      }
      var who = form.querySelector('[name="name"]');
      if (who && who.value) subject += " — " + who.value;
      window.location.href = "mailto:" + BUSINESS_EMAIL +
        "?subject=" + encodeURIComponent(subject) +
        "&body=" + encodeURIComponent(lines.join("\n"));
      var ok = form.querySelector(".form-success");
      if (ok) ok.classList.add("show");
    });
  });
})();
