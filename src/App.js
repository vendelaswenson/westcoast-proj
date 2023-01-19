import NotFound from './pages/NotFound';
import LandingPage from './pages/LandingPage';
import MainHeader from './components/MainHeader';
import TeacherDetail from './pages/TeacherDetail';
import CourseDetail from './pages/CourseDetail';
import ContactUs from './pages/ContactUs';
import { Routes, Route } from 'react-router-dom'
import CoursePage from './pages/CoursePage';
import TeacherPage from './pages/TeacherPage';


function App() {
  return (
    <div>
      <MainHeader />
      <main>
        <Routes>
          <Route path="/" element={<LandingPage />}></Route>
          <Route path="/landingpage" element={<LandingPage />}></Route>
          <Route path="/teacher/:id" element={<TeacherDetail />}></Route>
          <Route path="/course/:id" element={<CourseDetail />}></Route>
          <Route path="/contact" element={<ContactUs />}></Route>
          <Route path="/courselist" element={<CoursePage />}></Route>
          <Route path="/teacherlist" element={<TeacherPage />}></Route>
          <Route path="*" element={<NotFound />}></Route>
        </Routes>
      </main>
    </div>
  );
}

export default App;
