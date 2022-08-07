import React from 'react'

import { Disclosure } from '@headlessui/react'
import { ChevronDownIcon } from '@heroicons/react/outline'

/*
{
    question: "How do I bring traffic to my site?",
    answer:
      "I don't know, but the flag is a big plus. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas cupiditate laboriosam fugiat.",

  },
  {
    question: "What makes Websites By Trevor different?",
    answer:
      "I don't know, but the flag is a big plus. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas cupiditate laboriosam fugiat.",
  },
*/
const defaultQ = [
  {

  }
]
const faqs = [
  {
  question: "Why should I have a website?",
  answer: "Not everyone needs a website, and not everyone needs a fast website, but if you want to have a solid online presence, social media isn't enough. Our websites allow your business to offer your services or products to your clients. Meaning you can make money directly from your site.",
  open: true
  },

  {
    question: "How to make my site faster NOW?",
    answer:
      "There are some straightforward ways to boost performance on your site today. The main things being; image optimization, lazy loading styles, images & scripts, limiting number of scripts(plugins), ",
  },

  {
    question: "What's the cost of a website?",
    answer:
      "hand coded website's are minimum $3,000 for a basic site, for a not so good site you can get one for under a thousand but that's only suggested if you're on a tight budget and I would personally suggest waiting till you can afford a good website. Our website's start at $140/month for service businesses and $255/month for ecommerce.",
  },

]

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function Example() {
  return (
    <div className="bg-white" style={{gridColumn:"span 7", gridRowStart:"third", gridRowEnd:"fourth"}}>
      <div className="max-w-7xl mx-auto  pt-12 pb-8 px-4 sm:py-16 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto ">
          <h2 className="text-center text-2xl font-serif font-normal text-gray-900 sm:text-4xl">FAQ SECTION</h2>
          <dl className="mt-6 -space-y-1 divide-y divide-gray-200">

            {faqs.map((faq) => (
              <Disclosure as="div" defaultOpen={faq.open} key={faq.question} className="pt-0">

                {({ open }) => (
                  <>
                    <dt className="text-lg bg-accent mb-3 mx-1 px-4 py-1">
                      <Disclosure.Button className="text-left w-full flex justify-between text-gray-400">
                        <span className="font-normal text-gray-900 py-2">{faq.question}</span>
                        <span className="h-7 flex my-auto items-center text-gray-900">
                          <ChevronDownIcon
                            className={classNames(open ? '-rotate-180' : 'rotate-0', 'h-6 w-6 transform')}
                            aria-hidden="true"
                          />
                        </span>
                      </Disclosure.Button>
                    </dt>
                    <Disclosure.Panel as="dd" className="pt-3 -mt-3 mx-1 px-6 pb-1 bg-accent pr-8">
                      <p className="text-base text-gray-900">{faq.answer}</p>
                    </Disclosure.Panel>
                  </>
                )}
              </Disclosure>
            ))}
          </dl>
        </div>
      </div>
    </div>
  )
}