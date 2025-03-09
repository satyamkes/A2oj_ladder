# A2OJ-Ladder

A modern web application for tracking your progress on Codeforces programming problems, organized in difficulty ladders.

![A2OJ-Ladder](https://api.placeholder.com/800/400)

## Overview

A2OJ-Ladder is a tool designed to help competitive programmers improve their skills through structured problem sets. The application organizes Codeforces problems into ladders based on difficulty ratings or divisions, allowing users to track their progress as they solve problems.

## Features

- **Multiple Ladder Types**: Choose from ladders organized by Rating, Division, or other criteria
- **Progress Tracking**: Visualize your solved problems with a progress bar and completion percentage
- **Codeforces Integration**: Automatically fetches your solved problems from Codeforces
- **User-Friendly Interface**: Clean, modern UI that makes it easy to navigate problems
- **Problem Status**: Clearly indicates which problems you've already solved
- **Responsive Design**: Works well on both desktop and mobile devices

## Getting Started

### Prerequisites

- Node.js (v14 or higher)
- npm or yarn

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/a2oj-ladder.git
   cd a2oj-ladder
   ```

2. Install dependencies:
   ```bash
   npm install
   # or
   yarn install
   ```

3. Start the development server:
   ```bash
   npm start
   # or
   yarn start
   ```

4. Open your browser and navigate to `http://localhost:3000`

## Usage

1. **Enter your Codeforces username** on the home page
2. **Select a ladder type** (Rating, Division, etc.)
3. **Choose a specific ladder** from the dropdown
4. **Click "View Ladder"** to see the problem set
5. **Track your progress** as you solve problems - the app will automatically update when you refresh after solving problems on Codeforces

## Project Structure

```
src/
├── components/
│   ├── CodeforceRatingLadder.jsx  # Main ladder selection component
│   └── Division_Ladder.jsx        # Problem list and progress tracking component
├── routes/
│   ├── Home.jsx                   # Home page with ladder selection
│   └── Ladder.jsx                 # Ladder view page
├── utils/
│   └── codeforcesAPI.js           # Utilities for Codeforces API interaction
├── App.jsx                        # Main app component
└── index.js                       # Entry point
```

## Technologies Used

- **React**: Frontend library for building the user interface
- **React Router**: For navigation between pages
- **Tailwind CSS**: For styling components
- **Lucide React**: For icon components
- **Codeforces API**: For fetching user submission data

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

1. Fork the project
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## Acknowledgements

- Inspired by the original A2OJ Ladder by Ahmed Aly
- Thanks to Codeforces for providing the API
- Thanks to all contributors who have helped improve this project

## Contact

Your Name - [@sarafarajnasardi](https://x.com/SarafarajNasar2) - sarafarajnaardi786@gmail.com

Project Link: [https://github.com/sarafarajnasardi/A2oj_ladder](https://github.com/sarafarajnasardi/A2oj_ladder)
