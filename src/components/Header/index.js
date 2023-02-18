import "./index.css";

export default function Header() {
  const user = "cleisoncarlos";
  const userUrl = `https://github.com/${user}.png`;

  return (
    <div className="containerHeader">
      <div className="contentImage">
        <img className="userImage" src={userUrl} alt="User foto" />
      </div>
      <div className="contentText">
        <h2>Cleison Carlos</h2>
      
        <small>
          Mas pode me chamar de <strong>Clei</strong>, nascido e Belém, formado em <strong>Gestão em
          Sistemas de Informações</strong> com Especialização e <strong>Engenharia de Sotware</strong>,
          atualmente trabalho como <strong>Desenvolvedor Web/Mobile</strong> com foco em <strong>Front-End</strong>.
          Apaixonado de software livre e projetos <strong>Open-Source</strong>.
        </small>
      </div>
    </div>
  );
}
