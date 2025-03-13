import './Home.css'

import Logo from '../images/image_logo.png'

import { IoMdClose } from "react-icons/io";
import { GoStar } from "react-icons/go";
import { GoStarFill } from "react-icons/go";
import { useState } from 'react';

export default function Home() {
  const [isNoteFavorited, setIsNoteFavorited] = useState(false);

  return (
    <div className="container__main">
      <div className="section__header">
        <div className='box__img__name__input'>
          <div className='inner__img'>
            <img className='logo' src={Logo} alt="" />
          </div>
          <div className='inner__name__web__application center'>
            <p className='name__web__application'>CoreNotes</p>
          </div>
          <div className='inner__input__search center'>
            <input
              type="search"
              className="input__search"
              placeholder='Pesquisar notas'
            />
          </div>
        </div>
        
        <div className='box__icon__close center'>
          <IoMdClose className='icon__close'/>
        </div>

      </div>
      <div className="section__create__note center">
        <div className='card__create__note'>
          <div className='header__create__note center'>
            <input
              type="text"
              className='input__add__tittle'
              name="tittle"
              id="tittle"
              placeholder='Título'
            />

            {isNoteFavorited ? (
              <GoStarFill
                className='icon__star__favorited'
                onClick={()=> {setIsNoteFavorited(false)}}
              />
            ):(
              <GoStar
                className='icon__star__no__favorited'
                onClick={()=> {setIsNoteFavorited(true)}}
              />
            )}
          </div>
    
        </div>
      </div>
      <div className="section__favorite__to_do">favorite to-do</div>
      <div className="section__another__to_do">another to_do</div>
    </div>
  );
}