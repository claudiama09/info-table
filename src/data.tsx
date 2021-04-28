const data = [
    {
        key: 1,
        date: '2021-04-26 11:37:48',
        name: '陈辉',
        phone: '151211030xx',
        sex: '男'
    },
    {
        key: 2,
        date: '2021-04-22 19:29:39',
        name: 'chanpeng',
        phone: '18652826xx7',
        sex: '男',
        email: 'hui.chen@text.com',
        adress: '上海市浦东新区某某路弄88号108室'
    },
    {
        key: 3,
        date: '2021-04-22 19:29:39',
        name: '潘蕾',
        phone: '131207718xx',
        birthday: '2021-04-20',
        sex: '女',
    },
    {
        key: 4,
        date: '2021-04-22 16:35:41',
        name: 'test',
        phone: '138074663xx',
        sex: '未知'
    }
]

const columns = [
    {
        title: '姓名',
        dataIndex: 'name',
        key: 'name'
    },
    {
        title: '手机号',
        dataIndex: 'phone',
        key: 'phone'
    },
    {
        title: '生日',
        dataIndex: 'birthday',
        key: 'birthday'
    },
    {
        title: '创建时间',
        dataIndex: 'date',
        key: 'date'
    },
    {
        title: '性别',
        dataIndex: 'sex',
        key: 'sex'
    },
    {
        title: '邮箱',
        dataIndex: 'email',
        key: 'email'
    },
    {
        title: '详细地址',
        dataIndex: 'address',
        key: 'address'
    }
]

export {data, columns};