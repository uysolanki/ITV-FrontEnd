import React from 'react'

const MyTest = () => {
  let cars=["Audi","BMW","Merc"]
  console.log(cars)
  cars=[...cars,"Honda"]
  console.log(cars)


  const player={
    jno:18,
    pname:'Virat'
  }


 const player2= {...player,jno:45}
 console.log(player2.mp)

  return (
    <>
    <div id="itp4">Best Wishes to team India for CT 2025</div>
    <button>Submit</button>
    </>
  )
}

export default MyTest