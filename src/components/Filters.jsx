import React from 'react';

class Filters extends React.Component
{
    render()
    {
        return (
            <div className="container" data-testid="filters">
                <section className="filters">    
                    {this.props.children}
                </section>
            </div>
        );
    }
}

export default Filters;