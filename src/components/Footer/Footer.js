import React from 'react';
import FooterLogo from '../../images/LogoFooter.svg';
import telegramImg from '../../images/telegram.svg';
import vkImg from '../../images/vk.svg';
import twitterImg from '../../images/twitter.svg';
import hImg from '../../images/H.svg'

function Footer() {
    return (
        <div className='footer'>
            <div className='footer__logos'>
                <img className='footer__logos-logo' src={FooterLogo} alt='logo' />
                <p className='footer__logos-text'>
                    © ООО «Лого», 2008—&copy; {new Date().getFullYear()}
                </p>
            </div>
            <div className='footer__content'>
                <ul className='list-description'>
                    <li className='list-description__li'>Решения</li>
                    <li className='list-description__li'>Оборудование</li>
                    <li className='list-description__li'>О компании</li>
                    <li className='list-description__li'>Блог</li>
                </ul>
                <ul className='list-network'>
                    <li className='list-network__li'>
                        <a className='list-network__li-link' src='https://telegram.org/'>
                            <img className='list-network__li-img' src={telegramImg} alt='telegram-icon' />
                        </a>
                    </li>
                    <li className='list-network__li'>
                        <a className='list-network__li-link' src='https://vk.com/'>
                            <img className='list-network__li-img' src={vkImg} alt='vk-icon' />
                        </a>
                    </li>
                    <li className='list-network__li'>
                        <a className='list-network__li-link' src='https://twitter.com/'>
                            <img className='list-network__li-img' src={twitterImg} alt='twitter-icon' />
                        </a>
                    </li>
                    <li className='list-network__li'>
                        <a className='list-network__li-link' src='https://H.com/'>
                            <img className='list-network__li-img' src={hImg} alt='H-icon' />
                        </a>
                    </li>
                </ul>
            </div>
            <div className='license'>
                <p className='license__text'>
                    © ООО «Лого», 2008—&copy; {new Date().getFullYear()}
                </p>
                <p className='license__text'>
                    Лицензия на телематические услуги № 176267
                </p>
            </div>
        </div>
    )
}

export default Footer