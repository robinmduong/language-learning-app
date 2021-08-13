import React, { Component } from 'react';

class Contact extends Component {
    render() {
        return (
            <div className="contact-wrapper page-wrapper">
                <h2>Contact Page</h2>
                <p>Have a comment or question? Send us a message!</p>
                <p>
                    <ul>
                        <li>Robin Duong</li>
                        <li>Phone: (650) 636-7009</li>
                        <li>Email: robinmduong@gmail.com</li>
                        <li><a href="https://www.linkedin.com/in/robinmduong" target="_blank">LinkedIn</a></li>
                        <li><a href="https://www.github.com/robinmduong" target="_blank">GitHub</a></li>
                    </ul>
                </p>
            </div>
        )
    }
}

export default Contact;