import "./index.css";

export default function Header() {
  const user = "cleisoncarlos";
  const userUrl = `https://github.com/${user}.png`;

  return (
    <div className="containerHeader">
      <div>
        <img className="userImage" src={userUrl} alt="User foto" />
      </div>
      <div>
        <h2>Cleison Carlos</h2>
        <small>
          Meu nome é Cleison Carlos, nascido e Belém, formado em Gestão em
          Sistemas de Informações com Especialização e Engenharia de Sotware,
          atualmente trabalho como Desenvolvedor Web com foco em Front-End.
          Apaixonado de software livre e projetos Open-Source.
        </small>
      </div>
    </div>
  );
}
