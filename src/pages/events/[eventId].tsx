import { useRouter } from 'next/router'
import React, { Fragment } from 'react'
import { getEventById} from '@/../dummy-data'
import EventSummary from '@/components/event-detail/event-summary'
import EventLogistics from '@/components/event-detail/event-logistics'
import EventContent from '@/components/event-detail/event-content'
import { Event } from '@/../dummy-data'

export default function EventDetailPage() {
    const route = useRouter()
    const id = route.query.eventId as string
    const eventData = getEventById(id) as Event

    if (!eventData) {
        return <p></p>
    }
    return (
        <Fragment>
            <EventSummary title={eventData.title} />
            <EventLogistics event={eventData} />
            <EventContent>
                <p>{ eventData.description}</p>
            </EventContent>
        </Fragment>
    )
}
