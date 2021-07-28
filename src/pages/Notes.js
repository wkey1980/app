import React from 'react'
import Container from '@material-ui/core/Container';

export default function Notes() {
  return (
    <div>
      <h1>Notes page</h1>
      <br />
      <Container maxWidth="xl">
        <h1  style={{ backgroundColor: '#cfe8fc'}}>
          Container Of maxWidth = xl 
         </h1>
      </Container>
      <Container maxWidth="lg">
        <h1  style={{ backgroundColor: '#cfe8fc'}}>
          Container Of maxWidth = lg 
         </h1>
      </Container>
      <Container maxWidth="md">
        <h1  style={{ backgroundColor: '#cfe8fc'}}>
          Container Of maxWidth = md 
         </h1>
      </Container>
      <Container maxWidth="sm">
        <h1  style={{ backgroundColor: '#cfe8fc'}}>
          Container Of maxWidth = sm
        </h1>
      </Container>
      <Container maxWidth="xs">
        <h1  style={{ backgroundColor: '#cfe8fc'}}>
          Container Of maxWidth = xs 
        </h1>
      </Container>
      <Container fixed>
        <h1  style={{ backgroundColor: '#cfe8fc'}}>
          Container with fixed prop
         </h1>
      </Container>
    </div>
  )
}
