import './index.css'

export default function Header() {

  const user = 'cleisoncarlos';
  const userUrl = `https://github.com/${user}.png`;

  return (
    <div className='containerHeader'>
   <img className="userImage" src={userUrl} alt="User foto"/>  
        <div>
            <p><strong><small>Lorem Ipsum Dolor</small></strong></p>
            <small>Phosphor takes advantage of React Context to make applying a default style to all icons simple. Create an IconContext.Provider at the root of the app (or anywhere above the icons in the tree) and pass in a configuration object with props to be applied by default to all icons:</small>
        </div>
    </div>
  )
}
