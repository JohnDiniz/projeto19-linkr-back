## API Endpoints

### Sign Up

Create a new user account.

- **URL**: `POST /signup`
- **Request Body**:

```
{
  "email": "test@example.com",
  "password": "root",
  "name": "Test User",
  "imageUrl": "https://image.jpg"
}

```

- **Response**: Returns the newly created user and an authentication token.

### Sign In

Authenticate an existing user.

- **URL**: `POST /signin`
- **Request Body**:

```
{
  "email": "test@example.com",
  "password": "root"
}

```

- **Response**: Returns the user's ID and an authentication token.

### Logout

Log out a user by invalidating their session.

- **URL**: `DELETE /logout`
- **Headers**: `Authorization: Bearer <token>`



### Activity time reset
Reset time for automatic user logout
- **URL**: `POST /active`
- **Headers**: `Authorization: Bearer <token>`
