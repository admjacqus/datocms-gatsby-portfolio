import React from 'react'
import { RandomBlob } from 'react-random-shapes'
const Icon = () => (
  <React.Fragment>
    <RandomBlob
      className={'blob'}
      size={500}
      options={{
        style: { fill: '#FADAC5' },
      }}
    />
  </React.Fragment>
)
export default Icon