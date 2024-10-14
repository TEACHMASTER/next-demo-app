import { Layout,Flex} from 'antd'
import Link from 'next/link'


const { Header } = Layout;

const MainHeader = () => { 
    return (
         <Header style={{fontSize:'30px',color:'#ffff'}}>
            <Flex justify='space-between'>
                  <Link href={'/'}>NextEvents</Link>
                  <Link href={'/events'}>Browse All Events</Link>
            </Flex>
        </Header>
    )
}


export default MainHeader;