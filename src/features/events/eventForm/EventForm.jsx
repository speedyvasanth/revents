import React, {useState} from 'react';
import { Segment, Header, Form, Button } from 'semantic-ui-react';
import cuid from 'cuid';


const EventForm = ({setFormOpen, setEvents, createEvent, selectedEvent, updateEvent}) => {

    const initialValues = selectedEvent ?? {
        title: '',
        category: '',
        description: '',
        venue: '',
        date: ''
    }

    const [values, setValues] = useState(initialValues);    

    function handleFormSubmit() {
        selectedEvent ? updateEvent({...selectedEvent, ...values}) 
        : createEvent({
            ...values,
            id: cuid(),
            hostedBy: 'Vasanth',
            attendees: [],
            hostPhotoURL: "/assets/user.png"    
        })
        setFormOpen(false);
    }

    function handleOnChange(e) {
        const {name, value} = e.target;
        setValues({...values, [name]: value})
    }
    return(
        <>
            <Segment clearing>
                <Header content={ selectedEvent ? "Edit the Event" : "Create New Event" } />
                <Form onSubmit={handleFormSubmit}>
                <Form.Field>
                    <input  
                        type="text" 
                        placeholder="Event Title"
                        name="title" 
                        value={values.title} 
                        onChange={(e)=>handleOnChange(e)}
                    />
                </Form.Field>
                <Form.Field>
                    <input 
                        type="text" 
                        placeholder="Category" 
                        name="category" 
                        value={values.category} 
                        onChange={(e)=>handleOnChange(e)}
                    />
                </Form.Field>
                <Form.Field>
                    <input 
                        type="text" 
                        placeholder="Description" 
                        name="description" 
                        value={values.description} 
                        onChange={(e)=>handleOnChange(e)}
                    />
                </Form.Field>
                <Form.Field>
                    <input 
                        type="text" 
                        placeholder="Venue" 
                        name="venue" 
                        value={values.venue} 
                        onChange={(e)=>handleOnChange(e)}
                    />
                </Form.Field>
                <Form.Field>
                    <input 
                        type="date" 
                        placeholder="Date" 
                        name="date" 
                        value={values.date} 
                        onChange={(e)=>handleOnChange(e)}
                    />
                </Form.Field>                

                <Button type="submit" floated="right" positive content="Submit" />
                <Button onClick={()=>setFormOpen(false)} type="submit" floated="right" negative content="Cancel" />
                </Form>
            </Segment>


        </>

    )

}

export default EventForm;