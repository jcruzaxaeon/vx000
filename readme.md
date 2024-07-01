

# VX000
Prototype fullstack project for host testing.

## Notice
- Using monorepo for educational-purpose simplicity

## Feature List
- UI/UX input for describing relationships to parents, children, siblings using arrows a la (Miro / PowerPoint)

## Devlog

### 6/25/2024
- [x] `0.0.2`: Implement local, hidden `.env`
- [x] `0.0.1`: Initially connected to DB by creating an "API User" called `caller` with limited permissions
    - (!!!) Allowed to access DB from anywhere (`%`)
    - Stored independent `index-001.js` outside of `Git` since it contained passwords
- [x] `test db connection`
- [x] `define, add model; create a user`
    - user-creation was hardcoded for testing
- [x]`create a GET route`

### 6/26/2026
- [x] `restructure monorepo for backend and frontend`
- [x] `initialize frontend with vite`
- [x] `wire frontend, backend, db`

### 6/27/2026
- [x] `create initial routes`

### 6/28/2024
- [x] `refactor to dedicate files for: (a) models and (b) db config`
- [x] `use init vs define for Models`

### 6/29/2024
- [x] `add Target table, model`

### 7/1/2024
- [x] `add Target input-form`
- [ ] `add Target delete-form`