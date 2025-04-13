import React from 'react';
import { Card, Container } from 'react-bootstrap';

function Profile() {
  return (
    <Container className="my-5">
      <Card className="p-4 shadow">
        <h3 className="text-center mb-4">👤 User Profile</h3>
        <p><strong>Name:</strong> Narendra Modi</p>
        <p><strong>Email:</strong> nmodi@example.com</p>
        <p><strong>Favorite Icecream:</strong> Gadbad</p>
        <p><strong>Member Since:</strong> April 2024</p>
      </Card>
    </Container>
  );
}

export default Profile;
