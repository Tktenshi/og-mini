import React, {Component} from 'react';
import ServicesHeader from "./ServicesHeader";
import ServicesContent from "./ServicesContent";

class ServicesPage extends Component {
   constructor(props){
      super(props);
      document.body.classList.add('new-inputs')
   }

   render() {
      console.log("render ServicesPage");
      return (
          <section id="pay-pages">
             <div className="container pay-pages">
                <ServicesHeader/>
                <ServicesContent/>
             </div>
          </section>
      );
   }
}

export default ServicesPage;