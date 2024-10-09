const supertest = require('supertest');
const app = require('../app');
const mongoose = require('mongoose');


describe('Auth controller', () =>{
    beforeAll(async() =>{
        await mongoose.connect('mongodb://mongo/testNode1');
    })

    afterEach(async()=>{
        await mongoose.connection.dropDatabase()
    })

    afterAll(async()=>{
        await mongoose.disconnect()
    })
    
    describe('POST /register', async() =>{
        it('should return 201 if the user is registred', async() =>{
            const response = supertest(app).post('/register').send({email: 'test@gmail.com', password: 'motdepasse', role:true});

            expect(response.statusCode).toBe(201)
            expect(response.body.msg).toBe("Utilisateur créé avec succès.")
        });
    })
    
})