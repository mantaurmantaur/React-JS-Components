# React Components Project
This project contains three simple functional React components built with Next.js:<br><br>

**WelcomeCard** – Displays a customizable welcome message using props

**Counter** – An interactive counter using React state

**StudentInfo** – A form for inputting and displaying student information

# 🔧 Components

**1. WelcomeCard**<br><br>

**Purpose:**

Displays a welcome message based on props. Have different output for different status of students.<br><br>

**Props:**

**name**: Name of the user

**details**: A short greeting

**logo**: For picture

**Usage:**<br><br>

\`\`\`{students.map((students, index) =>

        students.status === "member" ? (
        
          <Card name={students.name} message={message} logo={logo} />
          
        ) : (
        
          <Card name={students.name} logo={profilePicture} />
          
        )
        
      )}\`\`\`
      

**Features:** <br><br>

Functional component using props

Simple card-style layout using CSS<br><br>


**2. Counter**<br><br>

**Purpose:**

An interactive counter that allows users to increment, decrement, and reset the value.<br><br>

**Usage:**

<Counter /><br><br>

**Features:**

Uses useState for state management

Three buttons: Increment, Decrement, and Reset

Displays current count<br><br>


**3. StudentInfo**<br><br>

**Purpose:**

Collects and displays student data through a form.<br><br>

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

Student Status<br><br>


**Usage:**

<BasicInfo data={basicInfo} onChange={setBasicInfo} />

<ContactInfo data={contactInfo} onChange={setContactInfo} />

<EducationBackground data={education} onChange={setEducation} /><br><br>

**Features:**

Controlled form inputs with useState

Displays submitted data in the console

Basic input styling

