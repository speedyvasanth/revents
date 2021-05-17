import React, { useState } from 'react';
import { Menu, Container, Button, Image } from 'semantic-ui-react';
import { NavLink, useHistory } from 'react-router-dom';
import SignedOutMenu from './SignedOutMenu';
import SignedInMenu from './SignedInMenu';

function NavBar({setFormOpen}) {
    const history = useHistory();
    const [authenticated, setAuthenticated] = useState(false);
    
    function handleSignOut() {
        setAuthenticated(false);
        history.push('/');
    }

    return(
        <Menu inverted fixed="top">
            <Container>
                <Menu.Item as={NavLink} exact to={'/'} header> 
                    <Image size="mini" style={{marginRight: 15}} src="/assets/logo.png" />                   
                    Revents
                </Menu.Item>
                <Menu.Item as={NavLink} exact to={'/events'} name="Events"></Menu.Item>
                {authenticated && 
                <Menu.Item as={NavLink} exact to={'/createEvent'}>
                    <Button positive inverted content="Create Event"/>
                </Menu.Item> }
                {authenticated ? 
                    <SignedInMenu signOut={handleSignOut} /> 
                :   <SignedOutMenu setAuthenticated={setAuthenticated} /> }                
                
            </Container>

        </Menu>
    )
}

export default NavBar;