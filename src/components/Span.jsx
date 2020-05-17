import React from 'react';
import './Span.css';
export function SpanAvatar(props)
{
    return (
        <span className="contact__avatar"><img src={props.image} alt={props.alt} /></span>
    )
}

export function SpanNome(props)
{
    return (
    <span className="contact__data" id={props.id}>{props.text}</span>
    );
}

export function SpanTelefone(props)
{
    return (
        <span className="contact__data">{props.text}</span>
    );
}

export function SpanPais(props)
{
    return (
        <span className="contact__data">{props.text}</span>
    );
}

export function SpanAdmissao(props)
{
    let day=props.text.split('-')[2];
    let month=props.text.split('-')[1];
    let year=props.text.split('-')[0];
    
    if(!isNaN(day) && !isNaN(month) && !isNaN(year))
    {
        return (
            <span className="contact__data">{`${day}/${month}/${year}`}</span>
        );    
    }
    else
    {
        return (
            <span className="contact__data">{props.text}</span>
        );
    }
    
}

export function SpanEmpresa(props)
{
    return (
        <span className="contact__data">{props.text}</span>
    );
}

export function SpanDepartamento(props)
{
    return (
        <span className="contact__data">{props.text}</span>
    );
}