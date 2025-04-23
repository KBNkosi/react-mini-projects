# Birthday Reminder Project

## Overview
A React-based birthday reminder application that helps users keep track of upcoming birthdays. The project features a clean and intuitive user interface inspired by [UI Design Daily](https://uidesigndaily.com/posts/sketch-birthdays-list-card-widget-day-1042).

## Features
- Display list of upcoming birthdays
- Show person's name, age, and image
- Clear all birthdays functionality
- Responsive design for all devices
- Simple and clean user interface

## Technologies Used
- React.js
- CSS3
- JavaScript (ES6+)
- React Hooks
- Local Storage for data persistence

## Setup Instructions
1. Clone the repository
```bash
git clone https://github.com/yourusername/birthday-reminder.git
```

2. Navigate to project directory
```bash
cd birthday-reminder
```

3. Install dependencies
```bash
npm install
```

4. Start the development server
```bash
npm start
```

5. Open http://localhost:3000 to view it in the browser

## Project Structure
```
birthday-reminder/
├── src/
│   ├── components/
│   │   ├── List.js
│   │   └── Person.js
│   ├── data/
│   │   └── data.js
│   ├── styles/
│   │   └── index.css
│   ├── App.js
│   └── index.js
├── public/
└── package.json
```

## Usage
1. The app displays a list of birthdays for the current day
2. Each person's card shows their image, name, and age
3. Click "Clear All" to remove all birthdays from the list
4. Data automatically reloads when you refresh the page

## Development
```bash
# Run tests
npm test

# Build for production
npm run build

# Run linting
npm run lint
```

## Contributing
1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## License
This project is licensed under the MIT License - see the LICENSE file for details

## Acknowledgments
- UI inspiration from [UI Design Daily](https://uidesigndaily.com/)
- React.js documentation
- Create React App team
