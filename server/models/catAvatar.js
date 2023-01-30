import {gql} from 'apollo-server-express';

function catAvatar() {


    return (
        <div>
            <img src={data.image_link} alt={data.name}/>
        </div>
    )
}

export default catAvatar;