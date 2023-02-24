const { request, response } = require('express')
const express = require('express')
const app = express()

let phoneBook = 
[
    { 
      id: 1,
      name: "Arto Hellas", 
      number: "040-123456"
    },
    { 
      id: 2,
      name: "Ada Lovelace", 
      number: "39-44-5323523"
    },
    { 
      id: 3,
      name: "Dan Abramov", 
      number: "12-43-234345"
    },
    { 
      id: 4,
      "name": "Mary Poppendieck", 
      "number": "39-23-6423122"
    }
]


// Fetching all PhoneBook
app.get('/api/persons', (request, response) => {
    response.json(phoneBook)
})

//  Fetching a single phoneBook
// app.get('/api/persons/:id', (request, response) => {
//     const id = Number(request.params.id)
//     const phoneContact = phoneBook.find(phoneContact => phoneContact.id === id)
//     if (phoneContact) {    
//         response.json(phoneContact)  
//     } else {    
//         response.status(404).end()  
//     }
// })


// Deleting Resources
app.delete('/api/persons/:id', (request, response)=>{
    const id = Number(request.params.id)
    phoneBook = phoneBook.filter(phoneContact => phoneContact.id !== id)

    response.status(405).end()
    console.log(phoneBook);
})

const PORT = 3001
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})