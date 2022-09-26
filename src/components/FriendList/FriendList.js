import PropTypes from 'prop-types';
import { List, Item, Status, Avatar, Name } from './FriendList.styled';

export const FriendList = ({ friends }) => {
    return <List>
        {friends.map(({ avatar, name, isOnline, id }) => (
            <Item key={id}>
                <Status className={isOnline}></Status>
                <Avatar src={avatar} alt="User avatar" width="48" />
                <Name>{name}</Name>
            </Item>
        ))}
    </List >
}