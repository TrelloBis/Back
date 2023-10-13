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

POST http://localhost:8000/api/users/login
exemple:
{
    "username": "blabla"
}

GET http://localhost:8000/api/users/:idDeLUtilisateurGenere



/// pour les tasks :
creation : http://localhost:8000/api/tasks/create
exemple pour le body :
{
    "id": "65293cbee65de428561f69d4",
    "title": "gr",
    "description": "pppp",
    "priority": "LOW",
    "state": "TODO",
    "userId": "6528dd8c21997aff7e772238"
}

recup tache par l'id :
http://localhost:8000/api/tasks/65293cbee65de428561f69d4
(exemple avec la création du dessus)

recup tache par user id:
http://localhost:8000/api/tasks/6528dd8c21997aff7e772238
(exemple avec la création du dessus)

modif :
http://localhost:8000/api/tasks/65293cbee65de428561f69d4
(exemple avec la création du dessus)

avec un body

supp :
http://localhost:8000/api/tasks/65293cbee65de428561f69d4