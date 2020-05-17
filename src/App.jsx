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
import {
Input, 
ButtonName,
ButtonCountry,
ButtonCompany,
ButtonDepartment,
ButtonDate} from './components/Buttons';

class App extends React.Component {
  constructor(props)
  {
    super(props);
    this.state = {
      contacts: [],
      contactsFiltered: [],
      loading: false,
      value: ''
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
            contactsFiltered: resposta.sort(function (a, b) {
              return (a.name >b.name) ? 1 : ((b.name >a.name) ? -1 : 0);
            }),
            contacts: resposta.sort(function (a, b) {
              return (a.name >b.name) ? 1 : ((b.name >a.name) ? -1 : 0);
            }),
            loading: false
          });
        });
  }
  handleClickName(event)
  {
    event.preventDefault();
    
    this.setState({
      contacts: [],
      contactsFiltered: [],
      loading: true
    });

    let data;
    let url='https://5e82ac6c78337f00160ae496.mockapi.io/api/v1/contacts';
    fetch(url).then(res => res.json())
    .then(resultado => {data=resultado;})
      .then(() => {
        this.setState({
          contacts: data.sort(function (a, b) {
            return (a.name >b.name) ? 1 : ((b.name >a.name) ? -1 : 0);
          }),
          contactsFiltered: data.sort(function (a, b) {
            return (a.name >b.name) ? 1 : ((b.name >a.name) ? -1 : 0);
          }),
          loading: false
        })
      }); 
  }
  handleClickCountry(event)
  {
    event.preventDefault();
    
    this.setState({
      contacts: [],
      contactsFiltered: [],
      loading: true
    });

    let data;
    let url='https://5e82ac6c78337f00160ae496.mockapi.io/api/v1/contacts';
    fetch(url).then(res => res.json())
    .then(resultado => {data=resultado;})
      .then(() => {
        this.setState({
          contacts: data.sort(function (a, b) {
            return (a.country >b.country) ? 1 : ((b.country >a.country) ? -1 : 0);
          }),
          contactsFiltered: data.sort(function (a, b) {
            return (a.country >b.country) ? 1 : ((b.country >a.country) ? -1 : 0);
          }),
          loading: false
        })
      });
  }
  handleClickCompany(event)
  {
    event.preventDefault();
    
    this.setState({
      contacts: [],
      contactsFiltered: [],
      loading: true
    });

    let data;
    let url='https://5e82ac6c78337f00160ae496.mockapi.io/api/v1/contacts';
    fetch(url).then(res => res.json())
    .then(resultado => {data=resultado;})
      .then(() => {
        this.setState({
          contacts: data.sort(function (a, b) {
            return (a.company >b.company) ? 1 : ((b.company >a.company) ? -1 : 0);
          }),
          contactsFiltered: data.sort(function (a, b) {
            return (a.company >b.company) ? 1 : ((b.company >a.company) ? -1 : 0);
          }),
          loading: false
        })
      });
  }
  handleClickDepartment(event)
  {
    event.preventDefault();
    
    this.setState({
      contacts: [],
      contactsFiltered: [],
      loading: true
    });

    let data;
    let url='https://5e82ac6c78337f00160ae496.mockapi.io/api/v1/contacts';
    fetch(url).then(res => res.json())
    .then(resultado => {data=resultado;})
      .then(() => {
        this.setState({
          contacts: data.sort(function (a, b) {
            return (a.department >b.department) ? 1 : ((b.department >a.department) ? -1 : 0);
          }),
          contactsFiltered: data.sort(function (a, b) {
            return (a.department >b.department) ? 1 : ((b.department >a.department) ? -1 : 0);
          }),
          loading: false
        })
      });
  }
  handleClickDate(event, status)
  {
    event.preventDefault();
    
    this.setState({
      contacts: [],
      contactsFiltered: [],
      loading: true
    });

    let data;
    let url='https://5e82ac6c78337f00160ae496.mockapi.io/api/v1/contacts';
    fetch(url).then(res => res.json())
    .then(resultado => {data=resultado;})
      .then(() => {
        this.setState({
          contacts: data.sort(function (a, b) {
            return (a.admissionDate >b.admissionDate) ? 1 : ((b.admissionDate >a.admissionDate) ? -1 : 0);
          }),
          contactsFiltered: data.sort(function (a, b) {
            return (a.admissionDate >b.admissionDate) ? 1 : ((b.admissionDate >a.admissionDate) ? -1 : 0);
          }),
          loading: false
        })
      });
  }
  handleChange(event)
  {
    const {target: {value}, } = event;
    
    const datafilter = this.state.contacts.filter((item) => item.name.toLowerCase()
    .startsWith(value.toLowerCase()));
    if(datafilter=="")
    {
      let data;
      let url='https://5e82ac6c78337f00160ae496.mockapi.io/api/v1/contacts';
      fetch(url).then(res => res.json())
      .then(resultado => {data=resultado;})
        .then(() => {
          this.setState({
            contactsFiltered: data
          }); 
        });   
    }
    else
    {
      this.setState({contactsFiltered: datafilter});
    }
  }
  render() {
    return (
      <div class="app" data-testid="app">
        <React.Fragment>
          <Topbar />
          <Filters>
            <Input handleChange={event => this.handleChange(event)}/>
            <ButtonName handleClick={event => this.handleClickName(event)}/>
            <ButtonCountry handleClick={event => this.handleClickCountry(event)}/>
            <ButtonCompany handleClick={event => this.handleClickCompany(event)}/>
            <ButtonDepartment handleClick={event => this.handleClickDepartment(event)}/>
            <ButtonDate handleClick={event => this.handleClickDate(event, "date")}/>
          </Filters>
          <div>
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
            
              {this.state.loading ? <Loader /> : this.state.contactsFiltered.map(contacts => {
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
            </div>
        </React.Fragment>
      </div>
    )
  }
}

export default App;