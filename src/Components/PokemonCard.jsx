import { StarOutlined } from '@ant-design/icons';
import { Card } from 'antd';
import Meta from 'antd/es/card/Meta';

const PokemonCard = ({ name,image,habilities }) => {

    const allHabilities = habilities.map(ability => ability.ability.name).join(', ')

    return (
        <Card title={name} cover={<img src={image} alt={name} />}
            extra={<StarOutlined />}>
            <Meta description={allHabilities} />
        </Card>
    )
}

export default PokemonCard