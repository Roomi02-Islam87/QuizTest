import React from 'react'
import { Button } from './Button'
import './Footer.css';
import {Link} from 'react-router-dom';


function Footer() {
    return (
        <div className="footer-container">
            <section className='footer-subscription'>
                <p className='footer-subscription-heading'>
                    Join me on but i m not interested to talking you! Sorry...
                </p>
                <p className='footer-subscription-text'>
                    But you have to subscribe this bcz no choice for you...
                </p>
                <div className="input-areas">
                    <form>
                        <input type='email' name='email' placeholder="Your Email" 
                        className='footer-input'/>
                        <Button buttonStyle='btn--outline'>Subscribe</Button>
                    </form>
                </div>
            </section>

            <div className="footer-links">
                <div className="footer-link-wrapper">
                    <div className="footer-link-items">
                        <h2>About Us</h2>
                        <Link to='/sign-up'>How it Works</Link>
                        <Link to='/'>Testimonials</Link>
                        <Link to='/'>Careers</Link>
                        <Link to='/'>Investors</Link>
                        <Link to='/'>Terms of Services</Link>
                    </div>
                    <div className="footer-link-items">
                        <h2>Contact</h2>
                        <Link to='/sign-up'>Contact</Link>
                        <Link to='/'>Support</Link>
                        <Link to='/'>Destination</Link>
                        <Link to='/'>Sponsership</Link>
                        
                    </div>
                    
                </div>
                <div className="footer-link-wrapper">
                    <div className="footer-link-items">
                        <h2>Videos</h2>
                        <Link to='/sign-up'>Submit Videos</Link>
                        <Link to='/'>Ambassadors</Link>
                        <Link to='/'>Agency</Link>
                        <Link to='/'>Influencer</Link>
                        
                    </div>
                    <div className="footer-link-items">
                        <h2>Social</h2>
                        <Link  to='/sign-up'>Instagram</Link>
                        <Link to='/'>Facebook</Link>
                        <Link to='/'>Youtube</Link>
                        <Link to='/'>Twitter</Link>
                        
                    </div>
                    
                </div>
            </div>
            <section className='social-media'>
                <div className='social-media-wrap'>
                    <div className='footer-logo'>
                        <Link  to='/' className='social-logo'>
                            RUU<i className='fab-fa-typo3' />
                        </Link>
                    </div>
                    <small className='website-right'>RUU @ 2021</small>
                    <div className='social-icons'>
                        <Link 
                        className='social-icon-link facebook'
                        to='/'
                        target='_blank'
                        aria-label='facebook'>
                            <i className='fab fa-facebook-f' />
                        </Link>
                        <Link 
                        className='social-icon-link instagram'
                        to='/'
                        target='_blank'
                        aria-label='Instagram'>
                            <i className='fab fa-instagram' />
                        </Link>
                        <Link 
                        className='social-icon-link youtube'
                        to='/'
                        target='_blank'
                        aria-label='Youtube'>
                            <i className='fab fa-youtube' />
                        </Link>
           
                        <Link 
                        className='social-icon-link twitter'
                        to='/'
                        target='_blank'
                        aria-label='Twitter'>
                            <i className='fab fa-twitter' />
                        </Link>
           
                        <Link 
                        className='social-icon-link linkedin'
                        to='/'
                        target='_blank'
                        aria-label='Linkedin'>
                            <i className='fab fa-linkedin' />
                        </Link>
           
           
                    </div>
                </div>
            </section>
            
        </div>
    )
}

export default Footer
