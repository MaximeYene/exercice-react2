import '../App.css';
import CustomerInformations from './Informations';
import VisitCard from './VisitCard';
import '../styles/Container.css'
import React, { useState } from 'react';

function App() {
const [name,setName]=useState('');
const [profession,setProfession]=useState('');
const [nomEntreprise,setNomEntreprise]=useState('');
const [phone,setPhone]=useState('');
const [address,setAddress]=useState('');
const [mail,setMail]=useState('');
const [website, setWebsite]=useState('');
const [data,setData]=useState(null)


  const handleDataChange=(name,profession,nomEntreprise,phone,mail,address,website)=>{
    setName(name);
    setProfession(profession);
    setNomEntreprise(nomEntreprise);
    setPhone(phone);
    setMail(mail);
    setAddress(address);
    setWebsite(website);
    setData({name,profession,nomEntreprise,phone,mail,address,website})
  }
  return(<div className='container'>
    <CustomerInformations onDataChange={handleDataChange} />
    {data && <VisitCard name={name} profession={profession} nomEntreprise={nomEntreprise} phone={phone} mail={mail} address={address} website={website} />}
  </div>)
}

export default App;
