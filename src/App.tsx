import React, { useState, useEffect } from 'react';
import logo from './logo.svg';
import { Button, Table, Space, PageHeader, Divider, Row, Modal, Form, Input } from 'antd';
import './App.css';
import {data, columns} from './data';
import InfoDetail from './InfoDetail';
import ModalForm from './ModalForm'
import { getRenderPropValue } from 'antd/lib/_util/getRenderPropValue';

interface personObject {
  key?: number,
  date?: string,
  birthday?: string,
  name?: string,
  phone?: string,
  sex?: string,
  email?: string,
  address?: string
}

const { Column } = Table;

function App() {
  const [people, setPeople] = useState<Array<personObject>>(data);
  const [row, setRow] = useState<personObject>({});
  const [isShown, setIsShown] = useState<boolean>(false);
  
  const addPerson = (person: personObject) => {
    setPeople(preValue => {return [...preValue, person]})
  }

  return (
    <>
      <ModalForm people={people} addPerson={addPerson}/>
      <div className='table-container'>
        <Table 
          columns={columns} 
          dataSource={people} 
          onRow={(record) => {
            return {
              onClick: (event) => {
                console.log(record)
                setIsShown(true)
                setRow(record)
              }
            }
          }}
          >
            <Column title='姓名' dataIndex='name' key='name'/>
            <Column title='手机号' dataIndex='phone' key='phone'/>
            <Column title='生日' dataIndex='birthday' key='birthday'/>
            <Column title='创建时间' dataIndex='date' key='date'/>
            <Column title='性别' dataIndex='sex' key='sex'/>
            <Column title='邮箱' dataIndex='email' key='email'/>
            <Column title='详细地址' dataIndex='address' key='address'/>
          </Table>
      </div>
        
        <Divider></Divider>
        {isShown && <InfoDetail row={row}/>}
    </>
  );
}

export default App;
