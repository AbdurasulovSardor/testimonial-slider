const testimonials = [
  {
    name: "John Sawyer",
    job: "CEO",
    image: "test.png",
    testimonial: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae voluptas blanditiis voluptatem perspiciatis nostrum quasi in voluptatum quis dignissimos vero culpa nesciunt ullam, consectetur rem, fugiat minus, quisquam repellendus nulla!"
  },
  {
    name: "Jamal Sawyer",
    job: "CEO",
    image: "test.png",
    testimonial: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae voluptas blanditiis voluptatem perspiciatis nostrum quasi in voluptatum quis dignissimos vero culpa nesciunt ullam, consectetur rem, fugiat minus, quisquam repellendus nulla!"
  },
  {
    name: "Sarah Sawyer",
    job: "CEO",
    image: "test.png",
    testimonial: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae voluptas blanditiis voluptatem perspiciatis nostrum quasi in voluptatum quis dignissimos vero culpa nesciunt ullam, consectetur rem, fugiat minus, quisquam repellendus nulla!"
  },
]

let i = 0
let j = testimonials.length

let testimonialContainer = document.getElementById("testimonial-container")
let nextBtn = document.getElementById("next")
let prevBtn = document.getElementById("prev")

nextBtn.addEventListener("click", () => {
  i = (j + i + 1) % j
  displayTestimonial()
})

prevBtn.addEventListener("click", () => {
  i = (j + i - 1) % j
  displayTestimonial()
})

let displayTestimonial = () => {
  testimonialContainer.innerHTML = `
    <p>${testimonials[i].testimonial}</p>
    <div class="image"></div>
    <h3>${testimonials[i].name}</h3>
    <h6>${testimonials[i].job}</h6>
  `
}

displayTestimonial()