import React from 'react'

const Home = () => {
    const divStyle = {
        backgroundImage: 'url("https://a.storyblok.com/f/167495/1200x630/4b0cf3aef7/best-meeting-notes-apps.png")', // Replace with your image path
        backgroundSize: 'cover', // You can adjust the size and other background properties here
        width: '100%',
        height: '92vh', // Set the height as needed
      };
  return (
    <div style={divStyle}>
        <p className='Notes'>Notes Taking Application</p>
    </div>
  )
}

export default Home