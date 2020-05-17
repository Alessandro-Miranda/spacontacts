import React from 'react';

class Input extends React.Component
{
    render ()
    {
        return (
            <div className="filters__search">
                <input type="text" className="filters__search__input" placeholder="Pesquisar" 
                value={this.props.value} onChange={this.props.handleChange}/>
                <button className="filters__search__icon">
                    <i className="fa fa-search"/>
                </button>
            </div>
        );
    }
}
class ButtonName extends React.Component
{
    render()
    {
        return (
            <button className="filters__item" autoFocus onClick={this.props.handleClick}>
                Nome <i className="fas fa-sort-down" />
            </button>
        );
    }
}
class ButtonCountry extends React.Component
{
    render()
    {
        return (
            <button className="filters__item" onClick={this.props.handleClick}>
                País <i className="fas fa-sort-down" />
            </button>
        );
    }
}
class ButtonCompany extends React.Component
{
    render()
    {
        return (
            <button className="filters__item" onClick={this.props.handleClick}>
                Empresa <i className="fas fa-sort-down" />
            </button>
        );
    }
}
class ButtonDepartment extends React.Component
{
    render()
    {
        return (
            <button className="filters__item" onClick={this.props.handleClick}>
                Departamento <i className="fas fa-sort-down" />
            </button>
        );
    }
}
class ButtonDate extends React.Component
{
    render()
    {
        return (
            <button className="filters__item" onClick={this.props.handleClick}>
                Data de admissão <i className="fas fa-sort-down" />
            </button>
        );
    }
}
export {Input, ButtonName, ButtonCountry, ButtonCompany, ButtonDepartment, ButtonDate};