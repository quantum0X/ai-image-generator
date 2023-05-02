import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

// import { preview } from '../assets'
import { useRandomPrompt } from '../utils'
import { FormField, Loader } from '../components'


const CreatePost = () => {
  const navigate = useNavigate()
  const [form, setForm] = useState({
    name: '',
    promt: '',
    photo: ''
  })

  const [generatingImage, setGeneratingImage] = useState(false)
  const [loading, setLoading] = useState(false)


  const handleSubmit = () => {

  }

  const handleChange = (e) => {

  }

  const handleSurpriseMe = () => {

  }
  return (
    <section className='max-w-7xl mx-auto'>
      <div className=" font-medium text-2xl text-center">
        <h1 className="font-bold text-gray-800 text-[32px]">Create</h1>
        <p className="mt-2 text-gray-600">
          Create imaginative and visually stunning images throught DALL-E AI and share them with the Community
        </p>
      </div>

      <form className='mt-16 max-w-3xl' onSubmit={handleSubmit}>
        <div className="flex flex-col gap-5">
          <FormField 
            lableName="Your name"
            type="text"
            name="name"
            placehoder="Alex Carter"
            value={form.value}
            onChange={handleChange}
          />
          <FormField 
            lableName="prompt"
            type="text"
            name="prompt"
            placehoder="Alex Carter"
            value={form.promt}
            onChange={handleChange}
            isSurpriseMe
            handleSurpriseMe={handleSurpriseMe}
          />
        </div>
      </form>


    </section>



  )
}

export default CreatePost