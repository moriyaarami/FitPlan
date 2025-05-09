
# Project Title
FitPlan allows users to create customized workout plans. The system supports both individual users and business users.

## Installation

Install and running FitPlan with npm

server side:

```bash
cd backend
npm install 
npm run start

```

client side:

```bash
cd frontend
cd fitPlan
npm install
npm run dev 
```

## Environment Variables

This project uses a `.env` file to define environment variables. Below are the required variables:

- `JWT_KEY` - A secret key used to sign and verify JSON Web Tokens (JWT).
- `LOCAL_CONNECTION_STRING` - Connection string for a local MongoDB database.
- `CONNECTION_STRING_ATLAS` - Connection string for a MongoDB database hosted on Atlas.
- `ENVIRONMENT` - Specifies the environment (e.g., `production` or `development`).

### How to set up the .env file
1. Create a file named `.env` in the root of your project.
2. Copy the following variables and replace the values with your own:


    
# key features

## User Types:

### Individual User:

Creates a personal workout plan.

Can add and delete exercises for each day in the plan.

### Business User:

Adds clients and creates workout plans for them.

Can add and delete exercises for each day in the plan.


## Key Libraries

### Backend:

-bcrypt: Password encryption.

-cors: Cross-Origin Resource Sharing management.

-dotenv: Environment variable management.

-express: HTTP server framework.

-joi: Data validation.

-jsonwebtoken: JWT creation and verification.

-mongoose: MongoDB object modeling.

-morgan: HTTP request logging.

### Frontend:

-axios: API calls.

-formik: Form management.

-react: React library for building user interfaces.

-react-dom: Rendering React components in the browser.

-react-router-dom: Client-side routing.

-react-modal: Advanced modal dialogs.

-bootstrap: Responsive CSS framework.

-jwt-decode: Decoding JWT tokens.

