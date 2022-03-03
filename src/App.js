import React,{useState} from 'react';

import box from './boxData';
import Body from './components/Body';

console.log(box)
function App() {
  
  const [boxArray, setBoxArray] = useState(box);

  const items = boxArray.map(item => <Body 
    key={item.id} 
    id={item.id}
    on={item.on}
    toggle={toggle}
  />)
  
  function toggle(id) {
    setBoxArray(oldBox => {
    return oldBox.map((item) => {
      return item.id === id ? {...item, on: !item.on} : item
      })
    })
  }

  return (
    <div>
      <h1>Check boxes bellow</h1>
      {items}
    </div>
  )
}

export default App;
