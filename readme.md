

## Notice
- Using monorepo for educational-purpose simplicity

## Devlog

### 6/25/2024
- `0.0.2`: Implement local, hidden `.env`
- `0.0.1`: Initially connected to DB by creating an "API User" called `caller` with limited permissions
    - (!!!) Allowed to access DB from anywhere (`%`)
    - Stored independent `index-001.js` outside of `Git` since it contained passwords
- `test db connection`
- `define, add model; create a user`
    - user-creation was hardcoded for testing
- `create a GET route`

### 6/26/2026
- `restructure monorepo for backend and frontend`
- `initialize frontend with vite`
- `wire frontend, backend, db`

### 6/27/2026
- `create initial routes`

### 6/28/2024
- `refactor to dedicate files for: (a) models and (b) db config`
- `use init vs define for Models`

### 6/29/2024
- `add Target table, model`