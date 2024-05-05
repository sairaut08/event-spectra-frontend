import {  Route, Routes } from 'react-router-dom'
import './App.css'
import HomePage from './Pages/HomePage'
import AboutUsPage from './Pages/AboutUsPage'
import ContactUsPage from './Pages/ContactUSPage'
import NotFound from './Pages/NotFound'
import Signup from './Pages/Signup'
import Signin from './Pages/Signin'
import ProfilePage from './Pages/User/ProfilePage'
import ClubList from './Pages/Clubs/ClubList'
import AccessDenied from './Pages/AccessDenied'
import ClubDescription from './Pages/Clubs/ClubDescription'
import RequireAuth from './Components/Auth/RequireAuth'
import CreateClub from './Pages/Clubs/CreateClub'
import EditProfile from './Pages/User/EditProfile'
import EventDescription from './Pages/Events/EventDescription'
import EventList from './Pages/Events/EventList'
import AddEvent from './Pages/Events/AddEvent'
import ChangePassword from './Pages/User/ChangePassword'
import StudentCompanyRegister from './Pages/StudentCompanyRegister'
import CompanyList from './Pages/Companies/CompanyList'
import CompanyDescription from './Pages/Companies/CompanyDescription'
import StudentList from './Pages/StudentList'



function App() {
  

  return (

    // routes 
    <Routes>
        <Route path='/' element={ <HomePage/> } />
        <Route path='/about-us' element={ <AboutUsPage/> } />
        <Route path='/contact-us' element={ <ContactUsPage/> } />
        <Route path='/signup' element={ <Signup/> } />
        <Route path='/login' element={ <Signin/> } />
        <Route path='/user/profile' element={ <ProfilePage/> } />
        <Route path='/user/change-password' element={ <ChangePassword/> } />
        <Route path='/clubs' element={ <ClubList/> } />
        <Route path='/events' element={ <EventList/> } />
        <Route path='/club/description' element={ <ClubDescription/> } />
        <Route path='/club/event/description' element={ <EventDescription/> } />
        <Route path='/denied' element={ <AccessDenied/> } />
        <Route path='/master-data-sheet' element={ <StudentCompanyRegister/> } />
        <Route path='/companies' element={ <CompanyList/> } />
        <Route path='/company/description' element={ <CompanyDescription/> } />
        <Route path='/company/student-list' element={ <StudentList/> } />
        

        {/* admin routes */}
        <Route element={<RequireAuth allowedRoles={["ADMIN"]}/>} >
            <Route path='club/create-club' element={ <CreateClub/>} />
            <Route path='club/add-event' element={ <AddEvent/>} />
        </Route>

        <Route element={<RequireAuth allowedRoles={["ADMIN","USER"]}/>} >
            <Route path='/user/profile' element={ <ProfilePage/>} />
            <Route path='/user/edit-profile' element={ <EditProfile/>} />
        </Route>


        <Route path='*' element={<NotFound/> } />
        
        
  
    
    </Routes>



  )
}

export default App
