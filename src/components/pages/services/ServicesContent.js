import React, {Component} from 'react';
import Nav from "react-bootstrap/lib/Nav";
import NavItem from "react-bootstrap/lib/NavItem"

class ServicesContent extends Component {
   render() {
      console.log("render ServicesContent");
      return (
          <div id="content-zone">
             <form id="payform-search" method="POST">
                <Nav bsStyle="tabs" activeKey="1" className="search-tabs">
                   <NavItem eventKey="1" data-toggle="tab">
                      <span className="tab-icon"><i className="icon-docs"/></span>
                      <span>по&nbsp;документам</span>
                   </NavItem>
                   <NavItem eventKey="2" data-toggle="tab">
                      <span className="tab-icon"><i className="icon-doc-id"/></span>
                      <span>по&nbsp;№&nbsp;постановления</span>
                   </NavItem>
                </Nav>
             </form>
          </div>
      )
   }
}

export default ServicesContent;