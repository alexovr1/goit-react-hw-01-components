import PropTypes from 'prop-types';
import { List, Item, Status, Avatar, Name } from './FriendList.styled';

export const FriendList = ({ array }) => {
    return <List>
        {array.map(({ avatar, name, isOnline, id }) => (
            <Item key={id}>
                <Status data={isOnline}></Status>
                <Avatar src={avatar} alt="User avatar" width="48" />
                <Name>{name}</Name>
            </Item>
        ))}
    </List>
}