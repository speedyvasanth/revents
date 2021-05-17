import React from 'react'
import { List, Image } from 'semantic-ui-react'

function EventListAttendee({attendee}) {
    return (
        <>
            <List.Item className="inlineBlock">
                <Image size="mini" circular src={attendee.photoURL} />
            </List.Item>
            
        </>
    )
}

export default EventListAttendee
