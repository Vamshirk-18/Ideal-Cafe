import React from 'react';
import { Container, Card, Button, Table } from 'react-bootstrap';

function Admin() {
  return (
    <Container className="my-5">
      <Card className="p-4 shadow">
        <h3 className="text-center mb-4">🔧 Admin Dashboard</h3>

        <Button variant="primary" className="mb-3">
          ➕ Add New Menu Item
        </Button>

        <Table striped bordered hover>
          <thead>
            <tr>
              <th>#</th>
              <th>Item Name</th>
              <th>Category</th>
              <th>Price</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>1</td>
              <td>Vanilla Sundae</td>
              <td>Dessert</td>
              <td>₹120</td>
              <td>Available</td>
            </tr>
            <tr>
              <td>2</td>
              <td>Choco Lava</td>
              <td>Dessert</td>
              <td>₹150</td>
              <td>Out of Stock</td>
            </tr>
          </tbody>
        </Table>
      </Card>
    </Container>
  );
}

export default Admin;
