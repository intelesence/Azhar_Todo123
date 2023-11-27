'use client';
import React,{useState} from 'react'

const page = () => {

  const [title, settitle] = useState('');
  const [des, setdes] = useState('');
const [maintask, setmaintask] = useState([]);

const deletehandl=(i)=>{

let copytask=[...maintask]

copytask.splice(i,1)
setmaintask(copytask);
}

let rendertask=<h2>No Task Available</h2>;
if(maintask.length>0){
rendertask=maintask.map((t,i)=>{

return(

<li key={i}>


<div className='flex justify-between mb-5 w-2/3'>


<h3 className='font-bold'>  {t.title}  </h3>

<h3 className='font-bold'>  {t.des}  </h3>


<button className='bg-black text-white py-2 px-4'


onClick={()=>{

deletehandl(i);


}}
>

Delete

</button>
</div>


</li>


)



})
}
const handlsubmit=(e)=>{

e.preventDefault();


setmaintask([...maintask,{title,des}]);

console.log(maintask);
settitle('');
setdes('');
}

  return (
    <>
    <h1 className='text-white text-2xl text-center bg-black'>
     My Todo list 
      </h1>  

     <form onSubmit={handlsubmit}>


    <input type='text'placeholder='Enter title here'
    
    className='px-4 py-2 m-8 border-zinc-800 border-4 text-green-600'
    value={title}
    onChange={(e)=>{

   settitle(e.target.value)


    }}
    />

    
<input type='text'placeholder='Enter Description here'
    
    className='px-4 py-2 m-8 border-zinc-800 border-4 text-green-600'
    value={des}
    onChange={(e)=>{

      setdes(e.target.value);
   
   
       }
      }
    />

   

    <button className='bg-black text-white py-2 px-4 m-8 font-bold'>

      Add Task
    </button>
     </form>

     <hr className='border-black border-2'/>

   <div className='p-8 bg-slate-200'>

  <ul>

{rendertask}

  </ul>


   </div>

    </>
  )
}

export default page
