import styled from 'styled-components';

export const List = styled.ul`
margin-top: 30px;
`
export const Item = styled.li`
display: flex;
justify-content: space-between;
align-items: center;
gap: 5px;
height: 60px;
border-radius: 4px;
box-shadow: 3px 8px 14px 1px rgba(0,0,0,0.56);
margin-bottom: 10px;

`
export const Status = styled.span`
height: 15px;
width: 15px;
border-radius: 50%;
background-color: ${props => props.className ? 'green' : 'red'};
margin-left: 10px;
margin-right: 10px;
`
export const Avatar = styled.img`
margin-left: 10px;
margin-right: 10px;
/* width:100px; */
/* display: block; */
border-radius: 5px;
/* max-width: 100%;
height: auto; */
/* margin-bottom: 20px; */
`
export const Name = styled.p`
margin-left: 10px;
margin-right: 10px;
`