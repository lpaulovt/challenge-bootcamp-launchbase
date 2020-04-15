const express = require('express')
const nunjucks = require('nunjucks')

const server = express()
const courses = require('./data')

server.set("view engine", "njk")

server.use(express.static('public'))

nunjucks.configure("views", {
    express:server
})

server.get("/", function(req, res){
    return res.render('about')
})

server.get("/courses", function(req, res){
    return res.render('courses', { items: courses})
})

server.get("/about-course", function(req, res){
    const id = req.query.id;

    const course = courses.find(function(course){
        if (course.id == id) {
            return true
        }
    })

    if(!course){
        res.status(404).render("not-found")
    }

    return res.render("about-course", {item: course});
})

server.use(function(req, res){
    res.status(404).render("not-found")
})

server.listen(5000, function(){
    console.log("Server is running")
})