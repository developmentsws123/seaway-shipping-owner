import React, { useState } from 'react'
import Button from 'react-bootstrap/Button'
import Modal from 'react-bootstrap/Modal'



function CustomModal(props) {
  const { show, handleClose, postDetails } = props
  console.log('postDetails', postDetails)
  return (
    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>Yacht Detail</Modal.Title>
      </Modal.Header>
      <Modal.Body><h5>Yacht Specification</h5><h4>Name</h4>{postDetails.Name}</Modal.Body>
      
      
      <Modal.Footer>
        <Button variant="secondary" onClick={handleClose}>
          Close
        </Button>
        <Button variant="primary" onClick={handleClose}>
          Save Changes
        </Button>
      </Modal.Footer>
    </Modal>
  )
}

export default CustomModal
