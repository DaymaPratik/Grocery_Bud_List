import { useState , useEffect } from 'react';
import { toast } from 'react-toastify';
import './MainSection.css';

const MainSection = () => {
    let dataArr=JSON.parse(localStorage.getItem('listArr'));
    let [item,setItem]=useState('');
    let [isChecked,setIsChecked]=useState(false);
    let [listArr,setListArr]=useState(dataArr || []);
    useEffect(()=>{
        localStorage.setItem('listArr',JSON.stringify(listArr))
    },[listArr])

    function addTask(){
        setListArr([...listArr,item]);
        setItem('');
        toast.success('Added the List Item......')
    }

    function deleteTask(i){
        setListArr(listArr.filter((item,idx)=> {return idx!=i;} ))
        toast.success('Deleted the list item.....')
    }
    function addSrtike(){
        setIsChecked(!isChecked);
    }
    return (
        <main className='main-box'>
            <h2 className='main-head'>Grocery Bud</h2>
            <div className='ip-box'>
                <input type="text" placeholder='Add item...' className='ip' value={item} onChange={(e)=>{setItem(e.target.value)}}/>
                <button className='add-btn' onClick={addTask}>Add</button>
            </div>
            <ul className='op-box'>
                {listArr.map((itema,i)=>{
                    return (
                        <li key={i} className='list-item'>
                           <div className='check-task-box'>
                           <input type="checkbox" className='task-item' onChange={addSrtike}/>
                           <span style={{ textDecoration: isChecked ? 'line-through' : 'none' }}> {itema}</span>
                           </div>
                            <div className='-del-btn-box'>
                            <button className='del-btn' onClick={()=>{deleteTask(i)}}>
                                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRQYjI5QzHL57HXL_awf_qoJuAKCR_Z93r0mPEUe_45yw&s" alt=""  width='25px'/>
                            </button>
                            </div>
                        </li> 
                    )
                })}
            </ul>
        </main>
    );
}

export default MainSection;
