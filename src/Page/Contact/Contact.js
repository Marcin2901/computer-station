import React from 'react';
import "./Contact.css";

const Contact = () => {
    return (
        <section className='contact' id='contact'>
            <h2 className='heading'><span>contact</span> us </h2>

            <div className='row'>
                <iframe className='map' src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2624.9914406134358!2d2.
                             2922872502280054!3d48.8583736085619!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.
                             1!3m3!1m2!1s0x47e66e2964e34e2d%3A0x8ddca9ee380ef7e0!2sWie%C5%BCa%20Eiffla!5e0!3m2!1spl!2snl!
                             4v1649498425075!5m2!1spl!2snl"
                             allowFullScreen="" loading="lazy"
                             referrerPolicy="no-referrer-when-downgrade">
                </iframe>

                <form>
                    <h3>get in touch</h3>
                    <div className='inputBox'>
                        <span className='fas fa-user'></span>
                        <input type="text" placeholder='name'/>
                    </div>
                    <div className='inputBox'>
                        <span className='fas fa-envelope'></span>
                        <input type="email" placeholder='email'/>
                    </div>
                    <div className='inputBox'>
                        <span className='fas fa-phone'></span>
                        <input type="number" placeholder='phone'/>
                    </div>
                    <input type="submit" value="Contact Now" className='btn'/>
                </form>

            </div>
        </section>
    )
}

export default Contact;