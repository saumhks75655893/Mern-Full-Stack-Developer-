import React from 'react'
import VT from './VT';
import ReactVirdouso from './ReactVirtouso';

const App = () => {

  const arr = Array.from({ length: 100000 }, (_, i) => i + 1000);
  console.log(arr);

  return (
    // <div>
    //   <VT arr={arr} height={560} itemHeight={40} />
    // </div>

    <div>
      <ReactVirdouso arr={arr} />
    </div>
  )
}

export default App
