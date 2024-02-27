const express = require('express')

const app = express()

const port = 3000

//middle ware
app.use(express.json())


// khale array lo
const arr = []

// sab mangwao
app.get('/api/v1/user', (req, res) => {
    res.send(arr)
})

//add krwao
app.post('/api/v1/user', (req, res) => {
    const { title } = req.body;
    arr.push({
        title: title,
        id: Date.now()
    })
    res.send('user add hogya bhai')
})


//delete krwao
app.delete('/api/v1/user/:id', (req, res) => {
    const { id } = req.params
    const index = arr.findIndex((user) => user.id === Number(id));
    if (index === -1) {
        res.send("user not found")
        return
    }
    arr.splice(index, 1);
    res.send("user deleted")
})

//edit krwao

app.put('/api/v1/user/:id', (req, res)=>{
    const { title } = req.body
    const {id} = req.params
    const index = arr.findIndex((user)=> user.id === Number(id))
    if(index===-1){
        res.send("user not found")
        return
    }
    arr[index].title = title
    res.send('user edit hogya')
})

app.listen(port, () => {
    console.log(`Exapmle good h bhai ${3000}`);
})