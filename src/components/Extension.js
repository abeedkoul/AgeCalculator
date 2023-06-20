import React, { useState } from 'react'
import style from './Extension.module.css'
import moment from 'moment';

export const Extension = () => {


  const [date, setDate] = useState(null);

function lol(e) {
  e.preventDefault();
  
  const date = e.target.value.split('-');
 
  let year = date[0];
  const month = date[1];
  const day = date[2];
  year++;
  const full = year+month+day;
  const current = moment().format("MMM Do YY")



  const ans = moment(full, "YYYYMMDD").fromNow()
 
  setDate(ans);

  

}



  return (
    <div className={style.header}>
      <h1>AGE CALCULATOR</h1>
      <div className={style.heading}>
        <p className={style.pdemo}>Enter Your Date Of Birth In DD/MM/YYYY Format</p>
        <input onChange={(e)=> lol(e)} type='date' className={style.input}></input>
        <p className={style.ans}>{date}</p>
      
      </div>
    </div>
  )
}
