import React, { useState } from 'react';
import { Button, Table, Space, PageHeader, Divider, Row, Modal, Form, Input } from 'antd';
import { PlusCircleOutlined } from '@ant-design/icons';

interface Props {
    people: Array<object>,
    addPerson: (person: object) => void;
}

const ModalForm: React.FC<Props> = ({people, addPerson}) => {
    const [isModalVisible, setIsModalVisible] = useState(false);
    const [key, setKey] = useState(5);

    const date = new Date()

    const layout = {
        labelCol: { span: 8 },
        wrapperCol: { span: 16 },
    };

    const onFinish = (values: any) => {
        console.log('Success:', values);
    };

    const onFinishFailed = (errorInfo: any) => {
        console.log('Failed:', errorInfo);
    };

    const [form] = Form.useForm();
        return (
        <>
        <PageHeader extra={
            <Button type='primary' onClick={() => setIsModalVisible(true)}>
            新建
            <PlusCircleOutlined />
            </Button>
            }>
        </PageHeader>
    
        <Modal 
            title="新建联系人信息" 
            visible={isModalVisible} 
            onCancel={() => setIsModalVisible(false)}
            onOk={() => {
                form
                    .validateFields()
                    .then((values) => {
                        setKey(key + 1)
                        form.resetFields();
                        let newPerson = {
                            key: key,  
                            date: `${date.getFullYear()}-${date.getMonth() + 1}-${date.getDate()} ${date.toLocaleTimeString('chinese',{hour12: false})}`,
                            ...values
                            }
                            console.log(newPerson)
                        addPerson(newPerson)
                        })
                    .then(() => {
                        setIsModalVisible(false)
                        })
                    .catch(info => {
                        console.log('Validate Failed:', info);
                    });
                }} 
            >
            <Form
                {...layout}
                form={form}
                name="form_in_modal"
                initialValues={{ remember: true }}
                onFinish={onFinish}
                onFinishFailed={onFinishFailed}
            >
                <Form.Item
                    label="姓名"
                    name="name"
                    rules={[{ required: true, message: 'Please input your username!' }]}
                >
                <Input/>
                </Form.Item>
    
                <Form.Item
                    label="手机号"
                    name="phone"
                    rules={[{ required: true, message: 'Please input your phone number!' }]}
                >
                <Input/>
                </Form.Item>
    
                <Form.Item
                    label="生日"
                    name="birthday"
                    rules={[{ required: true, message: 'Please input your birthday!' }]}
                >
                <Input/>
                </Form.Item>
    
                <Form.Item
                    label="性别"
                    name="sex"
                    rules={[{ required: true, message: 'Please input your sex!' }]}
                >
                <Input/>
                </Form.Item>
    
                <Form.Item
                    label="邮箱"
                    name="email"
                    rules={[{ required: true, message: 'Please input your email!' }]}
                >
                <Input/>
                </Form.Item>
    
                <Form.Item
                    label="详细地址"
                    name="address"
                    rules={[{ required: true, message: 'Please input your address!' }]}
                >
                <Input/>
                </Form.Item>
    
            </Form>
            </Modal>
        </>
    )
}

export default ModalForm;