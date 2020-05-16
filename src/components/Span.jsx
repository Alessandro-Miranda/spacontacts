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
    return (
        <span className="contact__data">{props.text}</span>
    );
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