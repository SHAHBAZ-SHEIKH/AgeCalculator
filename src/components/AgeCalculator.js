import React from 'react'
import './AgeCalculator.css'
import { useState } from 'react'

const AgeCalculator = () => {

    const [birthDate , setBirthDate] = useState("")
    const [age,setAge] = useState(0)

    const calculateAge = () =>{
        const todayDate = new Date()
        const birthdateDate = new Date(birthDate)

        let age = todayDate.getFullYear() - birthdateDate.getFullYear()
        const monthDiff = todayDate.getMonth() - birthdateDate.getMonth()
        if(monthDiff <0  || (monthDiff ===0 && todayDate.getDate() <birthdateDate.getDate())){
            age--;

        }
        setAge(age)
        

    }

    const resetCalculator = () =>{
        setBirthDate('')
        setAge(0)
    }

    const inputValue = (event) =>{
        let getValue = (event.target.value)
        setBirthDate(getValue)

    }

    



  return (
    <div className='container' >
        <h2 className='heading conatiner_title' >Age Calculator</h2>
        <p className='para container_title' >The Age Calculator can determine the age or interval between two date.The Calculated Age will be displayed in Years</p>

        <div className='container-middle'>

            <div className='right' >
                <h4>Date of Birth</h4>
                <input type='date' className='date'  onChange={inputValue} />

                <div className='button_div' >

                    <button className='button_65' onClick={calculateAge} >Calculate Age</button>
                    <button className='button_65' onClick={resetCalculator} >Reset</button>

                </div>

            </div>

            <div className='left' >

                <div className='conatiner_middle_para' >
                    <h1>Your Age is :</h1>
                </div>

                <h1 className='age'> {age > 0 ? `${age}` : ''}</h1>



            </div>

        </div>
      
    </div>
  )
}

export default AgeCalculator
