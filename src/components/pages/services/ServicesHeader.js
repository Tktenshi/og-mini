import React, {Component} from 'react';
import Dropdown from "react-bootstrap/lib/Dropdown";
import MenuItem from "react-bootstrap/lib/MenuItem"
import * as LC from "react-router-bootstrap/lib/LinkContainer";
// import withRouter from 'react-router/withRouter'
import withRouter from "react-router-dom/withRouter";

class ServicesHeader extends Component {

   shouldComponentUpdate(nextProps) {
      const prev = this.props.location.pathname;
      const next = nextProps.location.pathname;
      return (prev !== next);
   }

   render() {
      console.log("render ServicesHeader");
      return (
          <div id="header-zone">
             <h1>
                Оплата штрафов и&nbsp;пошлин <abbr>ГИБДД</abbr>
             </h1>
             <Dropdown id="dropdown-gibdd-page" className="hz_dropdown">
                <Dropdown.Toggle componentClass="button" useAnchor noCaret className="btn-overflow" data-toggle="dropdown" data-target="#lkNav">
                   <span className="dot"/>
                   <span className="dot"/>
                   <span className="dot"/>
                </Dropdown.Toggle>

                <Dropdown.Menu className="hz_tabs">
                   <menu className="toolbar">
                      <li>
                         <a href="/help/instructions/gibdd-help/" target="_blank" className="btn btn-icon">
                            <i className="icon-book-open"/>
                            <span className="tooltip">Инструкция</span>
                         </a>
                      </li>
                   </menu>

                   <ul className="hz_tabs" style={{paddingTop: 0}}/>
                   <LC to="/services/gibdd/search"><MenuItem eventKey="1"><i className="icon-search"/>Поиск штрафов</MenuItem></LC>
                   <LC exact to="/services/gibdd"><MenuItem eventKey="2">Оплата штрафов по&nbsp;постановлению</MenuItem></LC>
                   <LC to="/services/gibdd/poshliny"><MenuItem eventKey="3">Оплата пошлин</MenuItem></LC>
                </Dropdown.Menu>
             </Dropdown>
          </div>
      )
   }
}

export default withRouter(ServicesHeader);