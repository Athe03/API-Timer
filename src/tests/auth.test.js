const supertest = require('supertest');
const app = require('../app');
const mongoose = require('mongoose');
const user = require('../models/UserModel');
const bcrypt = require( "bcryptjs");


describe('Auth controller', () =>{
    beforeAll(async() =>{
        await mongoose.connect('mongodb://mongo/apiTimer1');
    })

    afterEach(async()=>{
        await user.deleteMany()
    })

    afterAll(async()=>{
        await mongoose.disconnect();
    })
    
    describe('POST /register', async() =>{
        it('should return 201 if the user is registred', async() =>{
            const response = supertest(app).post('/register').send({email: 'test@gmail.com', password: 'motdepasse', role:true});

            expect(response.statusCode).toBe(201)
            expect(response.body.msg).toBe("Utilisateur créé avec succès.")
        });

        it('should return 403 if the email is already used', async() =>{
            await user.create({email: 'test@gmail.com', password: bcrypt.hash('motdepasse'), role:true});
            const response = supertest(app).post('/register').send({email: 'test@gmail.com', password: 'motdepasse', role:true});

            expect(response.statusCode).toBe(403)
            expect(response.body.msg).toBe("Email déjà utilisé.")
        });
    })
    
})