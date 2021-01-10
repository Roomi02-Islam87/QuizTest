import React from 'react'
import Person from './Person'

function NameList() { 
    //const names=['Roomi','Suman','Anjali']
    //const NameList=names.map(name => <h2>{name}</h2>)
    //return <div>{NameList}</div>
    const persons=[
        {
        id: 1,
        name:'roomi',
        age:24,
        skill:'react'
        },
        { 
        id: 2,
        name:'roomi',
        age:24,
        skill:'react'
        },
        {
        id: 3,
        name:'roomi',
        age:24,
        skill:'vue'
}
]
const personList=persons.map(person => <Person key={person.id} person={person} /> )
                //<h2>
                   // I am{person.name}. 
                //I am {person.age}years old. I know{person.skill}</h2>))
                

return <div>{personList}</div>
}
    

export default NameList
