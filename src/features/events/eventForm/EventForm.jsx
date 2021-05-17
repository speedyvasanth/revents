import React from 'react';
import { Segment, Header, Form, Button, Input } from 'semantic-ui-react';


export default function EventForm({setFormOpen}) {

    return(
        <>
            <Segment clearing>
                <Header content="Create New Event" />
                <Form.Field>
                    <Input fluid type="text" placeholder="Event Title" />
                </Form.Field>
                <Form.Field>
                    <Input fluid type="text" placeholder="Category" />
                </Form.Field>
                <Form.Field>
                    <Input fluid type="text" placeholder="Description" />
                </Form.Field>
                <Form.Field>
                    <Input fluid type="text" placeholder="Venue" />
                </Form.Field>
                <Form.Field>
                    <Input fluid type="date" placeholder="Date" />
                </Form.Field>                

                <Button type="submit" floated="right" positive content="Submit" />
                <Button onClick={()=>setFormOpen(false)} type="submit" floated="right" negative content="Cancel" />
            </Segment>


        </>

    )

}