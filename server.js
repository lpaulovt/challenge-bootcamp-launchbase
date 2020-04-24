const express = require('express')
const nunjucks = require('nunjucks')

const server = express()
const courses = require('./data')

server.set("view engine", "njk")

server.use(express.static('public'))

nunjucks.configure("views", {
    express:server,
    noCache: true,
    autoescape: false
})

server.get("/", function(req, res){
    return res.render('about')
})

server.get("/courses", function(req, res){
    return res.render('courses', { items: courses})
})

server.get("/courses/:id", function(req, res){
    const id = req.params.id

    const course = courses.find(function (course){
            return course.id == id }    
    )

    if(!course){
        res.send("Not-found!")
    }

    return res.render('course', {item: course});
})

server.use(function(req, res){
    res.status(404).render("not-found")
})

server.listen(5000, function(){
    console.log("Server is running")
})