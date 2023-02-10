import React from 'react'

const ChildComponent = ({children}) => {
//code here
  return (
    <div id="child">
      Find The Square <br/>
    {children}
    </div>
  )
}


export default ChildComponent;
