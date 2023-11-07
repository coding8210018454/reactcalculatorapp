import React, {useState} from 'react';
import './App.css';




function App() {
   const [total, setTotal] = useState('');
  return (
    <>
    <div className="container">
        <div className="calculator">
            <div className="input-field">
              <input className='inp'  type="text" value={total}/>
            </div>
            <div>
               <input className='btn' type="button" value="C" onClick={()=> setTotal("")}/>
               <input className='btn' type="button" value="DE" onClick={(e)=>setTotal(total.toString().slice(0, -1))}/>
               <input className='btn' type="button" value="%" onClick={(e)=> setTotal(total + e.target.value)}/>
               <input className='btn' type="button" value="/" onClick={(e)=> setTotal(total + e.target.value)} />
            </div>

            <div>
               <input className='btn' type="button" value="7" onClick={(e)=> setTotal(total + e.target.value)} />
               <input className='btn' type="button" value="8" onClick={(e)=> setTotal(total + e.target.value)}/>
               <input className='btn' type="button" value="9" onClick={(e)=> setTotal(total + e.target.value)}/>
               <input className='btn clr' type="button" value="*" onClick={(e)=> setTotal(total + e.target.value)}/>
            </div>

            <div>
               <input className='btn' type="button" value="4" onClick={(e)=> setTotal(total + e.target.value)}/>
               <input className='btn' type="button" value="5" onClick={(e)=> setTotal(total + e.target.value)}/>
               <input className='btn' type="button" value="6" onClick={(e)=> setTotal(total + e.target.value)}/>
               <input className='btn clr' type="button" value="-" onClick={(e)=> setTotal(total + e.target.value)}/>
            </div>

            <div>
               <input className='btn' type="button" value="1" onClick={(e)=> setTotal(total + e.target.value)} />
               <input className='btn' type="button" value="2" onClick={(e)=> setTotal(total + e.target.value)} />
               <input className='btn' type="button" value="3" onClick={(e)=> setTotal(total + e.target.value)} />
               <input className='btn clr' type="button" value="+" onClick={(e)=> setTotal(total + e.target.value)} />
            </div>

            <input className='btn zero' type="button" value="0" onClick={(e)=> setTotal(total + e.target.value)} />
               <input className='btn' type="button" value="." onClick={(e)=> setTotal(total + e.target.value)} />
               <input className='btn clr' type="button" value="=" onClick={()=>setTotal(eval(total))} />
        </div>
      </div>
    </>
  );
}

export default App;
