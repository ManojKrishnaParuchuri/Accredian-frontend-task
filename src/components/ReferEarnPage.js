import React, { useState } from 'react';
import { Button, Modal, TextField } from '@mui/material';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

import './Refer.css';

const ReferEarnPage = () => {
  const [open, setOpen] = useState(false);
  const [refer_name, setReferName] = useState('');
  const [refer_mail, setReferEmail] = useState('');
  const [referee_name, setRefereeName] = useState('');
  const [referee_mail, setRefereeEmail] = useState('');
  const [refer_course, setRefereeCourse] = useState('');
  const navigate = useNavigate();

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const handleContact = () =>{
    navigate('/contact');
  }

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post('http://localhost:4500/api/loginuser', {
        refer_name: refer_name, // Updated field name
        refer_mail: refer_mail, // Updated field name
        referee_name: referee_name, // Updated field name
        referee_mail: referee_mail, // Updated field name
        refer_course : refer_course,
      });

      console.log('Referral submitted:', response.data);

      setReferName('');
      setReferEmail('');
      setRefereeName('');
      setRefereeEmail('');
      setRefereeCourse('')

      handleClose();
      navigate('/success');
    } catch (error) {
      console.error('Error submitting referral:', error);
    }
  };

  return (
    <div>
      <section className="hero">
        <div className="container">
          <h1>Refer & Earn</h1>
          <p>Refer a friend and earn rewards!</p>
          <Button variant="contained" color="primary" onClick={handleOpen}>
            Refer Now
          </Button>
<br></br><br></br>
          <Button variant="contained" color="secondary" onClick={handleContact}>
            Contact Me
          </Button>
        </div>
      </section>
      <Modal open={open} onClose={handleClose}>
        <div className="modal">
          <h2>Refer a Friend</h2>
          <form onSubmit={handleSubmit}>
            <TextField
              label="Referrer Name"
              variant="outlined"
              size="small"
              value={refer_name}
              onChange={(e) => setReferName(e.target.value)}
              required
            />
            <TextField
              label="Referrer Email"
              variant="outlined"
              size="small"
              value={refer_mail}
              onChange={(e) => setReferEmail(e.target.value)}
              required
            />
            <TextField
              label="Referee Name"
              variant="outlined"
              size="small"
              value={referee_name}
              onChange={(e) => setRefereeName(e.target.value)}
              required
            />
            <TextField
              label="Referee Email"
              variant="outlined"
              size="small"
              value={referee_mail}
              onChange={(e) => setRefereeEmail(e.target.value)}
              required
            />
            <TextField
              label="Refer Course link"
              variant="outlined"
              size="small"
              value={refer_course}
              onChange={(e) => setRefereeCourse(e.target.value)}
              required
            />
            <Button type="submit" variant="contained" color="primary">
              Submit
            </Button>
          </form>
        </div>
      </Modal>
    </div>
  );
};

export default ReferEarnPage;
