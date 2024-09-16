import './styles.css';

function Card({user}) {

    const getFullName = () => {
        return `${user.firstName} ${user.lastName}`
      }

    return (
        <div className='card-contanier'>
            <p className='card-info'>User card</p>
            <img src= {user.avatarUrl} className='avatar' alt="User Avatar" />
            <p className='card-info'>Full Name: {getFullName()}</p>
            <p className='card-info'>Job: {user.job}</p>
            <p className='card-info'>Hobbys: {user.hobbys.join(', ')}</p>
        </div>
    );
}

export default Card;