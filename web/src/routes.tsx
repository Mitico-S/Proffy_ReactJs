// import React
import React from 'react';

import { BrowserRouter, Route } from 'react-router-dom';
import Landing from './pages/landing';
import TeachersList from './pages/Teacherlist';
import TeachersForm from './pages/TeachersForm';

function Routes() {
  return (
    <BrowserRouter>
      <Route path="/" exact component={Landing} />
      <Route path="/study" component={TeachersList} />
      <Route path="/give-classes" component={TeachersForm} />
    </BrowserRouter>
  );
}

export default Routes;
