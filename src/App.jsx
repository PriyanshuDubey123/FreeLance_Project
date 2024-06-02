import React, { useState } from 'react';
import Dashboard from './components/Dashboard';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Profile from './components/Profile';
import Notification from './components/Notification';
import Settings from './components/Settings';
import Sidebar from './components/Sidebar';
import Footer from './components/Footer';
import Header from './components/Header';
import StudyResources from './components/StudyResources';
import LeaderBoard from './components/LeaderBoard';
import CreateTest, { QuestionComponent } from './components/CreateTest';
import ResultComponent from './components/Result';
import UserProfileComponent from './components/Profile';
import Notifications from './components/Notification';
import TodoList from './components/TodoList';
import WelcomeScreen from './components/Login';
import FormulaSheets from './components/FormulaSheet';
import Notes from './components/Notes';

const App = () => {
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  return (
       <Router>
        <Routes>
      <Route path='/' element={<WelcomeScreen/>}></Route>
      <Route path='/home' element={<Dashboard/>}></Route>
      <Route path="/resources" element={<StudyResources/>} />
      <Route path="/leaderboard" element={<LeaderBoard />} />
      <Route path="/home/test" element={<CreateTest />} />
      <Route path="/home/test/questions" element={<QuestionComponent/>} />
      <Route path="/result" element={<ResultComponent/>} />
      <Route path="/profile" element={<UserProfileComponent/>} />
      <Route path="/notification" element={<Notifications/>} />
      <Route path="/home/book" element={<TodoList/>} />
      <Route path="/home/formula" element={<FormulaSheets/>} />
      <Route path="/home/notes" element={<Notes/>} />
        </Routes>
       </Router>
  );
};

export default App;
