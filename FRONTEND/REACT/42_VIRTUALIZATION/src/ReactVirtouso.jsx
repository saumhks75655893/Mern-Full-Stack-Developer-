import React from 'react'
import { Virtuoso } from 'react-virtuoso'


const ReactVirdouso = ({ arr }) => {
  return (
    <div>
      <Virtuoso
        style={{ height: 560 }}
        data={arr}
        itemContent={(i, item) => <div> item --- {item} </div>}
      />
    </div>
  )
}

export default ReactVirdouso
