import React from 'react';
import { Segment, Container, Header, Image, Button, Icon } from 'semantic-ui-react';
import { NavLink } from 'react-router-dom';

export default function Homepage({history}) {

    return(
        <Segment inverted textAlign="center" vertical className="masthead">
            <Container>
                <Header as="h1" inverted>
                    <Image size="massive" src="/assets/logo.png" style={{margiBottom: 12}} />
                    Re-vents
                </Header>
                <Button onClick={()=> history.push('/events')} size="huge" inverted >
                    Get Started
                    <Icon name="right arrow" inverted />
                </Button>
            </Container>
        </Segment>
    )
}