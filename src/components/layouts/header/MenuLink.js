import React from 'react';
import MenuItem from "react-bootstrap/lib/MenuItem"
import LinkContainer from "react-router-bootstrap/lib/LinkContainer";

const MenuLink = ({to, eventKey, children}) =>
    <LinkContainer to={to} eventKey={eventKey}>
       <MenuItem>{children}</MenuItem>
    </LinkContainer>;

export default MenuLink;