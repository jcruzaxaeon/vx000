




# VX000
- Tier-list maker
- Specifically for all media? Human-powered reviews?
- Prototype fullstack project for free-tier host-testing
- `URL`: https://determined-tranquility-production.up.railway.app/
- 1



## Design Whiteboard
- `tier`: S, A, B, C, D, E, F
- `score`: as in z-score (e.g. -3, -2, -1, 0, 1, 2, 3)
    - `decimal` (-3.9 - 3.9)
    - 

## Action Roster

### Up Next

### Action Inventory
- [ ] 
- [ ] refactor CRUD flow
- [ ] refactor login flow
- [ ] add CreateReviewFull
- [ ] add CreateReviewStandard
- [ ] add letter grade conversion to save grade as z-score and "tyr"
- [ ] add data download option
- [ ] create backup procedure
- [ ] add a "default" page-not-found route
- [ ] add a catch-all error catcher
- [ ] change `target` to `node`
- [ ] display user's temporary alias for the tyr-card as card-title using some style to indicate that it is the temporary title, not verified/normalised against node-list
- [ ] save score as S, A, B, C, D, F, F- in db
- [ ] checklist (like a playlist but for things you suggest other's try like a bucketlist?)
- [ ] add featured to DB
- [ ] complete CRUD for nodes
- [ ] add a settings page/db
- [ ] add a `justification` attribute (1 paragraph justifying score)
- [ ] quick review
- [ ] create a (public, private, shared) option for creating reviews
- [ ] allow image upload
- [ ] create an object input UI for entering justification "meta"-data as an object (key/value pairs) like an infinite cylinder? or just a up/down arrow input
- [ ] mod review-card
- [ ] add a randomizer for placeholder values that picks things other "similar" people have rated
- [ ] mod CreateReview for moderate complexity

#### Long Term
- [ ] build business-card format for basic-reviews

## Notice
- Using monorepo for simplicity
> [!!!] Double-check that `_id` and `_fk` table-comlumns in DB are `unsigned` (UN)





## Feature Wish List
- UI/UX input for describing relationships to parents, children, siblings using arrows a la (Miro / PowerPoint)
- Stats input for a `review` e.g. { spiciness: 4, salt: 3, size: 4 }

### Grades
- [ ] add a status column to grade table for tracking (recent, featured)



### Testing
- `users`
    - [ ] Create > Login
    - [ ] Login
    - [ ] Read
    - [ ] Update
    - [ ] Recover
    - [ ] Delete



## Devlog
- [ ] display an entire tierlist

### 7/26/2024
- [x] remove "create basic-review form" from landing

### 7/25/2024
- [x] complete all CRUD for reviews

### 7/22/2024
- [ ] implement letter grade
- [ ] complete CRUD operations for reviews
    - [ ] create (functional)
    - [ ] 

### 7/18/2024
- [x] Start working on card design?
- [x] fix small form-factor IconNavHeader

### 7/17/2024
- [x] change IconNavHeader login-button to logout-button after login
- [x] refactor landing page with a most recent review-card

### 7/??/2024*
- [x] change grades to reviews, targets to nodes

### 7/13/2024
- [x] update mysql naming

### 7/7/2024
- [X] use jwt for authorization
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

### ???
- [x] add CreateReviewBasic











