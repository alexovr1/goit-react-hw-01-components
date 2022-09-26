import styled from 'styled-components';

export const Card = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
margin-bottom: 15px;
margin-top: 15px;
width:500px;
border-radius: 8px;
box-shadow: 3px 8px 14px 1px rgba(0,0,0,0.56);
overflow: hidden;
`;

export const Description = styled.ul`
display: flex;
justify-content: center;
align-items: center;
gap:5px;
width: 100%;
`

export const Title = styled.h2`
font-size: 24px;
font-weight: bold;
padding-bottom: 15px;
padding-top: 5px;

`

export const Item = styled.li`
display: flex;
flex: 0 0 calc((100% - 20px) / 5);
flex-direction: column;
justify-content: center;
align-content: center;
align-items: center;
padding-top: 20px;
padding-bottom: 20px;
background-color: red;
`

export const Label = styled.span`
color: #ffffff;
padding-bottom: 5px;
`

export const Percentage = styled.span`
font-style: 24px;
font-weight: bold;
color: #ffffff;

`