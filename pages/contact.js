import { createRoot } from 'react-dom/client'
import { Suspense } from 'react'
import { Loader } from '@react-three/drei'
import {Awsome} from '../components/awsome'


import React from 'react'

const Contact = () => {
  return (
    <>

     <Suspense fallback={null}>
       <Awsome />
     </Suspense>
  <Loader />
    </>
  )
}

export default Contact
