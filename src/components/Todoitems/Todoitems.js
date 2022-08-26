
import './Todoitems.css'

function Todoitems({items, deleteitem}) {
    let length = items.length;
    const listitems = length ? items.map(item => {
        return (
            <div key={item.id}>
                <span className='name'>{item.name}</span>
                <span className='age'>{item.age}</span>
                <span className='action icon' onClick={() => deleteitem(item.id)}>&times;</span>
            </div>
        )
    }) : ( 
        <p> There is no items to show</p>
    ) ;
    return (
        <div className='listitems'>
            <div>
                <span className='name title'>Name</span>
                <span className='age title'>Age</span>
                <span className='action title'>Action</span>
            </div>
            {listitems}
        </div>
    )
}
export default Todoitems