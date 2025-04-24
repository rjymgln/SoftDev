const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("show");
        } else {
          entry.target.classList.remove("show");
        }
      });
    },
    {
      threshold: 0.2, 
    }
  );
  
  const cafeElements = document.querySelectorAll(".homepage, .product_selection, .about_us, .story_of_cafe, .vision_and_mission, .contact, .Frappe, .about_us_two, .cafehome");
  cafeElements.forEach((cafe) => observer.observe(cafe));