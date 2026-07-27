# Module 9A - Build Your First React Component

## Description
This is a React app created using Vite that renders a UserProfile component. The component includes a name, bio, and image styled with inline CSS.

## What I Learned
- How to set up a React project using Vite
- How to write and structure a functional React component
- How to use JSX and inline styles
- How to render a component in App.jsx

## Challenges
The profile image from the assignment's Unsplash link didn't load in my browser. I swapped in a different Unsplash photo and it worked fine after that.

Also had a name color issue. The h1 text was nearly invisible against the white card because I didn't set an explicit color, so it was inheriting the dark mode text color from Vite's default CSS. Added a color value to the inline style and it fixed itself.

Ran into a git mistake too. I ran git init from my home directory instead of the actual project folder, so it tried to create a repo tracking my entire home directory (including things like Library and FaceTime data). Had to delete that .git folder and re-run git init from inside user-profile-lite.

For the bonus challenge, I built a second component called ContactCard and rendered it in App.jsx alongside UserProfile.

## Screenshot
Add a screenshot of your rendered component (you can drag and drop it here if using GitHub web interface).