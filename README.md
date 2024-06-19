11356857

React Native Job Listing App

This project is a React Native application that displays job listings using various components like JobCard and features horizontal scrolling with Scrollview. The app includes a login page, a job listing page, and individual components for better modularity and reusability.
Table of Contents

    Installation
    Usage
    Components
        Login Page
        JobCard Component
        Job Listing
    Features
    Dependencies
    Contributing
    License

Installation

To get started with the project, clone the repository and install the dependencies:

bash

git clone https://github.com/your-username/job-listing-app.git
cd job-listing-app
npm install

For iOS, you might also need to install CocoaPods dependencies:

bash

cd ios
pod install
cd ..

Usage

To run the app on an Android or iOS simulator, use the following commands:

bash

npx react-native run-android   # For Android
npx react-native run-ios       # For iOS

Make sure you have the necessary simulators or emulators installed and running.
Components
Login Page

The login page is the entry point of the application. It allows users to authenticate and access the job listings. The login page includes:

    TextInput fields for username and password
    A Button for submitting the login form
    Basic validation to ensure that the fields are not empty

JobCard Component

The JobCard component is used to display individual job details in a card format. Each card includes:

    Job title
    Company name
    Salary
    Location
    Company logo


Job Listing

The job listing page displays a list of job cards in a horizontal scrollable view using FlatList. It fetches job data and renders each job using the JobCard component.



Features

    Login Authentication: Secure login page to access the app.
    Horizontal Scrolling: Smooth horizontal scrolling for job listings.
    Modular Components: Reusable JobCard component to display job details.
    Responsive Design: Adaptable layout for different screen sizes.

Dependencies

    react-native: Core React Native library for building mobile apps.
    @react-navigation/native: Navigation library for routing and navigation.
    @react-navigation/drawer: Drawer navigation for creating side menus.
    react-native-vector-icons: Customizable icons for React Native.
    react-native-gesture-handler: Gesture handling in React Native.
    react-native-reanimated: React Native's Animated library reimplemented.

Contributing

Contributions are welcome! Please fork the repository and create a pull request with your changes.

    Fork the repository.
    Create a new branch: git checkout -b my-feature-branch.
    Make your changes and commit them: git commit -m 'Add some feature'.
    Push to the branch: git push origin my-feature-branch.
    Submit a pull request.

Screenshot
![Screenshot (7)](https://github.com/schooltech1/rn-assignment4-11356857/assets/170237696/1b214f95-b5fb-4728-b7b6-a4bde88653e8)

![Screenshot (9)](https://github.com/schooltech1/rn-assignment4-11356857/assets/170237696/a23135ab-cc16-41c5-b799-23becd541fec)

![Screenshot (12)](https://github.com/schooltech1/rn-assignment4-11356857/assets/170237696/f0425495-1d07-4feb-98fa-bedbe7be380a)

![Screenshot (11)](https://github.com/schooltech1/rn-assignment4-11356857/assets/170237696/4eb736b9-8955-4542-8b97-243ad2ac82f6)

![Screenshot (13)](https://github.com/schooltech1/rn-assignment4-11356857/assets/170237696/9c901937-c693-4dfd-b695-cdbeadc9fe6e)


License

This project is licensed under the MIT License. See the LICENSE file for details.
