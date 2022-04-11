
import React from 'react'
import "./main.css"




const Header=(props)=>{
  if (props.data) {
    var name = props.data.name;
    var occupation = props.data.occupation;
    var description = props.data.description;
    var city = props.data.address.city;
    var networks = props.data.social.map(function (network) {
      return <li key={network.name}><a href={network.url}><i className={network.className}></i></a></li>
    });
  }

    return (
      <>
      <section className='Header'>
        <header>
        <div className="row banner">
          <div className="banner-text">
            <h1 className="responsive-headline">{name}.</h1>
            <h3>I'm a {city} based <span>{occupation}</span> {description}</h3>
            <hr />
            <ul className="social">
              {networks}
            </ul>
          </div>
        </div>

        </header>

      </section>
      </>
    )
}
export default Header;