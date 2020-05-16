import React from 'react';
import './App.scss';
import {
  SpanAvatar,
  SpanNome,
  SpanTelefone,
  SpanPais,
  SpanAdmissao,
  SpanEmpresa,
  SpanDepartamento
} from './components/Span.jsx';
import Topbar from './components/Topbar.jsx';
import Filters from "./components/Filters.jsx";
import Contacts from './components/Contacts';
import Contact from './components/Contact';
import Loader from './components/Loader';

class App extends React.Component {
  constructor(props)
  {
    super(props);
    this.state = {
      contacts: [],
      loading: false
    };
  }

  componentDidMount()
  {
    this.setState({ loading: true });
    let url='https://5e82ac6c78337f00160ae496.mockapi.io/api/v1/contacts';
    let resposta;
    fetch(url).then(res => res.json())
      .then(resultado => {resposta=resultado;})
        .then(() => {
          this.setState({
            contacts: resposta,
            loading: false
          });
        });
  }
  
  render() {
    return (
      <React.Fragment>
        <Topbar />
        <Filters />
        <Contacts className="contacts">
          <Contact>
            <SpanAvatar />
            <SpanNome text="Nome" />
            <SpanTelefone text="Telefone" />
            <SpanPais text="País" />
            <SpanAdmissao text="Admissão" />
            <SpanEmpresa text="Empresa" />
            <SpanDepartamento text="Departamento" />
            </Contact>
        </Contacts>

          {this.state.loading ? <Loader /> : null }

          {this.state.contacts.map(contacts => {
            return (
              <Contacts key={contacts.id} className="contacts--displayed">
                <Contact>
                  <SpanAvatar image={contacts.avatar} alt={contacts.name}/>
                  <SpanNome text={contacts.name} id="contact__data--names" />
                  <SpanTelefone text={contacts.phone} />
                  <SpanPais text={contacts.country}/>
                  <SpanAdmissao text={contacts.admissionDate.split('T')[0]} />
                  <SpanEmpresa text={contacts.company} />
                  <SpanDepartamento text={contacts.department} />
                </Contact>
              </Contacts>
            )
          })}
      </React.Fragment>
    )
  }
}

export default App;