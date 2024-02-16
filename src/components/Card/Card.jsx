import Icon from '../Icon/Icon'
import './Card.css'
function Card({gameEnd,player,onPlay,index}){
    let icon = <Icon />
    if(player == 'o'){
        icon = <Icon name='circle' />
    }else if(player == 'x'){
        icon = <Icon name='cross' />
    }
    return(
        <div className='card' onClick={()=>!gameEnd && player=="" && onPlay(index)}>
            {icon}
        </div>
    )
}

export default Card;