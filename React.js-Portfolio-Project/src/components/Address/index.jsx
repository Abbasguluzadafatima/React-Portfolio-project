import { Link } from "react-router-dom";
import styled from "styled-components";

const AddressIcon= styled.span`
    font-size: 23px;
    color: var(--main-color);
`
const LinkText= styled.span`
font-family: Open Sans;
font-size: 16px;
font-weight: 700;
line-height: 19px;
letter-spacing: 0em;
text-align: left;
color: var(--text-color);
margin-left: 25px;
`

// eslint-disable-next-line react/prop-types
export const Address = ({toLink, icon,text}) => {
  return (
    <div style={{marginTop:20}}>
    <Link to={toLink} >
        <AddressIcon>
            {icon}
            </AddressIcon>

            <LinkText>
            {text}
            </LinkText>
    </Link>
    
    </div>
  )
}
