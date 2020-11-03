# code-collab

## First time Installation
- Install PostgreSQL for your operating system.

- Use PgAdmin to create a new database in your local PostgreSQL 13 server
  called `code_collab_dev`.

- In ` ~/db/config/config.json ` enter you local postgres user password
  overwriting `"DB_PASSWORD_DEV"` 
  * "password": "myPassword"  

- In your terminal at the root of the project navigate to the 'db' directory
  and enter `sequelize-cli db:migrate` . 
  
- If this doesnt work try installing sequelize-cli globally by entering 
  `npm i -g sequelize-cli` then retry the migrate command.

- Create `.env` file in root directory using `.env.example` as reference.
  Do not use quotes for strings like passwords. Enter as is.
  *   PORT=3000  
      DB_PASSWORD_DEV=coolpassword 

- Go back to `~/db/config/config.json` and replace your password with
  `"DB_PASSWORD_DEV"`, returning the file to its original state.
  * "password": "DB_PASSWORD_DEV"   


## Normal Setup
- `npm install`
- `npm run dev`

