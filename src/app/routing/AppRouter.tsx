import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { Home } from '../routes/Home';
import { About } from '../routes/About';
import { Message } from '../routes/Message';
import { Contact } from '../routes/Contact';

export const AppRouter: React.FC = () => (
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/about" element={<About />} />
    <Route path="/message" element={<Message />} />
    <Route path="/contact" element={<Contact />} />
  </Routes>
);
