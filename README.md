# AI Study Planner

An intelligent, full-stack web application that helps students create personalized study plans powered by AI. Users can register, log in, create custom study plans based on subjects and difficulty levels, and track their learning progress.

## 📖 What is AI Study Planner?

**AI Study Planner** is a comprehensive study management platform designed to help students of all levels organize their learning, create structured study schedules, and achieve their academic goals more efficiently.

### Who is it For?

- **High School Students**: Preparing for exams, entrance tests, or college applications
- **College Students**: Managing multiple subjects and course loads
- **Professionals**: Learning new skills or preparing for certifications
- **Lifelong Learners**: Organizing self-paced learning in various subjects

### Why Use AI Study Planner?

**Problem It Solves:**
- ❌ **Unstructured Learning**: Students often don't know how to organize their study time effectively
- ❌ **Lack of Planning**: Without a proper plan, studying becomes haphazard and inefficient
- ❌ **Wasted Time**: Students waste hours deciding what to study instead of actually studying
- ❌ **Inconsistent Progress**: Without tracking, students don't know if they're making progress

**Solution Provided:**
- ✅ **Smart Planning**: Creates customized study plans based on subject, difficulty, and available time
- ✅ **Structured Approach**: Breaks down complex topics into manageable daily chunks
- ✅ **Time Optimization**: Helps students study smarter, not harder
- ✅ **Progress Tracking**: Clear visualization of plans and study schedule
- ✅ **Personalization**: Plans adapt to individual difficulty preferences and time commitments

## 💡 How to Use AI Study Planner - Real-World Examples

### Example 1: High School Student Preparing for Exam
**Scenario**: Sarah has a Mathematics exam in 30 days

**Steps:**
1. Register for an account
2. Log in to dashboard
3. Create a new study plan:
   - Subject: "Mathematics - Algebra & Geometry"
   - Hours Per Day: 2 hours
   - How Many Days: 30 days
   - Difficulty: Medium
4. The app generates a structured 30-day plan breaking down:
   - Week 1: Basic algebra concepts
   - Week 2: Advanced algebra
   - Week 3: Geometry fundamentals
   - Week 4: Complex geometry problems & revision
5. Sarah follows the plan daily and achieves better grades

### Example 2: College Student Taking Multiple Courses
**Scenario**: John is taking 4 different courses this semester

**Steps:**
1. Create separate study plans for each course:
   - "Physics - Mechanics" (3 hours/day, 60 days, Hard)
   - "Chemistry - Organic" (2 hours/day, 45 days, Medium)
   - "Programming - Python" (2.5 hours/day, 40 days, Medium)
   - "History - Modern Era" (1.5 hours/day, 50 days, Easy)
2. View all plans on the dashboard
3. Click on each plan to see detailed breakdown
4. Track progress throughout the semester

### Example 3: Professional Learning New Skill
**Scenario**: Maya wants to learn Web Development

**Steps:**
1. Create study plan:
   - Subject: "Full-Stack Web Development"
   - Hours Per Day: 4 hours
   - How Many Days: 90 days
   - Difficulty: Hard
2. The plan breaks down into phases:
   - Phase 1: HTML, CSS, JavaScript basics
   - Phase 2: React.js fundamentals
   - Phase 3: Backend with Node.js
   - Phase 4: Database design with MongoDB
   - Phase 5: Full project development
3. Delete plans that are completed and create new ones for advanced topics

## 🎯 Key Benefits

### Personalization
- **Subject-Specific**: Create plans for any subject you want to study
- **Difficulty Levels**: Choose Easy, Medium, or Hard based on your proficiency
- **Time Flexibility**: Customize hours per day based on your schedule
- **Duration Control**: Set how many days you need to complete the topic

### Organization
- **Centralized Dashboard**: See all your study plans in one place
- **Clear Structure**: Each plan shows subject, hours, duration, and difficulty
- **Detailed Breakdown**: View complete study plan with topics and schedule

### Productivity
- **Reduces Decision Fatigue**: No need to figure out what to study next
- **Maintains Consistency**: Follow a structured plan for better retention
- **Saves Time**: Pre-planned study structure saves hours of planning
- **Increases Motivation**: Seeing a complete plan makes goals feel achievable

### Flexibility
- **Manage Multiple Plans**: Work on different subjects simultaneously
- **Easy Updates**: Delete completed plans and create new ones
- **Adaptive**: Modify difficulty as you progress

## 🔄 Typical User Journey

```
1. SIGN UP
   └─ User registers with name, email, password

2. LOG IN
   └─ User logs in with email and password
   └─ Dashboard loads with empty plans list

3. CREATE PLAN
   └─ User clicks "Create New Plan"
   └─ Fills form: Subject, Hours/Day, Number of Days, Difficulty
   └─ App generates structured study plan

4. VIEW & STUDY
   └─ User sees plan on dashboard
   └─ Clicks plan to view detailed breakdown
   └─ Follows plan daily for structured studying

5. MANAGE PLANS
   └─ Create multiple plans for different subjects
   └─ Delete completed or unnecessary plans
   └─ Keep dashboard organized with active plans

6. CONTINUE LEARNING
   └─ Create new plans for new topics
   └─ Build a consistent learning habit
   └─ Achieve academic/professional goals
```

## 📊 Study Plan Components

Each study plan includes:

| Component | Details |
|-----------|---------|
| **Subject** | What topic you're studying (e.g., Math, Spanish, History) |
| **Hours Per Day** | Daily time commitment (1-12 hours) |
| **Total Days** | How long the course spans (customizable) |
| **Difficulty** | Easy/Medium/Hard based on your level |
| **Study Breakdown** | Detailed day-by-day or week-by-week schedule |
| **Topics Covered** | Specific topics arranged by difficulty progression |
| **Milestones** | Key checkpoints to track progress |
| **Revision Schedule** | Built-in review sessions for better retention |

## 🚀 Why This Project?

### Educational Value
- Teaches full-stack web development
- Demonstrates real-world application architecture
- Shows authentication and authorization implementation
- Examples of modern React patterns and Express.js backend

### Practical Use
- Actually useful for students studying
- Can be extended with AI integration
- Scalable architecture for future features
- Real problems for real users

### Technical Learning
- Learn React Router for navigation
- Understand JWT authentication
- Work with MongoDB for data persistence
- Build RESTful APIs
- Implement user access control

## 🚀 Features

### User Management
- **User Authentication**: Secure registration and login with JWT tokens
  - Users create unique accounts with email validation
  - Passwords are encrypted using bcryptjs for security
  - JWT tokens allow persistent login sessions
  
- **Password Hashing**: bcryptjs for secure password storage
  - Passwords never stored as plain text
  - Secure comparison prevents brute force attacks
  
- **User Access Control**: Users can only view and manage their own study plans
  - Each plan is tied to the user's ID
  - Users cannot access other users' study plans
  - Backend validation ensures data privacy
  
- **Token-based Authorization**: Bearer token authentication for API endpoints
  - Every API request requires valid token
  - Token contains encrypted user information
  - Automatic token refresh mechanism

### Study Plan Management
- **Create Study Plans**: Generate personalized study plans by subject, hours per day, duration, and difficulty level
  - Flexible form allows customization
  - Plans are generated with AI-powered recommendations
  - Real-time suggestions for study structure
  
- **View Plans**: Browse all your study plans with a clean, intuitive interface
  - Dashboard shows all active plans
  - Cards display key information at a glance
  - Plans sorted by creation date (newest first)
  
- **Plan Details**: Click on any plan to view comprehensive details in an expandable modal
  - Full study breakdown visible in modal
  - Easy-to-read formatting with proper spacing
  - Print-friendly layout for offline reference
  
- **Delete Plans**: Remove plans you no longer need
  - One-click deletion with confirmation
  - Immediate removal from dashboard
  - Freed up space for new plans
  
- **Plan Information**:
  - **Subject**: The topic being studied
  - **Hours per day**: Daily time commitment for focused study
  - **Number of days**: Total duration to complete the plan
  - **Difficulty level** (Easy, Medium, Hard): Customized to your level
  - **Generated study plan**: Detailed breakdown of what to study each day
  - **Creation date**: When the plan was created
  - **Last updated date**: When plan details were modified

### User Interface
- **Responsive Design**: Works seamlessly on desktop, tablet, and mobile devices
  - Mobile-first approach ensures usability on small screens
  - Adaptive layouts for tablets and laptops
  - Touch-friendly buttons and inputs
  
- **Beautiful Dashboard**: Clean, modern interface with smooth animations
  - Gradient backgrounds and modern color scheme
  - Smooth transitions between pages
  - Professional typography for readability
  
- **Modal View**: Expanded plan details view for better readability
  - Dark overlay prevents distraction
  - Large text for comfortable reading
  - Well-organized information hierarchy
  
- **Form Validation**: Client-side and server-side validation for all inputs
  - Real-time validation feedback
  - Clear error messages
  - Prevents invalid data submission
  
- **Alert Notifications**: Success and error messages for user feedback
  - Green alerts for successful operations
  - Red alerts for errors
  - Auto-dismiss after few seconds
  
- **Navigation**: Easy routing between Home, Auth, and Dashboard pages
  - React Router for smooth navigation
  - Navbar always accessible
  - Quick links to all major sections

## 📁 Project Structure

```
AI Study Planner/
├── client/                          # React Frontend
│   ├── public/
│   │   ├── index.html
│   │   ├── manifest.json
│   │   └── robots.txt
│   ├── src/
│   │   ├── components/              # Reusable React components
│   │   │   ├── Navbar.js           # Navigation bar
│   │   │   ├── PlanCard.js         # Study plan card component
│   │   │   ├── Modal.js            # Expanded plan details modal
│   │   │   ├── CreatePlanForm.js   # Form to create new plans
│   │   │   ├── AuthForm.js         # Reusable authentication form
│   │   │   ├── Alert.js            # Notification component
│   │   │   ├── BenefitCard.js      # Benefits showcase card
│   │   │   ├── FeatureItem.js      # Features display component
│   │   │   └── UserItem.js         # User selection component
│   │   ├── pages/                   # Page components
│   │   │   ├── HomePage.js         # Landing page
│   │   │   ├── AuthPage.js         # Login/Registration page
│   │   │   └── DashboardPage.js    # Main dashboard with plan management
│   │   ├── styles/                  # CSS stylesheets
│   │   │   ├── HomePage.css
│   │   │   ├── AuthPage.css
│   │   │   ├── DashboardPage.css
│   │   │   └── Modal.css
│   │   ├── App.js                  # Main app component with React Router
│   │   ├── App.css                 # Global styles
│   │   ├── index.js                # React DOM render
│   │   └── index.css               # Global CSS
│   ├── package.json
│   └── README.md
│
├── server/                          # Express Backend
│   ├── src/
│   │   ├── config/
│   │   │   └── db.js               # MongoDB connection configuration
│   │   ├── models/
│   │   │   ├── user.js             # User schema (name, email, password)
│   │   │   └── plan.model.js       # Study plan schema
│   │   ├── controllers/
│   │   │   ├── authController.js   # Authentication logic (register, login)
│   │   │   └── plan.controller.js  # Plan CRUD operations
│   │   ├── routes/
│   │   │   ├── authRoutes.js       # Auth endpoints
│   │   │   └── plan.routes.js      # Plan endpoints
│   │   ├── utils/
│   │   │   └── aiHelper.js         # AI plan generation utility
│   │   ├── app.js                  # Express app setup
│   │   ├── server.js               # Server entry point
│   │   └── .env                    # Environment variables
│   ├── package.json
│   └── README.md
│
└── README.md                        # This file
```

## 🏗️ System Architecture

### How Everything Works Together

```
┌─────────────────────────────────────────────────────────────┐
│                      USER BROWSER                           │
│  (React App Running on http://localhost:3000)               │
├─────────────────────────────────────────────────────────────┤
│                                                             │
│  ┌──────────────┐  ┌──────────────┐  ┌──────────────┐    │
│  │   HomePage   │  │   AuthPage   │  │  DashboardPage │  │
│  │  (Landing)   │  │  (Login/Reg) │  │  (Main App)  │    │
│  └──────────────┘  └──────────────┘  └──────────────┘    │
│         ▲                ▲                   ▲              │
│         └────────────────┴───────────────────┘              │
│                    React Router (Navigation)                │
│                                                             │
│  State Management: localStorage (Tokens & User Data)        │
│                                                             │
└──────────────────────────┬───────────────────────────────┘
                           │
                    HTTP/REST API Calls
                    (JSON over HTTPS)
                           │
┌──────────────────────────▼───────────────────────────────┐
│              EXPRESS.JS BACKEND                          │
│         (Running on http://localhost:5000)              │
├──────────────────────────────────────────────────────┤
│                                                       │
│  ┌────────────────────────────────────────────────┐ │
│  │           API ROUTES & CONTROLLERS             │ │
│  ├────────────────────────────────────────────────┤ │
│  │  /api/auth/register  → Create user            │ │
│  │  /api/auth/login     → Authenticate user      │ │
│  │  /api/plans/create   → Create study plan      │ │
│  │  /api/plans/:userId  → Get user's plans      │ │
│  │  /api/plans/:planId  → Delete plan            │ │
│  └────────────────────────────────────────────────┘ │
│                    ▲                                  │
│                    │ Query/Update                     │
│                    ▼                                  │
│  ┌────────────────────────────────────────────────┐ │
│  │         MONGODB DATABASE                       │ │
│  ├────────────────────────────────────────────────┤ │
│  │  ┌──────────────┐  ┌──────────────┐           │ │
│  │  │ Users        │  │ StudyPlans   │           │ │
│  │  ├──────────────┤  ├──────────────┤           │ │
│  │  │ _id          │  │ _id          │           │ │
│  │  │ name         │  │ userId (FK)  │           │ │
│  │  │ email        │  │ subject      │           │ │
│  │  │ password     │  │ hoursPerDay  │           │ │
│  │  │ createdAt    │  │ howManyDays  │           │ │
│  │  └──────────────┘  │ difficulty   │           │ │
│  │                    │ generatedPlan│           │ │
│  │                    │ createdAt    │           │ │
│  │                    │ updatedAt    │           │ │
│  │                    └──────────────┘           │ │
│  └────────────────────────────────────────────────┘ │
│                                                       │
└───────────────────────────────────────────────────┘
```

### Data Flow Example: Creating a Study Plan

```
1. USER FILLS FORM
   ├─ Subject: "Mathematics"
   ├─ Hours/Day: 2
   ├─ Days: 30
   └─ Difficulty: "Medium"
            │
            ▼
2. FRONTEND VALIDATION
   ├─ Check all fields filled
   ├─ Convert numbers properly
   └─ Show error if invalid
            │
            ▼
3. SEND TO BACKEND
   └─ POST /api/plans/create
      ├─ Headers: Authorization: Bearer {token}
      └─ Body: { userId, subject, hoursPerDay, howManyDays, difficulty }
            │
            ▼
4. BACKEND PROCESSING
   ├─ Verify JWT token
   ├─ Validate user ID
   ├─ Check all required fields
   ├─ Generate study plan content
   └─ Validate MongoDB connection
            │
            ▼
5. SAVE TO DATABASE
   └─ Create new document in StudyPlans collection
      ├─ Validate schema
      ├─ Create timestamps
      └─ Return saved plan
            │
            ▼
6. RESPONSE TO FRONTEND
   └─ 201 Created with new plan object
      ├─ Plan ID
      ├─ All plan details
      └─ Timestamps
            │
            ▼
7. UPDATE UI
   ├─ Show success message
   ├─ Add plan to dashboard
   ├─ Refresh plans list
   └─ Clear form
            │
            ▼
8. USER SEES NEW PLAN
   └─ Plan card appears on dashboard
      ├─ Click to view details
      ├─ Click delete to remove
      └─ Continue studying!
```

### Authentication Flow

```
REGISTRATION:
   User Input (name, email, password)
        ↓
   Frontend Validation
        ↓
   POST /api/auth/register
        ↓
   Backend: Hash password with bcryptjs
        ↓
   Backend: Save user to MongoDB
        ↓
   Backend: Generate JWT token
        ↓
   Response: { user, token }
        ↓
   Frontend: Save token & user to localStorage
        ↓
   Frontend: Redirect to dashboard

LOGIN:
   User Input (email, password)
        ↓
   POST /api/auth/login
        ↓
   Backend: Find user by email
        ↓
   Backend: Compare password with stored hash
        ↓
   Backend: Generate JWT token
        ↓
   Response: { user, token }
        ↓
   Frontend: Save token to localStorage
        ↓
   Frontend: Redirect to dashboard

API REQUEST (Protected):
   Frontend prepares request
        ↓
   Add Authorization header: "Bearer {token}"
        ↓
   Send request to backend
        ↓
   Backend: Verify token signature
        ↓
   Backend: Extract user ID from token
        ↓
   Backend: Process request
        ↓
   Response: Data or error
```

## 🛠️ Tech Stack

### Frontend
- **React 19.2.0** - UI library
- **React Router DOM 7.9.6** - Client-side routing
- **CSS3** - Styling with animations and gradients
- **ES6+ JavaScript** - Modern JavaScript features

### Backend
- **Node.js** - JavaScript runtime
- **Express 5.1.0** - Web framework
- **MongoDB** - NoSQL database
- **Mongoose 8.20.0** - MongoDB ODM
- **JWT (jsonwebtoken)** - Authentication tokens
- **bcryptjs** - Password hashing
- **CORS** - Cross-origin resource sharing

### Development Tools
- **nodemon** - Auto-restart development server
- **dotenv** - Environment variable management

## 📋 Prerequisites

- **Node.js** (v14 or higher)
- **npm** (v6 or higher)
- **MongoDB** (Local or Docker container)
- **Git**

## 🚀 Getting Started

### 1. Clone the Repository

```bash
git clone https://github.com/ShakeelGadafi/AI-Study-Planner-.git
cd AI-Study-Planner
```

### 2. Setup MongoDB

#### Option A: Using Docker (Recommended for Development)

```bash
# Pull MongoDB image
docker pull mongo

# Run MongoDB container
docker run -d -p 27017:27017 --name mongodb mongo:latest
```

#### Option B: Using Local MongoDB

Ensure MongoDB is installed and running on your machine at `mongodb://localhost:27017`.

### 3. Setup Backend

```bash
cd server

# Install dependencies
npm install

# Create .env file
echo "MONGO_URI=mongodb://localhost:27017/ai-study-planner" > .env
echo "JWT_SECRET=your_jwt_secret_key_here" >> .env
echo "PORT=5000" >> .env

# Start the server
npm start
# Or use npm run dev for development with auto-reload
```

**Backend runs on:** `http://localhost:5000`

### 4. Setup Frontend

```bash
cd client

# Install dependencies
npm install

# Start the React development server
npm start
```

**Frontend runs on:** `http://localhost:3000`

The app will automatically open in your browser. If it doesn't, navigate to `http://localhost:3000`.

## 📚 API Endpoints

### Authentication Endpoints

#### Register User
```
POST /api/auth/register
Content-Type: application/json

{
  "name": "John Doe",
  "email": "john@example.com",
  "password": "password123"
}

Response: { user: { id, name, email }, token }
```

#### Login User
```
POST /api/auth/login
Content-Type: application/json

{
  "email": "john@example.com",
  "password": "password123"
}

Response: { user: { id, name, email }, token }
```

#### Get All Users
```
GET /api/auth/users
Authorization: Bearer {token}

Response: [{ _id, name, email }, ...]
```

### Study Plan Endpoints

#### Create Study Plan
```
POST /api/plans/create
Authorization: Bearer {token}
Content-Type: application/json

{
  "userId": "user_id",
  "subject": "Mathematics",
  "hoursPerDay": 2,
  "howManyDays": 30,
  "difficulty": "medium"
}

Response: { message, plan: { _id, userId, subject, ... } }
```

#### Get User's Study Plans
```
GET /api/plans/{userId}
Authorization: Bearer {token}

Response: [{ _id, subject, hoursPerDay, ... }, ...]
```

#### Delete Study Plan
```
DELETE /api/plans/{planId}
Authorization: Bearer {token}

Response: { message }
```

## 🔐 Authentication

The application uses JWT (JSON Web Tokens) for secure authentication:

1. **Registration**: User provides name, email, and password
   - Password is hashed using bcryptjs
   - New user is saved to MongoDB

2. **Login**: User provides email and password
   - Password is compared with hashed password in database
   - JWT token is generated with user ID
   - Token is stored in localStorage on client

3. **API Requests**: 
   - Token is sent in Authorization header as `Bearer {token}`
   - Backend validates token before processing requests

4. **Protected Routes**:
   - `/home` - Accessible to all (redirects to dashboard if logged in)
   - `/auth` - Only accessible when not logged in
   - `/dashboard` - Only accessible when logged in

## 🗄️ Database Schema

### User Model
```javascript
{
  name: String (required),
  email: String (required, unique),
  password: String (required, hashed),
  createdAt: Date,
  updatedAt: Date
}
```

### Study Plan Model
```javascript
{
  userId: ObjectId (reference to User),
  subject: String (required),
  hoursPerDay: Number (required),
  howManyDays: Number (required),
  difficulty: String (enum: ["easy", "medium", "hard"], default: "medium"),
  generatedPlan: String (required),
  createdAt: Date,
  updatedAt: Date
}
```

## 🎨 User Interface Routes

- **`/home`** - Landing page with features and benefits
- **`/auth`** - Registration and login page
- **`/dashboard`** - User dashboard with study plan management
- **`/`** - Redirects to `/home`

## 📱 Features in Detail

### Create a Study Plan
1. Navigate to `/dashboard`
2. Click "Create New Plan" button
3. Fill in the form:
   - **Subject**: What you want to study
   - **Hours Per Day**: Daily study commitment
   - **How Many Days**: Total duration of study
   - **Difficulty**: Select Easy, Medium, or Hard
4. Click "Create Plan"
5. New plan appears in your plans list

### View Plan Details
1. Click on any study plan card
2. Modal opens showing:
   - Subject and difficulty level
   - Hours per day and total days
   - Complete study plan breakdown
   - Creation and update dates

### Delete a Plan
1. Click the 🗑️ Delete button on any plan card
2. Confirm the deletion
3. Plan is removed from your dashboard

### Logout
1. Click "Logout" button in the navbar
2. You'll be redirected to the home page
3. All user data is cleared from localStorage

## 🐛 Troubleshooting

### MongoDB Connection Issues
- Ensure MongoDB is running
- Check `MONGO_URI` in `.env` file
- If using Docker: `docker ps` to verify container is running

### Frontend Not Loading
- Clear browser cache (Ctrl+Shift+Delete)
- Make sure backend is running on port 5000
- Check browser console for errors (F12)

### CORS Errors
- Ensure backend has CORS enabled
- Check that frontend is running on `http://localhost:3000`
- Verify API URL in frontend matches backend URL

### Forgot Password Issues
- Currently no password reset functionality
- Delete user account and register again

## 🔄 Git Workflow

### Branches
- **main** - Production-ready code
- **backend** - Backend development
- **frontend** - Frontend development

### Commit Guidelines
```
Format: [Type] Message

Types:
- [Feature] - New feature
- [Fix] - Bug fix
- [Style] - CSS/formatting changes
- [Refactor] - Code restructuring
- [Docs] - Documentation updates
- [Chore] - Dependencies, configs, etc.

Example: [Feature] Add study plan deletion functionality
```

## 📦 Building for Production

### Build Frontend
```bash
cd client
npm run build
```
Creates optimized build in `client/build/` directory.

### Prepare Backend
```bash
cd server
# Update .env with production values
# Set NODE_ENV=production
# Update MONGO_URI for production database
```

## 📄 Environment Variables

### Backend (.env)
```
MONGO_URI=mongodb://localhost:27017/ai-study-planner
JWT_SECRET=your_secure_jwt_secret_key
PORT=5000
NODE_ENV=development
```

### Frontend (.env)
```
REACT_APP_API_URL=http://localhost:5000/api
```

## 🤝 Contributing

1. Create a new branch for your feature (`git checkout -b feature/AmazingFeature`)
2. Commit your changes (`git commit -m '[Feature] Add amazing feature'`)
3. Push to the branch (`git push origin feature/AmazingFeature`)
4. Open a Pull Request

## 📝 License

This project is licensed under the ISC License - see the LICENSE file for details.

## 👤 Author

**Shakeel Gadafi**
- GitHub: [@ShakeelGadafi](https://github.com/ShakeelGadafi)
- Repository: [AI-Study-Planner](https://github.com/ShakeelGadafi/AI-Study-Planner-)

## 🎯 Future Enhancements

- [ ] AI-powered plan generation using OpenAI API
- [ ] Study progress tracking and analytics
- [ ] Email verification for registration
- [ ] Password reset functionality
- [ ] Social sharing of study plans
- [ ] Study reminders and notifications
- [ ] Mobile app using React Native
- [ ] Real-time collaboration on plans
- [ ] Integration with calendar apps
- [ ] Premium subscription plans

## 📞 Support

For issues, questions, or suggestions, please open an issue on GitHub.

---

**Last Updated:** November 23, 2025
**Version:** 1.0.0
