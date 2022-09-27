import PropTypes from 'prop-types';
import { getRandomHexColor } from 'components/Statistics/RandomColor';
import { Card, Title, Description, Item, Label, Percentage } from './Statistics.styled';

export const Statistics = ({ title, stats }) => {
    return <Card>
        {title && <Title>{title}</Title>}
        <Description>
            {stats.map(({ id, label, percentage }) => (
                <Item key={id}>
                    <Label>{label}</Label>
                    <Percentage>{percentage}%</Percentage>
                </Item>
            ))}
        </Description>
    </Card>
}

Statistics.propTypes = {
    title: PropTypes.string,
    stats: PropTypes.arrayOf(PropTypes.shape).isRequired
};