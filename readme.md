




# VX000
- Tier-list maker
- Prototype fullstack project for free-tier host-testing
- `URL`: https://determined-tranquility-production.up.railway.app/





## Action Roster

### Up Next
- [ ] add users to app

### Action Inventory
- [ ] add data download option
- [ ] create backup procedure
- [ ] add a "default" page-not-found route
- [ ] add a catch-all error catcher
- [ ] change `target` to `node`
- [ ] display user's temporary alias for the tyr-card as card-title using some style to indicate that it is the temporary title, not verified/normalised against node-list


## Notice
- Using monorepo for simplicity





## Feature Wish List
- UI/UX input for describing relationships to parents, children, siblings using arrows a la (Miro / PowerPoint)

### Grades
- [ ] add a status column to grade table for tracking (recent, featured)



## Devlog

### 7/7/2024
- [ ] use jwt for authorization
- [x] add user creation with basic-auth

### 7/3/2024
- [x] add rating table to database
- [x] move routes to own module
- [x] refactor model names to singular per convention

### 7/2/2024
- [x] test client on railway
- [x] host entire project on railway.com

### 7/1/2024
- [x] add Target input-form
- [x] add Target delete-form

### 6/29/2024
- [x] add Target table, model

### 6/28/2024
- [x] refactor to dedicate files for: (a) models and (b) db config
- [x] use init vs define for Models

### 6/27/2026
- [x] create initial routes

### 6/26/2026
- [x] restructure monorepo for backend and frontend
- [x] initialize frontend with vite
- [x] wire frontend, backend, db

### 6/25/2024
- [x] `0.0.2`: Implement local, hidden `.env`
- [x] `0.0.1`: Initially connected to DB by creating an "API User" called `caller` with limited permissions
    - (!!!) Allowed to access DB from anywhere (`%`)
    - Stored independent `index-001.js` outside of `Git` since it contained passwords
- [x] test db connection
- [x] define, add model; create a user
    - user-creation was hardcoded for testing
- [x] create a GET route












