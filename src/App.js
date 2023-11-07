import "./App.css";
import Header from "./components/Header";
import * as Icon from "phosphor-react";

function App() {
  const data = [
    {
      title: "cleisoncarlos.com",
      description: "Meu site pessoal",
      color: "#96bd02",
      icon: Icon.At,
      url: "https://cleisoncarlos.com",
    },
    {
      title: "Linkedin",
      description: "Meu perfil no Linkedin",
      color: "#0d70b3",
      icon: Icon.LinkedinLogo,
      url: "https://www.linkedin.com/in/cleisoncarlos/",
    },
    {
      title: "Medium",
      description: "Artigos sobre tecnologia",
      color: "#00a267",
      icon: Icon.MediumLogo,
      url: "https://cleisoncarlos.medium.com/",
    },
    {
      title: "Github",
      description: "Projetos e Códigos",
      color: "#e44d30",
      icon: Icon.GithubLogo,
      url: "https://github.com/cleisoncarlos",
    },
    {
      title: "Dribbble",
      description: "Layouts e material gráfico",
      color: "#dd4a83",
      icon: Icon.DribbbleLogo,
      url: "https://dribbble.com/cleisoncarlos",
    },
    {
      title: "Twitch",
      description: "As vezes posto videos de games",
      color: "#8a43f2",
      icon: Icon.TwitchLogo,
      url: "https://www.twitch.tv/cleisoncarlos",
    },
    {
      title: "Spotify",
      description: "Músicas de gosto duvidoso",
      color: "#1dd05d",
      icon: Icon.SpotifyLogo,
      url: "https://open.spotify.com/user/clei_42",
    },
    {
      title: "Instagram",
      description: "Fotografia amadora",
      color: "#b71b6a",
      icon: Icon.InstagramLogo,
      url: "https://www.instagram.com/clei.jpg/",
    },
    {
      title: "Goole Play",
      description: "Em breve lançarei mais apps ",
      color: "#3e687a",
      icon: Icon.GooglePlayLogo,
      url: "https://play.google.com/store/apps/developer?id=Cleison+Carlos",
    },
    {
      title: "Slideshare",
      description: "Palestras / Seminários / Apresentações / Cursos",
      color: "#e08a25",
      icon: Icon.ProjectorScreenChart,
      url: "https://pt.slideshare.net/CleisonCarlos2",
    },    
    {
      title: "Xbox",
      description: "Conta de usuário Xbox",
      color: "#107c10",
      icon: Icon.GameController,
      url: " https://account.xbox.com/pt-BR/Profile?xr=mebarnav&csrf=JJ6RBKlsAoQUo5uDpG4cbMDCN-OSdHHDeUMbTBYjL73o-tMUKPrrJGDLKAFy9egX1vVkQDitglBN5coJEp1wMGgSIM01&wa=wsignin1.0",
    },
  ];

  return (
    <div className="container">
      <div className="box">
        <Header />

        {data.map((e, i) => (
          <a
            href={e.url}
            target="_blank"
            rel="noopener noreferrer"
            title={`Meu link do ${e.title}`}
            key={i}
          >
            <div className="containerLInk" style={{ background: e.color }}>
              <div className="icon">
                <e.icon size={48} weight="duotone" />
              </div>
              <div className="textContent">
                <p>
                  <strong>{e.title}</strong>
                </p>
                <p>
                  <small>{e.description}</small>
                </p>
              </div>

              <div className="shareIcon" onClick={() => {}}>
                <Icon.Share size={32} color="#fff" weight="duotone" />
              </div>
            </div>
          </a>
        ))}
      </div>
    </div>
  );
}
export default App;
