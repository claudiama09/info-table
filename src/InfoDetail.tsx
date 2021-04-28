import React from 'react';
import './App.css'

interface Props {
    row: Row
}

interface Row {
    key?: number,
    date?: string,
    name?: string,
    birthday?: string,
    phone?: string,
    sex?: string,
    email?: string,
    address?: string
}

const InfoDetail: React.FC<Props> = ({row}) => {
    console.log(row)
    return (
        <div className='wrapper'>
            <div>姓名</div>
            <div>{row.name}</div>
            <div>手机号</div>
            <div>{row.phone}</div>
            <div>生日</div>
            <div>{row.birthday}</div>
            <div>性别</div>
            <div>{row.sex}</div>
            <div>邮箱</div>
            <div>{row.email}</div>
            <div>详细地址</div>
            <div>{row.address}</div>
        </div>
    )
  }

export default InfoDetail;