import '../styles/Informations.css'
import React, { useState } from 'react';

function CustomerInformations(props){
const [name,setName]=useState('');
const [profession,setProfession]=useState('');
const [nomEntreprise,setNomEntreprise]=useState('');
const [phone,setPhone]=useState('');
const [address,setAddress]=useState('');
const [mail,setMail]=useState('');
const [website, setWebsite]=useState('');
const [submitted,setSubmitted]=useState(false);
    const handleNameChange=(e)=>{
        setName(e.target.value)
    }
    const handleProfessionChange=(e)=>{
        setProfession(e.target.value)
    }
    const handleNomEntrepriseChange=(e)=>{
        setNomEntreprise(e.target.value)
    }
    const handlePhoneChange=(e)=>{
        setPhone(e.target.value)
    }
    const handleAddressChange=(e)=>{
        setAddress(e.target.value)
    }
    const handleMailChange=(e)=>{
        setMail(e.target.value)
    }
    const handleWebsiteChange=(e)=>{
        setWebsite(e.target.value)
    }


    const handleSubmit=(e)=>{
        e.preventDefault();
        setSubmitted(true);
        props.onDataChange(name,profession,nomEntreprise,phone,mail,address,website);
    }
    const title="Veuillez entrer vos  dans le formulaire ci dessous :";
    return(<div className="informations-part">
        <p className='informations-part-title'>{title}</p>
        <form className='informations-part-form' onSubmit={handleSubmit}>
           Nom : <input type="text" placeholder="Entrez vos noms et prenoms" value={name} required onChange={handleNameChange}/>
            Profession :<input type="text" placeholder="Entrez votre profession" value={profession} required onChange={handleProfessionChange}/>
            Nom de l'entreprise :<input type="text" placeholder="Entrez le nom de votre entreprise" value={nomEntreprise} required onChange={handleNomEntrepriseChange}/>
            Numero de telephone :<input type='text' placeholder='Entrez votre numero de telephone' value={phone} required onChange={handlePhoneChange} />
            Email :<input type='email' placeholder='Entrez votre email' value={mail} required onChange={handleMailChange} />
            Adresse :<input type='text' placeholder='Donnez votre adresse' value={address} required onChange={handleAddressChange} />
            Nom de votre Site :<input type='text' placeholder='Entrez le nom de votre site' value={website} required onChange={handleWebsiteChange} />            
            <button>Valider</button>
            {submitted}
        </form>
    </div>)
}

export default CustomerInformations;