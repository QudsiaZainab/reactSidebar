import React from 'react'
import Input from '../Components/Input'
import Table from '../Components/Table'

const Deaths = () => {
  return (
    <>
      <Input category={"deaths"} tablbdy={"d"} td1={"dtd1"} td2={"dtd2"} td3={"dtd3"} td4={"dtd4"} />
      <Table category={"Deaths"} tablbdy={"d"} td1={"dtd1"} td2={"dtd2"} td3={"dtd3"} td4={"dtd4"} />
    </>
  )
}

export default Deaths