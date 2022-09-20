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
  question: "Are your products cruelty free?",
  answer: "Yes! We love animals and you can rest easy knowing that none of our products have been tested on animals.",
  open: true
  },

  {
    question: "Are your products vegan?",
    answer: "Yes! All of our products are 100% vegan.",
  },

  {
    question: "What is your customer guarantee?",
    answer:
      `We offer a happiness guarantee. If for some reason you are not 100% happy with any of our products, feel free to reach out to us ${<a href="mailto:hello@earthandelle.com" className="underline cursor-pointer">Here</a>}. We will send you a label so you can return the products to us. Once we receive your return we will issue you a refund.`,
  },
  {
    question: "Where do your products ship from?",
    answer: "Our products ship from right here in the United States.",

    },

    {
      question: "How long does shipping take?",
      answer:
        "Usually 2 - 7 business days. ",
    },

    {
      question: "Is Earth & Elle women-owned?",
      answer:
        "Yes we are! Earth & Elle is 100% women-owned.",
    },
    {
      question: "Does Earth & Elle have an ambassador program?",
      answer: `We do! Feel free to reach out to us ${<a href="mailto:hello@earthandelle.com" className="underline cursor-pointer">Here</a>} if you are interested in becoming a brand ambassador or affiliate partner.`,

      },

      {
        question: "I am pregnant or breast feeding, can I take your products?",
        answer:
          "Please contact your health care professional.",
      }

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