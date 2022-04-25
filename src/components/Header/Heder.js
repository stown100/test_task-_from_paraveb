import React from 'react';
import logo from '../../images/Logo.svg';
import telephon from '../../images/telephon.svg';
import mail from '../../images/mail.svg'

function Heder() {
    return (
        <div className='header'>
            <img className='header__logo' src={logo} alt='logo' />
            <div className='header__content'>
                <span className='header__content-telephone'>
                    <a className='header__content-telephone-link' href="tel:+78129252237">
                        8 800 000 00 00
                    </a>
                    <a className='header__content-telephone-link-mobile' href="tel:+78129252237">
                        <img className='header__content-telephone-link-img-mobile' src={telephon} alt='telephon' />
                    </a>
                </span>
                <span className='header__content-email'>
                    <a className='header__content-email-link' href="mailto:sales@logo.ru">
                        sales@logo.ru
                    </a>
                    <a className='header__content-email-link-mobile' href="mailto:sales@logo.ru">
                        <img className='header__content-email-link-img-mobile' src={mail} alt='mail' />
                    </a>
                </span>
            </div>
        </div>
    )
}

export default Heder