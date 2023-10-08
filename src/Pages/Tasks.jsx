import React, { useEffect, useState } from 'react';
import { url } from '../url';
import TaskCard from '../components/TaskCard';

export const Tasks = () => {
  const [data, setData] = useState([])
  
  useEffect(()=> {
    fetch(`${url}/tasks`, {
        method: "GET",
        headers: {
            "Content-Type": "application/json",
            authorization: `Bearer ${localStorage.getItem("userAccessToken")}`
        }
    }).then(res=> res.json())
    .then(data=> {
      console.log(data);
      setData(data)
    })
    .catch(err=> console.log(err))
  },[])

  return (
    <div>
        <p style={{margin: '20px auto 20px', fontSize: '20px', fontWeight: '600'}}>Your Tasks</p>
        <div style={{ width: '80%', margin: 'auto', display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '20px'}}>
        {
          data.length > 0 && data?.map((el,i)=> (
            <div key={i}>
              <TaskCard {...el} />
            </div>
          ))
        }
        </div>
    </div>
  )
}
