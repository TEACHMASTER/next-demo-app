import { useRouter } from 'next/router'
import React from 'react'
import {getFilteredEvents } from '@/../dummy-data'
import EventList from '@/components/events/EventList'

export default function FilteredEventPage() {
  const router = useRouter()

  const query= router.query.slug as Array<string>

  
  console.log(query)
  
  let result

  if (query) {
    const searchObj = {
      year: Number.parseInt(query[0]),
      month: Number.parseInt(query[1]),
    }

    result = getFilteredEvents(searchObj)
  }


  return (
    <div>
      <EventList items={ result?result:[]} />
    </div>
  )
}
