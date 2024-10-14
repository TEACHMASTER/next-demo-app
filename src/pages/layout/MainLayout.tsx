import React, {FC} from 'react'
import { Flex, Layout,Typography } from 'antd';
import Link from 'next/link';
import MainHeader from './MainHeader';

const { Title} = Typography
const { Content } = Layout;

type propType = {
    children:React.ReactNode
}
const MainLayout:FC<propType>  = (props)=> {
  return (
    <Layout>
        <MainHeader/>
        <Content >
            {props.children}
        </Content>
    </Layout>
  )
}
export default MainLayout