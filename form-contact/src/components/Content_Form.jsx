import { Link } from "react-router-dom";
import { useState } from "react";
import "./Content_Form.css";

const Content_Form = () => {

    const [name, setName] = useState("");
    const [l_name, setL_name] = useState("");
    const [email, setEmail] = useState("");
    const [queryType, setQuerytype] = useState("");
    const [textarea, setTextarea] = useState("");
    const [consent, setConsent] = useState("");

    const handleName = (e) => {
        setName(e.target.value);
    };

    const handleL_name = (e) => {
        setL_name(e.target.value);

    };

    const handleEmail = (e) => {
        setEmail(e.target.value);
    }

    const handleQueryType = (e) => {
        setQuerytype(e.target.value);
    }

    const handleConsent = (e) => {
        setConsent(e.target.value);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Formulário Enviado")
        console.log(`Nome: [ ${name} ], Sobrenome:  [ ${l_name} ], Email: [ ${email} ], QueryType escolhida: [ ${queryType} ], Mensagem: [ ${textarea} ], CheckBox [ ${consent} ]`)

        setName("");
        setL_name("");
        setEmail("");
        setQuerytype("");
        setTextarea("");
        setConsent(false)
        // alert("carai")
    }

    const handleTextarea = (e) => {
        setTextarea(e.target.value);
    }

    return (
        <>
            <div className="body-css" style={{ background: '#e0f1e7', height: '100vh'}}>
                <div className="card-content">
                    <h1 className="h1-contact-us">Contact Us</h1>
                    <form onSubmit={handleSubmit}>
                        <span className="span-name">First Name</span>
                        <input type="text" name="name" className="input-name" value={name} onChange={handleName} />
                    
                  
                        <span className="span-l-name">Last Name</span>
                        <input type="text" name="name" className="input-l-name" value={l_name} onChange={handleL_name} />
                    
                   
                         <span className="span-email">Email Address</span>
                        <input type="email" name="email" className="input-email" value={email} onChange={handleEmail} />
                    
                        <span className="span-query-typee">Query Type</span>
                        <input type="radio" name="queryType" value="general-enq" checked={queryType === "general-enq"} onChange={handleQueryType} className="input-query-typee"  />
                        <label className="label-general-enq">General Enquiry</label>   
                   
                        <input type="radio" name="queryType" value="sup-request" checked={queryType === "sup-request"} onChange={handleQueryType} className="input-supp-request" />
                        <label htmlFor="genreal-enq"   className="label-supp-request">Support Request</label>  
                   
                        <span className="span-message">Message</span>
                        <textarea name="text-message" id="text-message" className="textarea-message" maxLength="1000" value={textarea} onChange={handleTextarea} />
                  
                        <input type="checkbox" id="consent" name="consent" className="check-terms" checked={consent} onChange={handleConsent} />
                        <span className="span-check-msg">I consent to being contacted by the team</span>

                        <input type="submit" value="Submit" className="button-submit"  />
                    </form>
                </div>
            </div>
            <Link to="/" className="botao-voltar">Voltar</Link>
        </>
    );
};

export default Content_Form;