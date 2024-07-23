function Header(props){
    console.log(props);
    return(
        <div>
            <h1 className="head">This is Header {props.headerInfo.email}</h1>
        </div>
    )
}
function Footer(props){
    console.log(props);
    return(
        <div className="foot">
            <h3 >This is footer made by {props.name} & Phone number of Srajan {props.phone}</h3>
            
        </div>
    )
}
function Container(props){
    return(
        <div className="cont">
            {props.children}
        </div>
    )
}
// export default Header;
export {Header , Footer , Container};