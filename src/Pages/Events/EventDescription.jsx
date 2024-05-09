  import React, { useEffect, useState } from 'react'
  import {useLocation} from 'react-router-dom'
  import BaseLayout from '../../Layouts/BaseLayout';
  import axiosInstance from '../../Helpers/axiosInstance';
  import toast from 'react-hot-toast'
import { useSelector } from 'react-redux';

  function EventDescription() {

      const {state} = useLocation()
      const [clubName,setClubName] = useState('')
      const [formattedDate, setFormttedDate] = useState('')

      const userData = useSelector(state => state?.auth?.data);
      console.log('userdaata', userData.role);

      console.log(`State : ${state.secure_url}`);
      // console.log(`eventid: ${state._id}`);

      async function fetchClubDetails(){
        try {
          // console.log(`CLUUBID : ${state.clubId}`);
          const response =   axiosInstance.get(`/clubs/${state.clubId}`)
          const clubDetails = await response
          
          setClubName(clubDetails.data.club.clubName)
        } catch (error) {
          console.log('error in fetching club details');
        }
      }

      useEffect(() => {
        fetchClubDetails()

        const eventDate = new Date(state.eventDate)
        const formattedDate = eventDate.toLocaleDateString('en-US', {
          weekday: 'long',
          year: 'numeric',
          month: 'long',
          day: 'numeric',
        })
        setFormttedDate(formattedDate)

      },[state])

      // ------------------------------------------------
      const [formData, setFormData] = useState({
        collegeName: '',
        department: '',
        year: '',
      });
    
      const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
      };
    
      async function handleSubmit (e)  {
        e.preventDefault();

        if(!formData.department || !formData.collegeName || !formData.year){
          toast.error('All fields are required !')
          return
        }

        // if(formData.prn.length !== 10){
        //   toast.error('PRN must of ten characters')
        //   return
        // }
        
        try {
            const response = axiosInstance.post(`/clubs/${state.clubId}/events/${state._id}/register`,formData)
            const registerDetails = await response

            if(registerDetails?.data?.success){
              toast.success('Registered successfully')
              setFormData({
                collegeName: '',
                department: '',
                year: '',
              })
            }
        } catch (error) {
            toast.error(error?.response?.data?.message)
        }

      };

    return (
      <BaseLayout>
        <main className='w-full pt-24 md:ml-20 md:mr-20'>
          <section className='w-full flex flex-col pr-32 md:flex-row mb-32'>

            
                <div className='w-full md:w-1/3 overflow-hidden rounded-lg mb-4 md:mb-0'>
                  <img
                    src={state.thumbnail.secure_url}
                    alt='club thumbnail'
                    className='w-full h-64 object-cover object-center'
                    style={{ objectFit: 'contain' }}
                  />
                </div>
              
            
            <div className='pl-0 md:pl-32'>
              <h1 className='text-4xl md:text-6xl font-bold bg-gradient-to-r from-black to-blue-500 text-transparent bg-clip-text uppercase mb-4'>
                {state.eventName}
              </h1>
              <h3 className='mb-4 text-lg md:text-2xl text-orange-500 ml-2'>{state.tagline && (state.tagline)}</h3>
              <h3 className='text-lg md:text-2xl text-orange-500 ml-2'>Held By: {clubName}</h3>
              <h3 className='text-lg md:text-2xl text-orange-500 ml-2'>Event Date: {state.eventDate ? formattedDate: 'NA'}</h3>
              <h3 className='text-lg md:text-2xl text-orange-500 ml-2'>Event Time: {state.eventTime ? state.eventTime: 'NA'}</h3>
              <h3 className='text-base md:text-lg mt-10 text-justify ml-2'>{state.description}</h3>
            </div>
          </section>

          {/*--------------------------------- FORM ----------------------------------------- */}
          {
            userData.role === "USER" ? 

            <div className="max-w-md mx-auto mt-5 p-6 bg-white rounded-md shadow-md border border-gray-200 mb-16">
            <h2 className="text-lg font-semibold text-gray-800 mb-5">Student Details</h2>
            <form onSubmit={handleSubmit}>
              <div className="mb-4">
                <label htmlFor="collegeName" className="block text-sm font-medium text-gray-600 mb-1">College name</label>
                <input
                  type="text"
                  id="collegeName"
                  name="collegeName"
                  value={formData.collegeName}
                  onChange={handleInputChange}
                  className="w-full px-4 py-2 rounded-md border border-gray-300 focus:border-blue-500 focus:outline-none"
                />
              </div>
              <div className="mb-4">
                <label htmlFor="department" className="block text-sm font-medium text-gray-600 mb-1">Department</label>
                <select
                  id="department"
                  name="department"
                  value={formData.department}
                  onChange={handleInputChange}
                  className="w-full px-4 py-2 rounded-md border border-gray-300 focus:border-blue-500 focus:outline-none"
                >
                  <option value="">Select Department</option>
                  <option value="CSE">CSE</option>
                  <option value="ETC">ETC</option>
                  <option value="MECH">MECH</option>
                  <option value="ELEC">ELEC</option>
                  <option value="CVL">CVL</option>
                </select>
              </div>
              <div className="mb-4">
                <label htmlFor="year" className="block text-sm font-medium text-gray-600 mb-1">Year</label>
                <select
                  id="year"
                  name="year"
                  value={formData.year}
                  onChange={handleInputChange}
                  className="w-full px-4 py-2 rounded-md border border-gray-300 focus:border-blue-500 focus:outline-none"
                >
                  <option value="">Select Year</option>
                  <option value="FY">FY</option>
                  <option value="SY">SY</option>
                  <option value="TY">TY</option>
                  <option value="Final">Final</option>
                </select>
              </div>
              <button type="submit" className="w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600 transition duration-300">Register To Event</button>
            </form>
              </div>

              :

              ""
          }
        </main>
      </BaseLayout>
    )
  }

  export default EventDescription
