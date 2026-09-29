const searchForm=document.querySelector("[data-search-form]");
if(searchForm){
  searchForm.addEventListener("submit",e=>{
    e.preventDefault();
    const q=(document.querySelector("#site-search")?.value||"").trim().toLowerCase();
    document.querySelectorAll("[data-article-card]").forEach(card=>{
      card.classList.toggle("hidden",!!q&&!card.innerText.toLowerCase().includes(q));
    });
    const status=document.querySelector("#search-status");
    if(status) status.textContent=q?"Showing matching articles for: "+q:"Showing all articles";
  });
}
document.querySelectorAll("[data-filter]").forEach(btn=>{
  btn.addEventListener("click",()=>{
    document.querySelectorAll("[data-filter]").forEach(b=>b.classList.remove("active"));
    btn.classList.add("active");
    const category=btn.dataset.filter;
    document.querySelectorAll("[data-article-card]").forEach(card=>{
      card.classList.toggle("hidden",category!=="All"&&card.dataset.category!==category);
    });
    const status=document.querySelector("#search-status");
    if(status) status.textContent=category==="All"?"Showing all articles":"Showing category: "+category;
  });
});
const contactForm=document.querySelector("#contact-form");
if(contactForm){
  contactForm.addEventListener("submit",e=>{
    e.preventDefault();
    const name=document.querySelector("#name").value.trim();
    const email=document.querySelector("#email").value.trim();
    const message=document.querySelector("#message").value.trim();
    const subject=encodeURIComponent("SmartAITutorials website enquiry");
    const body=encodeURIComponent(`Name: ${name}\nEmail: ${email}\n\n${message}`);
    // Replace this address with an email you control before publishing.
    window.location.href=`mailto:hello@example.com?subject=${subject}&body=${body}`;
    document.querySelector("#form-note").textContent="Your email app should open. Replace hello@example.com with your real contact email before publishing.";
  });
}
