import React from 'react';
import MainNavbar from './components/MainNavbar';

import { BrowserRouter as Router, Route } from "react-router-dom";

import Homepage from './pages/Homepage';
import ManageQuestions from './pages/ManageQuestions';
import AddQuestion from './pages/AddQuestion';
import EditQuestion from './pages/EditQuestion';

import ManageQuestionnaires from './pages/ManageQuestionnaires';

function App() {
  return (
    <div>
      <MainNavbar />
      <Router>
        <Route path="/" exact component={Homepage} />
        <Route path="/manage-questions" exact component={ManageQuestions} />
        <Route path="/manage-questions/add-question" exact component={AddQuestion} />
        <Route path="/manage-questions/question/:id" exact component={EditQuestion} />

        <Route path="/manage-questionnaires" exact component={ManageQuestionnaires} />



      </Router>
    </div>
  );
}

export default App;
