Installation :

- Installer les dépendances nécessaires à Prisma `npm install typescript ts-node @types/node --save-dev`
- Installer Prisma : `npm install prisma --save-dev`
- Générer le client : `npx prisma generate`

npm start pour lancer le projet

-> Pour Postman :
/// pour le user :

POST: http://localhost:8000/api/users/
exemple pour le body :
{
    "id": "", 
    "username": "blabla",
    "password": "blabla2"
}

GET http://localhost:8000/api/users/:username
exemple : http://localhost:8000/api/users/blabla