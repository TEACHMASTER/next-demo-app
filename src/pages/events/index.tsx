import React, { Fragment } from 'react'
import { getAllEvents } from '@/../dummy-data'
import EventList from '@/components/events/EventList'
import EventSearch from '@/components/events/EventSearch'
import { useRouter } from 'next/navigation'

export default function AllEventPage() {
  const router = useRouter()
  const eventlist = getAllEvents()

  function onSearch(year:string,month:string) { 
    if(year&&month)
      router.push(`/events/${year}/${month}`)
  }

  return (
    <Fragment>
      <EventSearch onSearch={ onSearch} />
      <EventList items={ eventlist} />
    </Fragment>
  )
}
