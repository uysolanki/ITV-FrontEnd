import React from 'react'
import MyHeading from './components/MyHeading'
import SubscribeButton from './components/SubscribeButton'
import Button from './components/Button'
import List from './components/List'
import NewList from './components/NewList'
import NewListPro from './components/NewListPro'

const App = () => {
  function fun1()
  {
      alert('Sign Up')
  }

  function fun2()
  {
      alert('Sign In')
  }

  function fun3()
  {
      alert('Register')
  }

  function fun4()
  {
      alert('Subscribe')
  }


  return (
    <div>
      {/* <MyHeading />
      <SubscribeButton /> */}
      {/* <Button text="Sign Up" onclickhandler={fun1}/>
      <Button text="Sign In" onclickhandler={fun2}/>
      <Button text="Register" onclickhandler={fun3}/>
      <Button text="Subscibe" onclickhandler={fun4}/> */}
      <SubscribeButton/>
    </div>
  )
}

export default App