import React from 'react'
import Input from '../Components/Input'
import Table from '../Components/Table'

const Injuries = () => {
  return (
    <>
      <Input category={"injuries"} tablbdy={"i"} td1={"itd1"} td2={"itd2"} td3={"itd3"} td4={"itd4"} />
      <Table category={"Injuries"} tablbdy={"i"} td1={"itd1"} td2={"itd2"} td3={"itd3"} td4={"itd4"} />
    </>
  )
}

export default Injuries