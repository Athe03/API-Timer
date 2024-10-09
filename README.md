# 🏎️ F1 Reaction Timer: Creation of a NodeJS API for F1 Style Reaction Timer with User Management

## 📝 Data Models

### 👥 Users
- `email`: String, required, unique. 📧
- `password`: String, required. 🔒
- `role`: Boolean, required (0 = admin, 1 = user). 👤

### ⏱ Timer
- `user_id`: ObjectId, foreign key to the user document. 🔗
- `time`: Number, required, in milliseconds (ms). ⏲️

## 🛣 Routes and HTTP Methods

### 🙍‍♂️🙍‍♀️ User Management
- Register: `POST /register` 📝
- Login: `POST /login` 🔑

### ⏱ Reaction Time Management
- Submit a reaction time: `POST /submit-reaction-time` 🏎️
- Retrieve reaction times for a user: `GET /get-reaction-times/{userId}` 🔍

## 🌟 Features

### 📊 Registration and Login
- Enable users to register and login. ✅
- Securely store passwords. 🛡️

### 🕒 Submission of Reaction Times
- Record reaction times with the user's identifier and the submission date/time. 📆

### 📈 Retrieval of Reaction Times
- Allow retrieval of reaction times for a specific user. 🧑‍💼
- Provide sorting and filtering options. 🔄

### 🔐 Security
- Implement authentication and authorization management. 🗝️
- Ensure data security and error handling. 🛡️

## 📋 Obligations

- 🔄 GithubFlow.
- 🔑 `.env` for environment variables.
- 🔒 Hash for password security.

## Installation et exécution

### Installer sur votre machine
 - Docker
 - Docker Compose

### Cloner le dêpot
```bash
git clone https://github.com/Athe03/API-Timer.git
cd API-Timer
```
### Créer un fichier .env à la racine du projet, avec la variable d'environnement suivante :
```bash
JWT_SECRET= clé_secrète
```
### Compiler et exécuter l'application
```bash
docker compose up --build
```
### Accéder à l'application
  Lancer l'API sur http://localhost:3000
