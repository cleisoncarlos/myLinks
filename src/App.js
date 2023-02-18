import './App.css';
import Header from './components/Header'
import * as Icon from "phosphor-react";

function App( ) {



  const data = [{
      title: 'Facebook',
      description: 'Lorem Ipsum Dolor',
      color: '#3b5998',
      icon: Icon.FacebookLogo,
      url: 'https://facebook.com'
    },
    {
      title: 'Medium',
      description: 'Lorem Ipsum Dolor',
      color: '#00754a',
      icon: Icon.MediumLogo,
      url: 'https://google.com'
    },
    {
      title: 'Github',
      description: 'Lorem Ipsum Dolor',
      color: '#982914',
      icon: Icon.GithubLogo,
      url: 'https://google.com'
    },
    {
      title: 'Dribbble',
      description: 'Lorem Ipsum Dolor',
      color: '#891944',
      icon: Icon.DribbbleLogo,
      url: 'https://google.com'
    },
    {
      title: 'Twitch',
      description: 'Lorem Ipsum Dolor',
      color: '#410a91',
      icon: Icon.TwitchLogo,
      url: 'https://google.com'
    },
    {
      title: 'Spotify',
      description: 'Lorem Ipsum Dolor',
      color: '#159543',
      icon: Icon.SpotifyLogo,
      url: 'https://google.com'
    },
    {
      title: 'Instagram',
      description: 'Lorem Ipsum Dolor',
      color: '#83144d',
      icon: Icon.InstagramLogo,
      url: 'https://google.com'
    },
    {
      title: 'Goole Play',
      description: 'Lorem Ipsum Dolor',
      color: '#3e687a',
      icon: Icon.GooglePlayLogo,
      url: 'https://google.com'
    },
    {
      title: 'Slideshare',
      description: 'Phosphor takes advantage of React Context',
      color: '#9e5f17',
      icon: Icon.ProjectorScreenChart,
      url: 'https://google.com'
    },
  ];


  return ( 
     <div className="container">

     <div className='box'>
     <Header/>




     {data.map((e, i) => (
         <a  href = {e.url} target = "_blank" rel = "noopener noreferrer" title = {`Meu link do ${e.title}`} >
             <div className = 'containerLInk' key={i} style={{background: e.color}}>
                 <div className = 'icon' >
       

                <e.icon size={48} weight="duotone" />
             
                 </div> 
                 <div className='textContent'>
                 
                 <p><strong>{e.title}</strong></p> 
                 <p><small>{e.description}</small> </p>
                 </div> 

                 <div className='shareIcon' onClick={()=> {}}>
                   <Icon.Share size = {32} color = "#fff" weight = "duotone" />
                 </div>
             </div> 
         </a>

       ))
     }


     </div>
     </div>

   



  );
}
export default App;