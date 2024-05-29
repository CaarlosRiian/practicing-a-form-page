import "./ContentHome.css";

import { Link } from "react-router-dom";

const Content_Home = () => {
  return (
    <>
        <h1 className="h1-caso">Caso você queira fazer conosco, entre em contato</h1>
        <Link to="/forms" className="button-contact">Entrar em Contato</Link>
    </>
  );
};

export default Content_Home;
