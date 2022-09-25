import styled from 'styled-components';

export const Card = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
/* margin:10px; */
width:350px;
/* padding-top: 6px; */
border-radius: 8px;
box-shadow: 3px 8px 14px 1px rgba(0,0,0,0.56);
overflow: hidden;
`;

export const Description = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
background-color: #ffffff;
gap:12px;
padding-bottom: 15px;
`

export const Avatar = styled.img`
/* width:100px; */
/* display: block; */
border-radius: 50%;
/* max-width: 100%;
height: auto; */
margin-bottom: 20px;
`

export const Name = styled.p`
font-size: 24px;
font-weight: bold;
`
export const Tag = styled.p`
color: #768696;
`

export const Stats = styled.ul`
background-color:#f3f6f9;
width: 100%;
display: flex;
justify-content: center;
align-content: center;
align-items: center;
`
export const Item = styled.li`
display: flex;
flex: 0 0 calc((100% - 4px) / 3);
flex-direction: column;
justify-content: center;
align-content: center;
align-items: center;
padding-top: 20px;
padding-bottom: 20px;
border: 1px solid #e7ecf2;
`

export const Label = styled.span`
color: #768696;
padding-bottom: 5px;
`

export const Quantity = styled.span`
font-style: 24px;
font-weight: bold;
`