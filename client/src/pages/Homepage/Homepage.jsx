import React from 'react'
import Banner from '../../components/Banner/Banner'
import Card from '../../components/Card/Card'
import Initiative from '../../components/Initiative/Initiative'
import Process from '../../components/Process/Process'
import Bank from '../../components/Bank/Bank'
import Ques from '../../components/Ques/Ques'

const Homepage = ({state}) => {


  return (
    <div>
        <Banner/>
        <Card state={state}/>
        <Process/>
        <Initiative/>
        <Bank/>
        <Ques/>
    </div>
  )
}

export default Homepage
