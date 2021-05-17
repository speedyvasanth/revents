import React from 'react'
import { Segment, Item, List, Icon, Button } from 'semantic-ui-react'
import EventListAttendee from './EventListAttendee'

function EventListItem({event}) {
    return (
        <>
            <Segment.Group>
                <Segment>
                    <Item.Group>
                        <Item>
                            <Item.Image size="tiny" circular src={event.hostPhotoURL} />
                            <Item.Content>
                                <Item.Header content={event.title} />
                                <Item.Description>
                                    Hosted by {event.hostedBy}
                                </Item.Description>
                            </Item.Content>
                        </Item>
                    </Item.Group>
                </Segment>
                <Segment>
                    <span>
                        <Icon name="clock" /> {event.date}
                        <Icon name="marker" /> {event.venue}
                    </span>
                </Segment>
                <Segment secondary>
                    <List>
                        {event.attendees.map(attendee =>(
                            <EventListAttendee attendee={attendee} key={attendee.id} />
                        ))}                        
                        
                    </List>
                </Segment>
                <Segment clearing>
                    <div>Description of the Event</div>
                    <Button color="teal" floated="right" content="View" />
                </Segment>
            </Segment.Group>
        </>
    )
}

export default EventListItem
