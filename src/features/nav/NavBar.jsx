import React from 'react';
import { Menu, Container, Button, Image } from 'semantic-ui-react';

function NavBar({setFormOpen}) {
    return(
        <Menu inverted fixed="top">
            <Container>
                <Menu.Item header> 
                    <Image size="mini" style={{marginRight: 15}} src="/assets/logo.png" />                   
                    Revents
                </Menu.Item>
                <Menu.Item name="Events"></Menu.Item>

                <Menu.Item>
                    <Button positive inverted content="Create Event" onClick={()=> setFormOpen(true)}/>
                </Menu.Item>

                <Menu.Item position="right">
                    <Button basic inverted content="Login"/>
                    <Button basic inverted content="Register" style={{marginLeft: '1em'}}/>
                </Menu.Item>
            </Container>

        </Menu>
    )
}

export default NavBar;