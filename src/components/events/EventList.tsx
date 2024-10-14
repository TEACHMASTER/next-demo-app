import React, { useEffect } from 'react'
import EventItem from './EventItem'
import { Event } from '@/../../dummy-data'
import { Flex } from "antd";

export default function EventList(props: any) {
    const items = props.items || {} as Event[]
    console.log(items)
    return (        
        <div>
            <Flex gap='middle' vertical  align='center'>
                {
                    items.map((i: Event) => {
                        return <EventItem key={ i.id} item={ i} />
                    })
                }
            </Flex>
        </div>
    )
}
