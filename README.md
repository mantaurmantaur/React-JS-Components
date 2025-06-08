# React Components Project
This project contains three simple functional React components built with Next.js:

WelcomeCard – Displays a customizable welcome message using props
Counter – An interactive counter using React state
StudentInfo – A form for inputting and displaying student information

# 🔧 Components
**1. WelcomeCard**
**Purpose:**
Displays a welcome message based on props. Have different output for different status of students.

**Props:**
**name**: Name of the user
**details**: A short greeting
**logo**: For picture

**Usage:**
\`\`\`{students.map((students, index) =>
        students.status === "member" ? (
          <Card name={students.name} message={message} logo={logo} />
        ) : (
          <Card name={students.name} logo={profilePicture} />
        )
      )}\`\`\`

**Features:**
Functional component using props
Simple card-style layout using CSS

**2. Counter**
**Purpose:**
An interactive counter that allows users to increment, decrement, and reset the value.

**Usage:**
<Counter />

**Features:**
Uses useState for state management
Three buttons: Increment, Decrement, and Reset
Displays current count

**3. StudentInfo**
**Purpose:**
Collects and displays student data through a form.

**Fields:**
Student Number
First name
Middle name
Last name
Birthdate
Age
Email Address
Phone Number
Home Address
Current Year Level
Course/Program
Student Status

**Usage:**
<BasicInfo data={basicInfo} onChange={setBasicInfo} />
<ContactInfo data={contactInfo} onChange={setContactInfo} />
<EducationBackground data={education} onChange={setEducation} />

**Features:**
Controlled form inputs with useState
Displays submitted data in the console
Basic input styling

