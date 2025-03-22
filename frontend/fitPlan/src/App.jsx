
import { Route, Routes } from 'react-router-dom'
import './App.css'

import Footer from './commponets/footer'
import Header from './commponets/header'
import About from './pages/about'
import Home from './pages/home'
import LogIn from './pages/logIn'
import SignUp from './pages/signUp'
import LogOut from './pages/logOut'
import MyPlan from './pages/myPlan'

import Modal from "react-modal"
import React, { useState, useEffect } from "react";
import ThemeToggle from './commponets/themeToggle'
import { useTheme } from './context/themeContext'
import httpService from './services/httpService'
import usersService from './services/userService'
import WelcomePage from './pages/welcomePage'
import Profile from './pages/profile'

import { useAuth } from './context/auth.context'
import ProtectRouter from './commponets/common/protectRouter'
import MoreActions from './pages/moreActions'
import MyTrainess from './pages/myTrainees'
import AddTrainee from './pages/addTrainee'
import MoreInfo from './pages/TraineeMoreInfo'

function App() {
  const { user } = useAuth();

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalType, setModalType] = useState(null);
  const { theme } = useTheme();
  const mode = theme === "dark" ? "dark" : "light";

  const openModal = (type) => {
    setModalType(type);
    setIsModalOpen(true);

    const event = new Event("ModalOpen");
    document.dispatchEvent(event);
  };

  const closeModal = (type) => {
    setIsModalOpen(false);
    setModalType(null);
  };



  useEffect(() => {
    let welcomeTimer;

    if (!user) {
      welcomeTimer = setTimeout(() => {
        openModal('welcomePage')
      }, 5000)
    } else {
      /* console.log(user) */
    }

    const handleModalOpen = () => {
      if (welcomeTimer) {
        clearTimeout(welcomeTimer);
      };
    };

    document.addEventListener('ModalOpen', handleModalOpen);

    return () => {
      clearTimeout(welcomeTimer);
      document.removeEventListener('ModalOpen', handleModalOpen);
    };

  }, [user]);


  return (<>
    <div className="app min-vh-100 d-flex flex-column gap-2">
      <Header openModal={openModal} />

      <main className='flex-fill'>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/my-plan' element={<MyPlan />} />
          <Route path='/more-actions' element={<MoreActions />} />
          <Route path='/my-trainees' element={<MyTrainess openModal={openModal} />} />
          <Route path='/add-trainee' element={<AddTrainee />} />
          <Route path='/more-info' element={<MoreInfo />} />
        </Routes>
      </main>
      <Footer />


      {isModalOpen && (
        <Modal
          isOpen={isModalOpen}
          onRequestClose={closeModal}
          className="modal-content"
          overlayClassName="modal-overlay"
          contentLabel={`${modalType} Modal`}
          id={`model${mode}`}
        >
          {modalType === 'signup' && <SignUp closeModal={closeModal} openModal={openModal} />}
          {modalType === 'login' && <LogIn closeModal={closeModal} />}
          {modalType === 'logout' && <LogOut closeModal={closeModal} />}
          {modalType === 'welcomePage' && <WelcomePage closeModal={closeModal} openModal={openModal} />}
          {modalType === 'addTrainee' && <AddTrainee closeModal={closeModal} />}


        </Modal>
      )}
    </div>
  </>)
}

export default App
