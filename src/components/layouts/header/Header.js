import React, {Component, Fragment} from 'react';
import Dropdown from "react-bootstrap/lib/Dropdown";
import MenuItem from "react-bootstrap/lib/MenuItem"
import * as LC from "react-router-bootstrap/lib/LinkContainer";
import MenuLink from "./MenuLink";

class Header extends Component {
   render() {
      return (
          <Fragment>
             <Dropdown id="dropdown-services-menu" className="services-menu"> {/*IT WORKS*/}
                <Dropdown.Toggle useAnchor noCaret data-toggle="dropdown"><i className="icon-dropdown"/><span>Оплатить</span></Dropdown.Toggle>
                <Dropdown.Menu role="menuitem" aria-labelledby="dLabel">
                   <LC to="/ufssp/search"><MenuItem eventKey="1"><i className="icon-fssp"/>Исполнительные производства</MenuItem></LC>
                   <LC to="/services/gibdd/search"><MenuItem eventKey="2"><i className="icon-gibdd"/>Штрафы и&nbsp;пошлины ГИБДД</MenuItem></LC>
                   <LC to="/ufns"><MenuItem eventKey="3"><i className="icon-fns"/>Задолженности по&nbsp;налогам</MenuItem></LC>
                   <LC to="/rosregister"><MenuItem eventKey="4"><i className="icon-rosregister"/>Оплата услуг Росреестра</MenuItem></LC>
                   <LC to="/msk/parking"><MenuItem eventKey="5"><i className="icon-parking"/>Оплата парковки в&nbsp;Москве</MenuItem></LC>
                   <LC to="/comm"><MenuItem eventKey="6"><i className="icon-comm"/>Коммунальные услуги</MenuItem></LC>
                   <LC to="/ufms/poshliny"><MenuItem eventKey="7"><i className="icon-ufms"/>Оплата штрафов и&nbsp;пошлин ГУВМ МВД</MenuItem></LC>
                   <LC to="/uin/search"><MenuItem eventKey="8"><i className="icon-uin"/>Поиск начисления по&nbsp;УИН</MenuItem></LC>
                </Dropdown.Menu>
             </Dropdown>

             <Dropdown id="dropdown-services-menu" className="services-menu"> {/*NOT WORKS*/}
                <Dropdown.Toggle useAnchor noCaret data-toggle="dropdown"><i className="icon-dropdown"/><span>Оплатить</span></Dropdown.Toggle>
                <Dropdown.Menu role="menuitem" aria-labelledby="dLabel">
                   <MenuLink to="/ufssp/search" eventKey="1"><i className="icon-fssp"/>Исполнительные производства</MenuLink>
                   <MenuLink to="/services/gibdd/search" eventKey="2"><i className="icon-gibdd"/>Штрафы и&nbsp;пошлины ГИБДД</MenuLink>
                   <MenuLink to="/ufns" eventKey="3"><i className="icon-fns"/>Задолженности по&nbsp;налогам</MenuLink>
                   <MenuLink to="/rosregister" eventKey="4"><i className="icon-rosregister"/>Оплата услуг Росреестра</MenuLink>
                   <MenuLink to="/msk/parking" eventKey="5"><i className="icon-parking"/>Оплата парковки в&nbsp;Москве</MenuLink>
                   <MenuLink to="/comm" eventKey="6"><i className="icon-comm"/>Коммунальные услуги</MenuLink>
                   <MenuLink to="/ufms/poshliny" eventKey="7"><i className="icon-ufms"/>Оплата штрафов и&nbsp;пошлин ГУВМ МВД</MenuLink>
                   <MenuLink to="/uin/search" eventKey="8"><i className="icon-uin"/>Поиск начисления по&nbsp;УИН</MenuLink>
                </Dropdown.Menu>
             </Dropdown>
          </Fragment>
      );
   }
}

export default Header;
