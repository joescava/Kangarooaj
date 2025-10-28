// Menú móvil accesible
const btn = document.querySelector(".nav-toggle");
const nav = document.getElementById("nav");
if (btn && nav) {
  btn.addEventListener("click", () => {
    const expanded = btn.getAttribute("aria-expanded") === "true";
    btn.setAttribute("aria-expanded", String(!expanded));
    nav.setAttribute("aria-expanded", String(!expanded));
  });
}
// Micro-interacción buttons
document.querySelectorAll(".btn,.card").forEach(el=>{
  el.addEventListener("pointerenter",()=>{el.style.transform="translateY(-1px)";});
  el.addEventListener("pointerleave",()=>{el.style.transform="translateY(0)";});
});