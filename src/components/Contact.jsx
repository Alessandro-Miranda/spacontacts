import React from 'react';
class Contact extends React.Component
{
    render()
    {
        return (
            <article className="contact" data-testid="contact">
                {this.props.children}
            </article>
        );
    }
}

export default Contact;