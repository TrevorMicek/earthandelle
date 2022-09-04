import React from "react"


const stats = [
  { label: 'Founded', value: '2021' },
  { label: 'Employees', value: '5' },
  { label: 'Beta Users', value: '521' },
  { label: 'Raised', value: '$25M' },
]

export default function Example() {
  return (
    <div className="relative bg-white" style={{gridColumn:"span 7", gridRowStart:"first", gridRowEnd:"second"}}>
    <div className="relative bg-white  ">
      <div className="lg:mx-auto lg:grid lg:max-w-7xl lg:grid-cols-2 lg:items-start lg:gap-24 lg:px-8">
        <div className="relative sm:py-16 lg:py-0">
          <div aria-hidden="true" className="hidden sm:block lg:absolute lg:inset-y-0 lg:right-0 lg:w-screen">
            <div className="absolute inset-y-0 right-1/2 w-full rounded-r-3xl bg-gray-50 lg:right-72" />

          </div>
          <div className="relative mx-auto max-w-md px-4 sm:max-w-3xl sm:px-6 lg:max-w-none lg:px-0 lg:py-20">
            {/* Testimonial card*/}
            <div className="relative overflow-hidden rounded-2xl pt-64 pb-10 shadow-xl">
              <img
                className="absolute inset-0 h-full w-full object-cover"
                src="https://images.unsplash.com/photo-1521510895919-46920266ddb3?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&fp-x=0.5&fp-y=0.6&fp-z=3&width=1440&height=1440&sat=-100"
                alt=""
              />
              <div className="absolute inset-0 bg-secondary mix-blend-multiply" />
              <div className="absolute inset-0 bg-gradient-to-t from-secondary via-secondary opacity-90" />
              <div className="relative px-8">
                <div className="text-xl text-white ml-10">
                  Earth and Elle
                </div>
                <blockquote className="mt-8">
                  <div className="relative text-lg font-medium text-white md:flex-grow">
                    <svg
                      className="absolute top-0 left-0 h-8 w-8 -translate-x-3 -translate-y-2 transform text-indigo-400"
                      fill="currentColor"
                      viewBox="0 0 32 32"
                      aria-hidden="true"
                    >
                      <path d="M9.352 4C4.456 7.456 1 13.12 1 19.36c0 5.088 3.072 8.064 6.624 8.064 3.36 0 5.856-2.688 5.856-5.856 0-3.168-2.208-5.472-5.088-5.472-.576 0-1.344.096-1.536.192.48-3.264 3.552-7.104 6.624-9.024L9.352 4zm16.512 0c-4.8 3.456-8.256 9.12-8.256 15.36 0 5.088 3.072 8.064 6.624 8.064 3.264 0 5.856-2.688 5.856-5.856 0-3.168-2.304-5.472-5.184-5.472-.576 0-1.248.096-1.44.192.48-3.264 3.456-7.104 6.528-9.024L25.864 4z" />
                    </svg>
                    <p className="relative">
                    A dash of expertise, a sprinkle of lived experience, and copius amounts of passion.
                    </p>
                  </div>

                  <footer className="mt-4">
                    <p className="text-base font-semibold text-indigo-200">Paige Fohdderson, CEO at Earth and Elle</p>
                  </footer>
                </blockquote>
              </div>
            </div>
          </div>
        </div>

        <div className="relative mx-auto max-w-md px-4 sm:max-w-3xl sm:px-6 lg:px-0">
          {/* Content area */}
          <div className="pt-12 sm:pt-16 lg:pt-20">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              On a mission to empower women
            </h2>
            <div className="mt-6 space-y-6 text-gray-800">
              <p className="text-lg">
                <i>A dash of expertise, a sprinkle of lived experience, and copius amounts  of passion.</i>
              </p>
              <p className="text-lg">
                Thank you for visiting Earth and Elle, the brand inspiring women to embrace their dream lifestyles (and yes, it is possible!)<br />
              </p>
              <p className="text-base leading-7">
                As someone who has experienced the transformational power of holistic supplements, I've made it my mission to help others tap into their most vibrant, confident, and healthy versions of themselves  one active ingredient at a time.
              </p>
              <h3 style={{fontSize:"22px"}}>My Story</h3>
              <p className="text-base leading-7">
               Earth & Elle is so much more than a holistic supplement brand: it's an empowering solution for women like you - and it all began here: In my early 20s, I started suffering from <i><strong>chronic join</strong> pain</i> throughout my entire body. It became worse as time went by, with walking feeling like a near-impossible task and my reliance on prescription drugs growing with each doctor's visit.
              </p>
              <p className="text-base leading-7">
                By the time my 21st birthday came around, I weighted just 93 pounds at 5'3" - a turning point that made me decide enough was enough. My <i><strong>body deserved more</strong></i> than an endless cycle of medical check ups and the side effects of heavy duty medication! I started incorporating more natural food products and habits into my daily like, with each small change steadily improving my physical and mental health. Feeling encouraged to help others undergo a similar transformation, I became a qualified personal trainer and yoga teacher (though the story doesn't end here).
              </p>
              <p className="text-base leading-7">
                A few years later, while running a personal training business and sharing my knowledge of naturopathic medicine, I was forced to deal with a <i><strong>highly stressful situation</strong></i> The circumstances led to <i>severe breakouts, damaged hair</i> (made worse by bleaching), and emerging insecurities. I was contantly worried and lost all confidence, refusing to leave the house without makeup caked on or hair extensions applied
              </p>
              <p className="text-base leading-7">
                After some time of not feeling like myself, I opened up my laptop to research <i>alternative remedies</i>. As if I was back in my early 20s, I discovered holistic solutions that worked <i>wonders for my skin, hair, and overall self-esteem!</i> It ignited an inner desire to create something of my own to help others, and from here emerged Earth and Elle.
              </p>
              <p className="text-base leading-7">
                At Earth & Elle, we offer both <strong>vegan and non-vegan products</strong> to suit your individual choices. Our entire range is packed with <strong>active ingredients</strong> that treat your body with the love and respect it deserves, for a life you feel proud of to call your own.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
    </div>
  )
}