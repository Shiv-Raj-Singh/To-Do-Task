import {useNavigate , Link} from 'react-router-dom';
// import './Todo.css'

export default function Navbar(){
    return (
      // navbar navbar-expand-lg navbar-dark bg-dark
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
          <div className="container-fluid">
            <a className="navbar-brand" href="#" id='logo1' >To-Do App </a>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon" />
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  {/* <a className="nav-link active" aria-current="page" href="/">Home</a> */}
                  <Link className="nav-link active" id="links"  to={'/'} >HOME</Link>
                </li>
                <li className="nav-item">
                  {/* <a className="nav-link" href="/Todo">Todo-Task</a> */}
                  <Link className="nav-link active" id="links"  to={'/Todo'} >Todo-Task</Link>
                </li>
                <li className="nav-item">
                <Link className="nav-link active" id="links"  to={'/profile'} >Contact</Link>
                  {/* <a className="nav-link" href="/profile">Contact</a> */}
                </li>
              </ul>
            </div>
          </div>
        </nav>

      );
}