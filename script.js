document.addEventListener("DOMContentLoaded", () => {
    // Set current year in footer
    document.getElementById("current-year").textContent = new Date().getFullYear()
  
    // Mobile Menu Toggle
    const mobileMenuBtn = document.querySelector(".mobile-menu-btn")
    const mobileMenuClose = document.querySelector(".mobile-menu-close")
    const mobileMenu = document.querySelector(".mobile-menu")
  
    if (mobileMenuBtn && mobileMenuClose && mobileMenu) {
      mobileMenuBtn.addEventListener("click", () => {
        mobileMenu.classList.add("active")
        document.body.style.overflow = "hidden"
      })
  
      mobileMenuClose.addEventListener("click", () => {
        mobileMenu.classList.remove("active")
        document.body.style.overflow = ""
      })
    }
  
    // Testimonial Tabs
    const tabBtns = document.querySelectorAll(".tab-btn")
    const tabPanes = document.querySelectorAll(".tab-pane")
  
    if (tabBtns.length && tabPanes.length) {
      tabBtns.forEach((btn) => {
        btn.addEventListener("click", function () {
          const tabId = this.dataset.tab
  
          // Remove active class from all buttons and panes
          tabBtns.forEach((btn) => btn.classList.remove("active"))
          tabPanes.forEach((pane) => pane.classList.remove("active"))
  
          // Add active class to current button and pane
          this.classList.add("active")
          document.getElementById(tabId).classList.add("active")
        })
      })
    }
  
    // Quick View Modal
    const quickViewBtns = document.querySelectorAll(".product-actions .btn-secondary")
    const quickViewModal = document.getElementById("quickViewModal")
    const modalClose = document.querySelector(".modal-close")
  
    if (quickViewBtns.length && quickViewModal && modalClose) {
      quickViewBtns.forEach((btn) => {
        btn.addEventListener("click", (e) => {
          e.preventDefault()
          quickViewModal.classList.add("active")
          document.body.style.overflow = "hidden"
        })
      })
  
      modalClose.addEventListener("click", () => {
        quickViewModal.classList.remove("active")
        document.body.style.overflow = ""
      })
  
      quickViewModal.addEventListener("click", (e) => {
        if (e.target === quickViewModal) {
          quickViewModal.classList.remove("active")
          document.body.style.overflow = ""
        }
      })
    }
  
    // Quantity Selector in Quick View
    const minusBtn = document.querySelector(".quantity-btn.minus")
    const plusBtn = document.querySelector(".quantity-btn.plus")
    const quantityInput = document.querySelector(".quantity-buttons input")
  
    if (minusBtn && plusBtn && quantityInput) {
      minusBtn.addEventListener("click", () => {
        const value = Number.parseInt(quantityInput.value)
        if (value > 1) {
          quantityInput.value = value - 1
        }
      })
  
      plusBtn.addEventListener("click", () => {
        const value = Number.parseInt(quantityInput.value)
        if (value < 99) {
          quantityInput.value = value + 1
        }
      })
    }
  
    // Option Buttons in Quick View
    const optionBtns = document.querySelectorAll(".option-btn")
  
    if (optionBtns.length) {
      optionBtns.forEach((btn) => {
        btn.addEventListener("click", function () {
          // Remove active class from all buttons in the same group
          const parent = this.parentElement
          const buttons = parent.querySelectorAll(".option-btn")
          buttons.forEach((btn) => btn.classList.remove("active"))
  
          // Add active class to clicked button
          this.classList.add("active")
        })
      })
    }
  
    // Add to Cart Animation
    const addToCartBtns = document.querySelectorAll(".product-actions .btn-primary")
    const cartCount = document.querySelector(".cart-count")
  
    if (addToCartBtns.length && cartCount) {
      addToCartBtns.forEach((btn) => {
        btn.addEventListener("click", (e) => {
          e.preventDefault()
  
          // Update cart count
          const count = Number.parseInt(cartCount.textContent)
          cartCount.textContent = count + 1
  
          // Add animation class
          cartCount.classList.add("pulse")
  
          // Remove animation class after animation completes
          setTimeout(() => {
            cartCount.classList.remove("pulse")
          }, 300)
  
          // Show success message
          alert("Sản phẩm đã được thêm vào giỏ hàng!")
        })
      })
    }
  
    // Newsletter Form Submission
    const newsletterForm = document.querySelector(".newsletter-form")
  
    if (newsletterForm) {
      newsletterForm.addEventListener("submit", function (e) {
        e.preventDefault()
  
        const emailInput = this.querySelector('input[type="email"]')
        const email = emailInput.value.trim()
  
        if (email) {
          // In a real application, you would send this to your server
          alert("Cảm ơn bạn đã đăng ký! Chúng tôi sẽ gửi thông tin ưu đãi đến " + email)
          emailInput.value = ""
        } else {
          alert("Vui lòng nhập địa chỉ email của bạn.")
        }
      })
    }
  
    // Smooth scroll for anchor links
    const anchorLinks = document.querySelectorAll('a[href^="#"]:not([href="#"])')
  
    if (anchorLinks.length) {
      anchorLinks.forEach((link) => {
        link.addEventListener("click", function (e) {
          e.preventDefault()
  
          const targetId = this.getAttribute("href")
          const targetElement = document.querySelector(targetId)
  
          if (targetElement) {
            const offsetTop = targetElement.getBoundingClientRect().top + window.pageYOffset
  
            window.scrollTo({
              top: offsetTop,
              behavior: "smooth",
            })
  
            // Close mobile menu if open
            if (mobileMenu && mobileMenu.classList.contains("active")) {
              mobileMenu.classList.remove("active")
              document.body.style.overflow = ""
            }
          }
        })
      })
    }
  
    // Add animation class to elements when they come into view
    const animateOnScroll = () => {
      const elements = document.querySelectorAll(".animate-on-scroll")
  
      elements.forEach((element) => {
        const elementPosition = element.getBoundingClientRect().top
        const windowHeight = window.innerHeight
  
        if (elementPosition < windowHeight - 100) {
          element.classList.add("animated")
        }
      })
    }
  
    // Run on load
    animateOnScroll()
  
    // Run on scroll
    window.addEventListener("scroll", animateOnScroll)
  })
  
  