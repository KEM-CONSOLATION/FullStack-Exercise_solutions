const { request, response } = require('express')
const express = require('express')
const app = express()

app.use(express.json())

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

// Adding new requests
app.post('/api/persons', (request, response) => {  
    const phoneBook = request.body  
    console.log(phoneBook)  
    response.json(phoneBook)
})



// Generating IDs
const generateId = () => {
    const randId = phoneBook.length > 0
      ? Math.random(...phoneBook.map(n => n.id))
      : 0
    return randId
  }
  
  app.post('/api/phoneBook', (request, response) => {
    const body = request.body
  
    if (!body.name) {
      return response.status(400).json({ 
        error: 'name is missing' 
      })
    }

    if (!body.number) {
        return response.status(400).json({ 
          error: 'number is missing' 
        })
      }

    if (body.name === phoneBook.name) {
        return response.status(400).json({ 
          error: 'name already exists in phonebook' 
        })
      }
  
    const phoneContact = {
      content: body.content,
      important: body.important || false,
      date: new Date(),
      id: generateId(),
    }
  
    phoneBook = phoneBook.concat(phoneContact)
  
    response.json(phoneContact)
  })



const PORT = 3001
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})
