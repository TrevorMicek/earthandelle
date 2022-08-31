import React from 'react';


import MainHeader from '../tailwindComps/Hero'
import SecondaryHeader from '../tailwindComps/SecondaryHeader'
import StoreHeader from '../tailwindComps/StoreHeader'
const Header = (props) => {

  const firstTitle = 'Store'
  const secondaryTitles = ['Product', 'Pricing', 'About', 'Blog','Contact']


  const getSecondaryTitle = (curTitle) => {
    for (let i=0;i<secondaryTitles.length;i++) {
      if (curTitle === secondaryTitles[i]) {
        return secondaryTitles[i]
      }
    }
  }
  const secondTitle = getSecondaryTitle(props.title)
  const HomeHeader = () => (
    <section class="headerPictureWrapper">

   <MainHeader />

    </section>
  )
  const SecondaryHeaderComp = () => (
    <section class="headerPictureWrapper">
   <SecondaryHeader />
   </section>
  )

  const SwitchHeader = () => {
    switch(props.title) {
        case firstTitle:
          return <div></div>
        case secondTitle:
          return <SecondaryHeader title={props.title} text={props.text} />

        default:
          return <MainHeader />
    }
  }
return (
 <SwitchHeader />
)
}
export default Header;