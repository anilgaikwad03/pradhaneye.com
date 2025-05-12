const sideMenu = document.querySelector('#sideMenu');

function openMenu(){
    sideMenu.style.transform = 'translateX(-16rem)';
}

function closeMenu(){
    sideMenu.style.transform = 'translateX(16rem)';
}


{/* <a href="" target="_blank"
      class="hidden xl:flex items-center hover:bg-[#24bf5e] text-white bg-[#22a854] transition duration-500 font-semibold tracking-[1px] text-md gap-2 px-6 py-1.5 rounded-full ml-2">
      <img src="./images/whatsapp-icon.png" alt="" class="w-7"> +919881004304</a> */}

class MyHeader extends HTMLElement{
    connectedCallback(){
        this.innerHTML=`
        <nav class="w-full fixed px-5 xl:px-[6%] py-2 flex items-center justify-between z-50 bg-white shadow-[0px_4px_6px_0px_rgba(59,_130,_246,_0.5)]">

    <a href="./index.html"><img src="./images/pradhan-nabh-logo.png" alt="Pradhan Eye Hospital Logo"
        class="w-80 p-2 bg-white rounded cursor-pointer">
    </a>

    <ul class="hidden lg:flex items-center gap-8 py-2.5 text-xl font-primary tracking-[2px]">
      <li><a href="/">Home</a></li>  
      <li><a href="./about.html">About</a></li>
      <li><a href="./doctors.html">Doctors</a></li>
      <li><a href="./services.html">Services</a></li>
      <li><a href="./gallery.html">Gallery</a></li>
      <li><a href="./insurance.html">Insurance</a></li>
      <li><a href="./testimonials.html">Testimonials</a></li>
      <li><a href="./contact.html">Contact</a></li>
      </ul>
    <button class="block xl:hidden ml-3" onclick="openMenu()">
      <img src="./images/menu-black.png" alt="" class="w-6">
    </button>
  </nav>
`
    }
}

customElements.define('my-header', MyHeader);


class MyFooter extends HTMLElement{
    connectedCallback(){
        this.innerHTML=`
        <footer class="pt-20 bg-secondary content-center">
    <div class="container mx-auto">
      <div class="grid max-sm:grid-cols-1 max-xl:grid-cols-2 xl:grid-cols-5 gap-8 max-w-7xl mx-auto">
        <div class="xl:col-span-2">
          <a href="./index.html"><img src="./images/Pradhan Logo.png" alt="logo" class='w-60 mb-6 p-2 bg-white' />
          </a>
          <p class="mb-2 leading-relaxed text-white">If you are looking for the best eye specialist near you, doctors at Pradhan Eye Hospital will be a preferred choice. Our team of doctors, including optometrists, surgeons, ophthalmologists and paramedic staff, are renowned for their specialties throughout the world.</p>
        </div>
        <div class="text-white">
          <h4 class="text-xl font-semibold mb-6">Services</h4>
          <ul class="space-y-4">
            <li><a href="./serviceslasik.html" class="hover:text-accent flex items-center gap-2"><svg
                  xmlns="http://www.w3.org/2000/svg" fill="currentColor" class="w-[10px] -rotate-90"
                  viewBox="0 0 24 24">
                  <path fill-rule="evenodd"
                    d="M11.99997 18.1669a2.38 2.38 0 0 1-1.68266-.69733l-9.52-9.52a2.38 2.38 0 1 1 3.36532-3.36532l7.83734 7.83734 7.83734-7.83734a2.38 2.38 0 1 1 3.36532 3.36532l-9.52 9.52a2.38 2.38 0 0 1-1.68266.69734z">
                  </path>
                </svg>Lasik Surgery</a></li>
            <li><a href="./servicescataract.html"
                class="hover:text-accent flex items-center gap-2"><svg xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor" class="w-[10px] -rotate-90" viewBox="0 0 24 24">
                  <path fill-rule="evenodd"
                    d="M11.99997 18.1669a2.38 2.38 0 0 1-1.68266-.69733l-9.52-9.52a2.38 2.38 0 1 1 3.36532-3.36532l7.83734 7.83734 7.83734-7.83734a2.38 2.38 0 1 1 3.36532 3.36532l-9.52 9.52a2.38 2.38 0 0 1-1.68266.69734z">
                  </path>
                </svg>Cataract Surgery</a></li>
            <li><a href="./servicessquint.html" class="hover:text-accent flex items-center gap-2"><svg
                  xmlns="http://www.w3.org/2000/svg" fill="currentColor" class="w-[10px] -rotate-90"
                  viewBox="0 0 24 24">
                  <path fill-rule="evenodd"
                    d="M11.99997 18.1669a2.38 2.38 0 0 1-1.68266-.69733l-9.52-9.52a2.38 2.38 0 1 1 3.36532-3.36532l7.83734 7.83734 7.83734-7.83734a2.38 2.38 0 1 1 3.36532 3.36532l-9.52 9.52a2.38 2.38 0 0 1-1.68266.69734z">
                  </path>
                </svg>Squint Surgery</a></li>
            <li><a href="./servicesretina.html" class="hover:text-accent flex items-center gap-2"><svg
                  xmlns="http://www.w3.org/2000/svg" fill="currentColor" class="w-[10px] -rotate-90"
                  viewBox="0 0 24 24">
                  <path fill-rule="evenodd"
                    d="M11.99997 18.1669a2.38 2.38 0 0 1-1.68266-.69733l-9.52-9.52a2.38 2.38 0 1 1 3.36532-3.36532l7.83734 7.83734 7.83734-7.83734a2.38 2.38 0 1 1 3.36532 3.36532l-9.52 9.52a2.38 2.38 0 0 1-1.68266.69734z">
                  </path>
                </svg> Vitreoretinal Surgeries</a></li>
          </ul>
        </div>

        <div class="text-white">
          <h4 class="text-xl font-semibold mb-6">Hospital</h4>
          <ul class="space-y-4">
            <li><a href="./index.html" class="hover:text-accent flex items-center gap-2"><svg
                  xmlns="http://www.w3.org/2000/svg" fill="currentColor" class="w-[10px] -rotate-90"
                  viewBox="0 0 24 24">
                  <path fill-rule="evenodd"
                    d="M11.99997 18.1669a2.38 2.38 0 0 1-1.68266-.69733l-9.52-9.52a2.38 2.38 0 1 1 3.36532-3.36532l7.83734 7.83734 7.83734-7.83734a2.38 2.38 0 1 1 3.36532 3.36532l-9.52 9.52a2.38 2.38 0 0 1-1.68266.69734z">
                  </path>
                </svg> Home</a></li>
            <li><a href="./services.html" class="hover:text-accent flex items-center gap-2"><svg
                  xmlns="http://www.w3.org/2000/svg" fill="currentColor" class="w-[10px] -rotate-90"
                  viewBox="0 0 24 24">
                  <path fill-rule="evenodd"
                    d="M11.99997 18.1669a2.38 2.38 0 0 1-1.68266-.69733l-9.52-9.52a2.38 2.38 0 1 1 3.36532-3.36532l7.83734 7.83734 7.83734-7.83734a2.38 2.38 0 1 1 3.36532 3.36532l-9.52 9.52a2.38 2.38 0 0 1-1.68266.69734z">
                  </path>
                </svg>Services We Offer</a></li>
            <li><a href="./contact.html" class="hover:text-accent flex items-center gap-2"><svg
                  xmlns="http://www.w3.org/2000/svg" fill="currentColor" class="w-[10px] -rotate-90"
                  viewBox="0 0 24 24">
                  <path fill-rule="evenodd"
                    d="M11.99997 18.1669a2.38 2.38 0 0 1-1.68266-.69733l-9.52-9.52a2.38 2.38 0 1 1 3.36532-3.36532l7.83734 7.83734 7.83734-7.83734a2.38 2.38 0 1 1 3.36532 3.36532l-9.52 9.52a2.38 2.38 0 0 1-1.68266.69734z">
                  </path>
                </svg> Contact Us</a></li>
            <li><a href="./contact.html" class="hover:text-accent flex items-center gap-2"><svg
                  xmlns="http://www.w3.org/2000/svg" fill="currentColor" class="w-[10px] -rotate-90"
                  viewBox="0 0 24 24">
                  <path fill-rule="evenodd"
                    d="M11.99997 18.1669a2.38 2.38 0 0 1-1.68266-.69733l-9.52-9.52a2.38 2.38 0 1 1 3.36532-3.36532l7.83734 7.83734 7.83734-7.83734a2.38 2.38 0 1 1 3.36532 3.36532l-9.52 9.52a2.38 2.38 0 0 1-1.68266.69734z">
                  </path>
                </svg> Careers</a></li>
          </ul>
        </div>

        <div class="text-white">
          <h4 class="text-xl font-semibold mb-6">Contact Us</h4>
          <ul class="space-y-4">
            <li>Pradhan Eye Hospital, <br> 50, Railway lines, <br> Dr. M.G. Pradhan marg, Solapur - 413001</li>
            <li>pradhaneye@gmail.com <br> 9881004304 / 7058659342</li>
          </ul>
        </div>
      </div>
    </div>
    <div class='container text-center text-white p-4 text-sm'>
      <p class='uppercase my-4 font-semibold'>Disclaimer</p>
      <p class=''>This is not medical advice. Your ophthalmologist will help you decide which procedure and lens is best suited for your eyes. Every patient and eye is different and thus the experience for every patient is variable. All product and company names are trademarks or registered trademarks of their respective holders. Use of them does not imply any affiliation or endorsement by them.</p>
    </div>
      
    <hr class="my-4 h-1 w-full bg-accent" />
    <div>
      <p class="text-center m-4 text-white">
      © 2025 Pradhan Eye Hospital. All Rights Reserved. Design by 
      <a href="https://www.evolveweb.in/" target="_blank" class="hover:underline text-sky-300 font-secondary">Evolve Web Solapur</a>
      </p>
    </div>
  </footer>

`
    }
}

customElements.define('my-footer', MyFooter)
