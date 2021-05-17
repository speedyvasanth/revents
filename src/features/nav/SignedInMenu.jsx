import React from 'react';
import {Menu, Image, Dropdown} from 'semantic-ui-react';
import { Link } from 'react-router-dom';

function SignedInMenu({signOut}) {
    return (
        <>
            <Menu.Item position="right">
                <Image src="/assets/user.png" avatar spaced="right" />
                <Dropdown pointing="top left" text="vasanth">
                    <Dropdown.Menu>
                        <Dropdown.Item as={Link} to="/creatEvent" text="Create Event" icon="plus" />
                        <Dropdown.Item text="My Profile" icon="user" />
                        <Dropdown.Item onClick={signOut}  text="SignOut" icon="power" />
                    </Dropdown.Menu>                    
                </Dropdown>
            </Menu.Item>            
        </>
    )
}

export default SignedInMenu
