import { Fragment, FC, useRef } from "react"
import type { FormProps, SelectProps } from 'antd';
import {Button, Select, Form, Input, Flex } from 'antd';

type FieldType = {
    Year?: string;
    Month?: string;
};


const EventSearch: FC<any> = (props) => {
    const yearRef = useRef('');
    const monthRef = useRef('');

    function onFinish(event: any) { 
        props.onSearch(yearRef.current,monthRef.current)
    }
    
    return (
        <Flex gap='middle' vertical align='center' style={{margin:'10px 0'}}>
            <Form
                name="basic"
                layout="inline"
                labelCol={{ span: 8 }}
                wrapperCol={{ span: 16 }}
                initialValues={{ remember: true }}
                onFinish={onFinish}
                autoComplete="off"
            >
                <Form.Item<FieldType>
                    label="Year"
                    name="Year"
                >
                    <Select
                        onChange={(value) => { 
                          yearRef.current = value
                        }}
                        style={{ width: 120 }}
                        allowClear
                        options={[{ value: '2021', label: '2021' }, {value: '2022', label: '2022' }]}
                        placeholder="select it"
                    />
                </Form.Item>

                <Form.Item<FieldType>
                    label="Month"
                    name="Month"
                >
                    <Select
                        onChange={(value) => { 
                          monthRef.current = value
                        }}
                        style={{ width: 120 }}
                        allowClear
                        options={[{ value: '1', label: 'January' }, {value: '2', label: 'February'}]}
                        placeholder="select it"
                    />
                </Form.Item>

                <Form.Item
                >
                    <Button style={{minWidth:'100px'}} block type="primary" htmlType="submit">
                        Search
                    </Button>
                </Form.Item>
            </Form>
        </Flex>

    )
}

export default EventSearch;