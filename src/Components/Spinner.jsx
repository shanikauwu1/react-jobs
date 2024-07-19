import React from 'react'
import { ClipLoader } from 'react-spinners'

function Spinner({loading}) {
    const overide={
        display:"block",
        margin :"100px auto"
    }
  return (
    <ClipLoader
    color='blue'
    loading={loading}
    cssOverride={overide}

    />
  )
}

export default Spinner