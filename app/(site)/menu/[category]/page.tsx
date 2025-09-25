import React from 'react'
import Category from './Category'

export default function Page({params}:{params: {category: string}}) {

    const {category} = params
  return (
    <div>
        <Category category={category}/>
    </div>
  )
}
