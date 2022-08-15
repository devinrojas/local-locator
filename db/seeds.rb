# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

Question.create(question: "What is Local Locator?", answer: "Local Locator is a website to help you find Local Fighting Game weekly tournaments around your area. Whether you are new to the scene, or a veteran who is trying to find a new venue, we are here to help you ever step of the way.")
Question.create(question: "What is the Fighting Game Community?", answer: "The Fighting Game Community is a group of indivisuals who gather and build friendships through a fighting game, like Mortal Kombat or Street Fighter! This is NOT limited to just traditional fighting games. Anything that can be considered a fighting game is still part of the FGC (short for Fighting Game Community). It can be a Super Nintendo game that only 3 of your friends play to Super Smash Bros., you are part of the FGC.")
Question.create(question: "What controller do I play with?", answer: "Anything you'd like! There are plenty of different options. The most common are either a console controller like a Dualsense or Xbox controller, but there are also arcade sticks to mimic the old school feeling of the arcade. There are hundreds of adapters out there if you'd like to play with your own controller. There are professionals who have won major tournaments with custom or retro controllers. The options are endless! If you have any questions on what is 'legal' and what is not in your scene, contact the Tournament Organizers in your area for more information.")
Question.create(question: "How do I get into fighting games?", answer: "For a more detailed guide on how to get started, visit our 'New to FGC' guide on our website, but if you would like a more straight forward answer; looking into YouTube videos on a game you like, searching a local near you through our website, and viewing Wiki pages for the games you like are great first steps on getting into the FGC!")
Question.create(question: "I found/I'm starting a local! How do I submit it?", answer: "It's easy! Simply create an account, click on the 'Submit A Local' button in the top of the website, and fill out the form! We will review your post and see if it is a good fit!")
    
Local.create(name: "Boston ABC", bio: "boston's best local", address: "123 main street", city: "boston", state: "MA", zip: "01842")
Local.create(name: "NYC ABC", bio: "NYC in the house", address: "1987 main street", city: "NEW YORK", state: "NY", zip: "01112")
Local.create(name: "Austin ABC", bio: "Everything is bigger in TX", address: "1273 WEST street", city: "austin", state: "tx", zip: "00013")