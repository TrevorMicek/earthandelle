import React from 'react'
import { Link } from 'gatsby'
import { Disclosure } from '@headlessui/react'
import { ChevronDownIcon } from '@heroicons/react/outline'
import CreateComponent from '../commonComps/createComponent'
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
  question: "Our Return Policy",
  answer: {
    text: [{text:"If you aren't satisfied within 60 days of your purchase, we'll give you a full refund, no questions asked! A return is not required for refunds; howerver if you want to return an item, it's always free of charge! "},
]},
  open: true
  },

  {
    question: "Our Terms of Service",
    answer: {
      text: [
        {title:'Our Terms and Conditions overview', text: ""},
        {title:'', text: 'This site is administered by Earth and Elle. The phrases "we", "us", and "our" are used throughout the site to refer to Earth and Elle. This website, including all content, tools, and services available through this site, is provided by Earth & Elle to you, the user, conditioned on your acceptance of all terms, conditions, policies, and notices indicated here.'},
        {title:'', text: 'You engage in our "Service" by visiting our site or purchasing something from us, and you agree to be bound by the following terms and conditions ("Terms of Service", "Terms"), including such additional terms and conditions and policies linked herein and/or available via hyperlink. These Terms of Service apply to all site users, including, but not limited to, browsers, suppliers, customers, merchants, and/or content creators.'},
        {title:'', text: "Before accessing or using our website, please read these Terms of Service thoroughly. By accessing or using any portion of this website, you accept these terms of service. If you do not agree to this agreement's terms and conditions in its entirety, you are not permitted to use the website or use any services. If these Terms of Service represent an offer, acceptance is explicitly limited to these terms."},
        {title:'', text: "Any additional tools or features introduced to the current shop are likewise subject to the Terms of Service. This page contains the most recent version of the Terms of Service at all times. We retain the right to modify or replace any portion of these Terms of Service by publishing updates and/or modifications on our website. You are responsible for frequently checking this page for updates. Your continued use or access of the website after the publication of such modifications implies acceptance of those modifications."},
        {title:'', text: "Our ecommerce platform is Shopify Inc. They provide the e-commerce platform that enables us to sell you our products and services online."},
        {title:'SECTION 1 - ONLINE STORE TERMS', text: "You affirm that you are at least the age of majority in your state or province of residence, or that you are the age of majority in your state or province of residence and you have given us your approval to enable any of your minor dependents to use this site. You may not use our goods for any unlawful or unauthorized purpose, nor may you break any local laws while using the Service (including but not limited to copyright laws). You are not permitted to send any worms, viruses, or other disruptive programs. Any violation of these Terms will result in the immediate termination of your Services."},
        {title:'SECTION 2 - GENERAL CONDITIONS', text: "We have the right to deny service to anybody at any time for any reason. You acknowledge that your content (except credit card information) may be transported unencrypted and entail (a) transmissions across multiple networks and (b) conformance and adaptation to the technological constraints of connecting networks or devices. Credit card information is constantly sent over networks using encryption. You undertake not to replicate, duplicate, copy, sell, resell or exploit any component of the Service, use of the Service, or access to the Service, or any contact on the website through which the service is given, unless we provide you prior written consent. The use of headers in this agreement is for convenience only and will not limit or otherwise affect these Terms."},
        {title:'SECTION 3 - Information Accuracy, Completeness, and Timeliness', text: "We are not responsible for any inaccuracies, omissions, or out-of-date content on this website. This website contains general information and should not be relied upon or used as the only basis for making choices without accessing primary, more accurate, more complete, or more current sources of information. You use the content on this website at your own risk. This website might contain historical information. Historical material is inherently out-of-date and is supplied solely for your reference. We retain the right to edit the information on this website at any time, but we are under no obligation to do so. You acknowledge that it is your obligation to monitor modifications to our website."},
        {title:'SECTION 4 - Changes to the Service and Rates', text: "Our product prices are subject to change without prior notice. We retain the right to alter or discontinue the Service (or any portion or content thereof) at any time and without prior notice. For any modification, price change, suspension, or discontinuance of the Service, we shall not be responsible to you or any other person."},
        {title:'SECTION 5 - PRODUCTS OR SERVICES (if applicable)', text: "Certain items or services may be solely offered online via the website. These items or services may be available in limited numbers and may only be returned or exchanged in accordance with our Return Policy. We have made every attempt to portray the colors and pictures of our items that appear on the site as precisely as possible. We cannot guarantee that the colors seen on your computer monitor are correct. We retain the right, but are not bound, to restrict the sale of our products or Services to any individual, geographic location, or governing body. We may utilize this privilege on an individual basis. We have the right to place limits on the quantity of any items or services we provide. All product descriptions and prices are subject to change at any moment without notice, at our sole discretion. We have the right to withdraw any product without prior notice. Any offer on this website for a product or service is invalid where prohibited."},
        {title:'', text: "We make no guarantee that the quality of any items, services, information, or other material purchased or accessed by you will match your expectations, nor that any faults in the Service will be fixed."},
        {title:'SECTION 6 - ACCURACY OF BILLING AND ACCOUNT INFORMATION', text: "We have the right to decline any order that is placed with us. We reserve the right, in our sole discretion, to set purchase limits per person, per household, or per order. These limits may apply to orders that are placed by or under the same customer account, payment card, and/or billing and/or delivery address. We may attempt to notify you by contacting the e-mail and/or billing address/phone number supplied at the time the transaction was placed. We have the right to limit or reject orders that appear to be placed by dealers, resellers, or distributors, based on our sole discretion."},
        {title:'', text: "For any purchases made at our shop, you agree to provide current, complete, and accurate purchase and account information. You agree to maintain accurate account information, including your email address, credit card numbers and expiration dates, so that we can process your purchases and contact you as necessary."},
        {title:'SECTION 7 - VARIOUS DEVICES', text: `You may have access to third-party tools over which we neither monitor nor have any influence nor control. You understand and accept that we provide access to these tools "as is" and "as available" and without any warranties, representations, or terms of any kind, as well as without any endorsement. We shall have no liability originating from or pertaining to your use of third-party tools that are optional. You should check that you are aware with and agree to the third-party provider's terms and conditions before using any optional tools made available through the site (s).`},
        {title:'', text: "In the future, we may also provide new services and/or features via the website (including, the release of new tools and resources). Such additional features and/or services shall be subject to these Service Terms."},
        {title:'SECTION 8 - THIRD-PARTY LINKS', text: "Certain information, goods, and services accessible via our Service may contain third-party contents. There may be connections to unaffiliated third-party websites on this website. We are not responsible for inspecting or assessing the content or accuracy of any third-party materials or websites, nor do we warrant or assume any liability or responsibility for any third-party materials, products, or services. We are not accountable for any injury or losses resulting from the purchase or use of goods, services, resources, material, or any other transactions on third-party websites. Please research the rules and procedures of the third party and ensure you fully comprehend them before engaging in business with them. Complaints, claims, complaints, and inquiries about third-party goods must be made to the third-party."},
        {title:'SECTION 9 - USER COMMENTS, FEEDBACK AND OTHER SUBMISSIONS', text: 'If, at our request, you send certain specified submissions (such as contest entries), or if, without a request from us, you send creative ideas, suggestions, proposals, plans, or other materials (collectively, "comments"), you agree that we may, at any time and without restriction, edit, copy, publish, distribute, translate, and otherwise use in any medium any comments that you forward to us. We are not obligated to (1) protect the confidentiality of any comments, (2) pay remuneration for any comments, or (3) react to any comments.'},
        {title:'', text: "We reserve the right, but have no obligation, to monitor, edit, or remove content that we determine in our sole discretion to be unlawful, offensive, threatening, libelous, defamatory, pornographic, obscene, or otherwise objectionable, or which violates the intellectual property rights of any party or these Terms of Service. You agree that your comments will not violate any third-party rights, such as copyright, trademark, privacy, personality, or any other personal or property rights. You further agree that your comments will not contain any libelous or otherwise illegal, abusive, or obscene content, nor will they contain any computer viruses or other malware that might in any way damage the functioning of the Service or any connected website. You are not permitted to use a fraudulent e-mail address, claim to be someone other than yourself, or otherwise mislead us or third parties about the origin of any remarks. You are completely responsible for the accuracy of any comments you post. We assume no liability and accept no responsibility for any remarks posted by you or any other party."},
        {title:'SECTION 10 - PERSONAL INFORMATION', text: "Our Privacy Statement governs your disclosure of personal information via the online store. To access our Privacy Statement."},
        {title:'SECTION 11 - ERRORS, INACCURACIES AND OMISSIONS', text: "Unless required by law, we have no duty to update, modify, or clarify anything included in the Service or on any connected website, including, but not limited to, price information. No mentioned update or refresh date should be considered to suggest that all information in the Service or on any site associated with the Service has been amended or updated."},
        {title:'', text: "We undertake no obligation to update, amend or clarify information in the Service or on any related website, including without limitation, pricing information, except as required by law. No specified update or refresh date applied in the Service or on any related website, should be taken to indicate that all information in the Service or on any related website has been modified or updated."},
        {title:'SECTION 12 - PROHIBITED USES', text: "In addition to other prohibitions as set forth in the Terms of Service, you are prohibited from using the site or its content: (a) for any unlawful purpose; (b) to solicit others to perform or participate in any unlawful acts; (c) to violate any international, federal, provincial or state regulations, rules, laws, or local ordinances; (d) to infringe upon or violate our intellectual property rights or the intellectual property rights of others; (e) to stalk, exploit, or otherwise cause distress or inconvenience to any other If you violate any of the prohibited uses, we have the right to cancel your access to the Service and any connected websites."},
        {title:'SECTION 13 - DISCLAIMER OF WARRANTIES; LIMITATION OF LIABILITY', text: 'Our service is not guaranteed, represented, or warranted to be uninterrupted, timely, secure, or error-free. We make no guarantee that the results you acquire from using our service will be accurate or dependable. You consent to our removal of the service for indeterminate periods of time or cancellation of the service at any time and without notice. You clearly acknowledge that your use of the service, or inability to utilize it, is at your personal risk. The service and all products and services delivered to you through the service are provided "as is" and "as available" without any representation, warranties or conditions of any kind, either express or implied, including all implied warranties or conditions of merchantability, merchantable quality, fitness for a particular purpose, durability, title, and non-infringement. In no event shall Earth and Elle, our directors, officers, employees, affiliates, agents, contractors, interns, suppliers, service providers or licensors be liable for any injury, loss, claim, or any direct, indirect, incidental, punitive, special, or consequential damages of any kind, including, but not limited to lost profits, lost revenue, lost savings, loss of data, replacement costs, or any similar damages, whether based in contract, tort (including negligence), strict liability, or otherwise. Because certain states or countries prohibit the exclusion or limitation of responsibility for consequential or incidental damages, our liability shall be limited to the fullest extent permissible by law in such states or jurisdictions.'},
        {title:'SECTION 14 - INDEMNIFICATION', text: "You agree to indemnify, defend, and hold harmless Earth and Elle and our parent, subsidiaries, affiliates, partners, officers, directors, agents, contractors, licensors, service providers, subcontractors, suppliers, interns and employees from any claim or demand, including reasonable attorney's fees, made by any third-party due to or arising out of your breach of these Terms of Service or the documents they incorporate by reference, or your violation of any law or the rights of a third-party."},
        {title:'SECTION 15 - SEVERABILITY', text: "In the event that any provision of these Terms of Service is determined to be unlawful, void, or unenforceable, such provision shall nevertheless be enforceable to the maximum extent permitted by applicable law, and the unenforceable portion shall be deemed to be severed from these Terms of Service, such determination shall not affect the validity and enforceability of the remaining provisions."},
        {title:'SECTION 16 - TERMINATION', text: "For all intents and purposes, the obligations and liabilities of the parties accrued prior to the termination date shall survive the termination of this agreement. These Terms of Service are in force until either you or us terminate them. You can terminate these Terms of Service at any time by telling us that you no longer desire to use our Services, or if you stop using our site."},
        {title:'', text: "If, in our sole judgment, you fail to comply with any term or provision of these Terms of Service or if we suspect that you have failed to comply, we may immediately terminate this agreement without prior notice and you will remain liable for all amounts due up to and including the date of termination; and/or accordingly may deny you access to our Services (or any part thereof)."},
        {title:'SECTION 17 - ENTIRE AGREEMENT', text: "Our omission to assert or enforce any right or provision of these Terms of Service shall not be construed as a waiver of such rights or provisions. These Terms of Service and any other policies or operating rules posted by us on this site or with respect to The Service constitute the entire agreement and understanding between you and us and govern your use of the Service, superseding any prior or contemporaneous agreements, communications and proposals, whether verbal or written, between you and us (including, but not limited to, any prior versions of the Terms of Service). Any ambiguity in the interpretation of these Terms of Service shall not be interpreted against the party who drafted them."},
        {title:'SECTION 18 - GOVERNING LAW', text: "These Terms of Service and any further agreements whereby we provide you with Services shall be governed by and interpreted in conformity with United States law."},
        {title:'SECTION 19 - Modifications TO SERVICE TERMS', text: "This website provides access to the most recent version of the Terms of Service. We retain the right, at our sole discretion, to revise, alter, or replace any portion of these Terms of Service by publishing updates and modifications on our website. It is your duty to frequently check our website for updates. Your continued use of or access to our website or the Service after the publication of any modifications to these Terms of Service represents acceptance of such modifications."},
        {title:'SECTION 20 - CONTACT INFORMATION', text: "Please email hello@earthandelle.com with any questions regarding the Terms of Service."},
        ]
  }},

  {
    question: "Our Privacy Statement summary",
    answer: {
      text: [
        {title:'Our Terms and Conditions overview', text: ""},
        {title:'', text: 'This site is administered by Earth and Elle. The phrases "we", "us", and "our" are used throughout the site to refer to Earth and Elle. This website, including all content, tools, and services available through this site, is provided by Earth & Elle to you, the user, conditioned on your acceptance of all terms, conditions, policies, and notices indicated here.'},
        {title:'', text: 'You engage in our "Service" by visiting our site or purchasing something from us, and you agree to be bound by the following terms and conditions ("Terms of Service", "Terms"), including such additional terms and conditions and policies linked herein and/or available via hyperlink. These Terms of Service apply to all site users, including, but not limited to, browsers, suppliers, customers, merchants, and/or content creators.'},
        {title:'', text: "Before accessing or using our website, please read these Terms of Service thoroughly. By accessing or using any portion of this website, you accept these terms of service. If you do not agree to this agreement's terms and conditions in its entirety, you are not permitted to use the website or use any services. If these Terms of Service represent an offer, acceptance is explicitly limited to these terms."},
        {title:'', text: "Any additional tools or features introduced to the current shop are likewise subject to the Terms of Service. This page contains the most recent version of the Terms of Service at all times. We retain the right to modify or replace any portion of these Terms of Service by publishing updates and/or modifications on our website. You are responsible for frequently checking this page for updates. Your continued use or access of the website after the publication of such modifications implies acceptance of those modifications."},
        {title:'', text: "Our ecommerce platform is Shopify Inc. They provide the e-commerce platform that enables us to sell you our products and services online."},
        {title:'SECTION 1 - ONLINE STORE TERMS', text: "You affirm that you are at least the age of majority in your state or province of residence, or that you are the age of majority in your state or province of residence and you have given us your approval to enable any of your minor dependents to use this site. You may not use our goods for any unlawful or unauthorized purpose, nor may you break any local laws while using the Service (including but not limited to copyright laws). You are not permitted to send any worms, viruses, or other disruptive programs. Any violation of these Terms will result in the immediate termination of your Services."},
        {title:'SECTION 2 - GENERAL CONDITIONS', text: "We have the right to deny service to anybody at any time for any reason. You acknowledge that your content (except credit card information) may be transported unencrypted and entail (a) transmissions across multiple networks and (b) conformance and adaptation to the technological constraints of connecting networks or devices. Credit card information is constantly sent over networks using encryption. You undertake not to replicate, duplicate, copy, sell, resell or exploit any component of the Service, use of the Service, or access to the Service, or any contact on the website through which the service is given, unless we provide you prior written consent. The use of headers in this agreement is for convenience only and will not limit or otherwise affect these Terms."},
        {title:'SECTION 3 - Information Accuracy, Completeness, and Timeliness', text: "We are not responsible for any inaccuracies, omissions, or out-of-date content on this website. This website contains general information and should not be relied upon or used as the only basis for making choices without accessing primary, more accurate, more complete, or more current sources of information. You use the content on this website at your own risk. This website might contain historical information. Historical material is inherently out-of-date and is supplied solely for your reference. We retain the right to edit the information on this website at any time, but we are under no obligation to do so. You acknowledge that it is your obligation to monitor modifications to our website."},
        {title:'SECTION 4 - Changes to the Service and Rates', text: "Our product prices are subject to change without prior notice. We retain the right to alter or discontinue the Service (or any portion or content thereof) at any time and without prior notice. For any modification, price change, suspension, or discontinuance of the Service, we shall not be responsible to you or any other person."},
        {title:'SECTION 5 - PRODUCTS OR SERVICES (if applicable)', text: "Certain items or services may be solely offered online via the website. These items or services may be available in limited numbers and may only be returned or exchanged in accordance with our Return Policy. We have made every attempt to portray the colors and pictures of our items that appear on the site as precisely as possible. We cannot guarantee that the colors seen on your computer monitor are correct. We retain the right, but are not bound, to restrict the sale of our products or Services to any individual, geographic location, or governing body. We may utilize this privilege on an individual basis. We have the right to place limits on the quantity of any items or services we provide. All product descriptions and prices are subject to change at any moment without notice, at our sole discretion. We have the right to withdraw any product without prior notice. Any offer on this website for a product or service is invalid where prohibited."},
        {title:'', text: "We make no guarantee that the quality of any items, services, information, or other material purchased or accessed by you will match your expectations, nor that any faults in the Service will be fixed."},
        {title:'SECTION 6 - ACCURACY OF BILLING AND ACCOUNT INFORMATION', text: "We have the right to decline any order that is placed with us. We reserve the right, in our sole discretion, to set purchase limits per person, per household, or per order. These limits may apply to orders that are placed by or under the same customer account, payment card, and/or billing and/or delivery address. We may attempt to notify you by contacting the e-mail and/or billing address/phone number supplied at the time the transaction was placed. We have the right to limit or reject orders that appear to be placed by dealers, resellers, or distributors, based on our sole discretion."},
        {title:'', text: "For any purchases made at our shop, you agree to provide current, complete, and accurate purchase and account information. You agree to maintain accurate account information, including your email address, credit card numbers and expiration dates, so that we can process your purchases and contact you as necessary."},
        {title:'SECTION 7 - VARIOUS DEVICES', text: `You may have access to third-party tools over which we neither monitor nor have any influence nor control. You understand and accept that we provide access to these tools "as is" and "as available" and without any warranties, representations, or terms of any kind, as well as without any endorsement. We shall have no liability originating from or pertaining to your use of third-party tools that are optional. You should check that you are aware with and agree to the third-party provider's terms and conditions before using any optional tools made available through the site (s).`},
        {title:'', text: "In the future, we may also provide new services and/or features via the website (including, the release of new tools and resources). Such additional features and/or services shall be subject to these Service Terms."},
        {title:'SECTION 8 - THIRD-PARTY LINKS', text: "Certain information, goods, and services accessible via our Service may contain third-party contents. There may be connections to unaffiliated third-party websites on this website. We are not responsible for inspecting or assessing the content or accuracy of any third-party materials or websites, nor do we warrant or assume any liability or responsibility for any third-party materials, products, or services. We are not accountable for any injury or losses resulting from the purchase or use of goods, services, resources, material, or any other transactions on third-party websites. Please research the rules and procedures of the third party and ensure you fully comprehend them before engaging in business with them. Complaints, claims, complaints, and inquiries about third-party goods must be made to the third-party."},
        {title:'SECTION 9 - USER COMMENTS, FEEDBACK AND OTHER SUBMISSIONS', text: 'If, at our request, you send certain specified submissions (such as contest entries), or if, without a request from us, you send creative ideas, suggestions, proposals, plans, or other materials (collectively, "comments"), you agree that we may, at any time and without restriction, edit, copy, publish, distribute, translate, and otherwise use in any medium any comments that you forward to us. We are not obligated to (1) protect the confidentiality of any comments, (2) pay remuneration for any comments, or (3) react to any comments.'},
        {title:'', text: "We reserve the right, but have no obligation, to monitor, edit, or remove content that we determine in our sole discretion to be unlawful, offensive, threatening, libelous, defamatory, pornographic, obscene, or otherwise objectionable, or which violates the intellectual property rights of any party or these Terms of Service. You agree that your comments will not violate any third-party rights, such as copyright, trademark, privacy, personality, or any other personal or property rights. You further agree that your comments will not contain any libelous or otherwise illegal, abusive, or obscene content, nor will they contain any computer viruses or other malware that might in any way damage the functioning of the Service or any connected website. You are not permitted to use a fraudulent e-mail address, claim to be someone other than yourself, or otherwise mislead us or third parties about the origin of any remarks. You are completely responsible for the accuracy of any comments you post. We assume no liability and accept no responsibility for any remarks posted by you or any other party."},
        {title:'SECTION 10 - PERSONAL INFORMATION', text: "Our Privacy Statement governs your disclosure of personal information via the online store. To access our Privacy Statement."},
        {title:'SECTION 11 - ERRORS, INACCURACIES AND OMISSIONS', text: "Unless required by law, we have no duty to update, modify, or clarify anything included in the Service or on any connected website, including, but not limited to, price information. No mentioned update or refresh date should be considered to suggest that all information in the Service or on any site associated with the Service has been amended or updated."},
        {title:'', text: "We undertake no obligation to update, amend or clarify information in the Service or on any related website, including without limitation, pricing information, except as required by law. No specified update or refresh date applied in the Service or on any related website, should be taken to indicate that all information in the Service or on any related website has been modified or updated."},
        {title:'SECTION 12 - PROHIBITED USES', text: "In addition to other prohibitions as set forth in the Terms of Service, you are prohibited from using the site or its content: (a) for any unlawful purpose; (b) to solicit others to perform or participate in any unlawful acts; (c) to violate any international, federal, provincial or state regulations, rules, laws, or local ordinances; (d) to infringe upon or violate our intellectual property rights or the intellectual property rights of others; (e) to stalk, exploit, or otherwise cause distress or inconvenience to any other If you violate any of the prohibited uses, we have the right to cancel your access to the Service and any connected websites."},
        {title:'SECTION 13 - DISCLAIMER OF WARRANTIES; LIMITATION OF LIABILITY', text: 'Our service is not guaranteed, represented, or warranted to be uninterrupted, timely, secure, or error-free. We make no guarantee that the results you acquire from using our service will be accurate or dependable. You consent to our removal of the service for indeterminate periods of time or cancellation of the service at any time and without notice. You clearly acknowledge that your use of the service, or inability to utilize it, is at your personal risk. The service and all products and services delivered to you through the service are provided "as is" and "as available" without any representation, warranties or conditions of any kind, either express or implied, including all implied warranties or conditions of merchantability, merchantable quality, fitness for a particular purpose, durability, title, and non-infringement. In no event shall Earth and Elle, our directors, officers, employees, affiliates, agents, contractors, interns, suppliers, service providers or licensors be liable for any injury, loss, claim, or any direct, indirect, incidental, punitive, special, or consequential damages of any kind, including, but not limited to lost profits, lost revenue, lost savings, loss of data, replacement costs, or any similar damages, whether based in contract, tort (including negligence), strict liability, or otherwise. Because certain states or countries prohibit the exclusion or limitation of responsibility for consequential or incidental damages, our liability shall be limited to the fullest extent permissible by law in such states or jurisdictions.'},
        {title:'SECTION 14 - INDEMNIFICATION', text: "You agree to indemnify, defend, and hold harmless Earth and Elle and our parent, subsidiaries, affiliates, partners, officers, directors, agents, contractors, licensors, service providers, subcontractors, suppliers, interns and employees from any claim or demand, including reasonable attorney's fees, made by any third-party due to or arising out of your breach of these Terms of Service or the documents they incorporate by reference, or your violation of any law or the rights of a third-party."},
        {title:'SECTION 15 - SEVERABILITY', text: "In the event that any provision of these Terms of Service is determined to be unlawful, void, or unenforceable, such provision shall nevertheless be enforceable to the maximum extent permitted by applicable law, and the unenforceable portion shall be deemed to be severed from these Terms of Service, such determination shall not affect the validity and enforceability of the remaining provisions."},
        {title:'SECTION 16 - TERMINATION', text: "For all intents and purposes, the obligations and liabilities of the parties accrued prior to the termination date shall survive the termination of this agreement. These Terms of Service are in force until either you or us terminate them. You can terminate these Terms of Service at any time by telling us that you no longer desire to use our Services, or if you stop using our site."},
        {title:'', text: "If, in our sole judgment, you fail to comply with any term or provision of these Terms of Service or if we suspect that you have failed to comply, we may immediately terminate this agreement without prior notice and you will remain liable for all amounts due up to and including the date of termination; and/or accordingly may deny you access to our Services (or any part thereof)."},
        {title:'SECTION 17 - ENTIRE AGREEMENT', text: "Our omission to assert or enforce any right or provision of these Terms of Service shall not be construed as a waiver of such rights or provisions. These Terms of Service and any other policies or operating rules posted by us on this site or with respect to The Service constitute the entire agreement and understanding between you and us and govern your use of the Service, superseding any prior or contemporaneous agreements, communications and proposals, whether verbal or written, between you and us (including, but not limited to, any prior versions of the Terms of Service). Any ambiguity in the interpretation of these Terms of Service shall not be interpreted against the party who drafted them."},
        {title:'SECTION 18 - GOVERNING LAW', text: "These Terms of Service and any further agreements whereby we provide you with Services shall be governed by and interpreted in conformity with United States law."},
        {title:'SECTION 19 - Modifications TO SERVICE TERMS', text: "This website provides access to the most recent version of the Terms of Service. We retain the right, at our sole discretion, to revise, alter, or replace any portion of these Terms of Service by publishing updates and modifications on our website. It is your duty to frequently check our website for updates. Your continued use of or access to our website or the Service after the publication of any modifications to these Terms of Service represents acceptance of such modifications."},
        {title:'SECTION 20 - CONTACT INFORMATION', text: "Please email hello@earthandelle.com with any questions regarding the Terms of Service."},
        ]
  }},

]

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}
const Policy = (props) => {
  console.log(props.title)
return (
  <>
  {
    props.text && props.text.map((data, i) => (
      <>
       <p >{data.title === 'SECTION 7 - OPTIONAL TOOLS' ? <>For more detail, please review our <Link to="/policy" className="underline">Returns Policy.</Link></> : ''}</p>
      <div className=" text-black bold text-lg">
    {data.title}
  </div>
  <p className="mb-4">{data.text}</p>

  </>
    ))
  }
  </>
)
}
export default function Example() {
  return (
    <div className="bg-white" style={{gridColumn:"span 7", gridRowStart:"third", gridRowEnd:"fourth"}}>
      <div className="max-w-7xl mx-auto  pt-12 pb-8 px-4 sm:py-16 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto ">
          <h2 className="text-center text-2xl font-serif font-normal text-gray-900 sm:text-4xl">Policy Quicksheet</h2>
          <dl className="mt-6 -space-y-1 divide-y divide-gray-200">

            {faqs.map((faq, i) => (
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
                      <CreateComponent component={Policy} data={faq} />
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