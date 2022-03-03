import Ract from 'react';


function Header(props){
    
    return (
        <div>
            <h1>Current user : {props.name}</h1>
        </div>
    )
}

export default Header;