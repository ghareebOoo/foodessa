import React from 'react'
import Category from './Category'

export default async function Page({params}:{params: {category: string}}) {

    const {category} = await params
  return (
    <div>
        <Category category={category}/>
    </div>
  )
}
