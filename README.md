# Classical Community
An app where you can read reviews of the best recordings of classical music works. You can submit your own review as well!

This app has been developed using **React** for the Front End with **Styled-Components** for styles, and **Node** with **Express** for the Back End. **MongoDB** has been used as the database.

It also uses the **Open Opus API** for all the information on the composers.

## Screenshots
Landing Page

![Captura de pantalla (7)](https://github.com/ismaelescalante/notflix/assets/96469912/448589c5-2c82-427f-b0a1-93a1dcbd7d09)

List of composers

![Captura de pantalla (8)](https://github.com/ismaelescalante/notflix/assets/96469912/cbbad5b0-f8d0-4b7f-93c6-54ba9c073e54)

View of the reviews and the form to submit a review 

![Captura de pantalla (9)](https://github.com/ismaelescalante/notflix/assets/96469912/9b717e1d-3ed0-4c81-ad3c-80d3aecaaa6f)


## Environment Variables
You will need to create a .env file with the following environment variables: <br>

<code>MONGO_URI: //Your own Mongo URI</code> <br>

<code>JWT_PRIVATE_KEY: // Your own JWT private key</code>

## Installation

Run <code>npm install</code> on the root folder to install all dependencies.

Run <code>node app.js</code> on the **back** root folder to start the server and the database.

Run <code>npm start</code> on the **front** root folder to start the app.

Go to http://localhost:3000 to view it in the browser.
