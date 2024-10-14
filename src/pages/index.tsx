import React from 'react'
import EventList from '@/components/events/EventList'
import { getAllEvents } from '../../dummy-data'

export default function index() {
  return (
    <div>
          <EventList items={ getAllEvents()} />
    </div>
  )
}
