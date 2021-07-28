import React from 'react'
import { Typography, Button, Container } from '@material-ui/core'

// Import Icons
import KeyboardArrowRightIcon from '@material-ui/icons/KeyboardArrowRight';


export default function Create() {
  return (
    <Container>
      <Typography
        variant="h6"
        color="textSecondary"
        component="h2"
        gutterBottom
      >
        Create a New Note
      </Typography>

      <Button
        onClick={() => console.log('You Have Been Clicked')}
        type="submit"
        color="secondary"
        variant="contained"
        endIcon={<KeyboardArrowRightIcon />}
      >
        Submit
      </Button>

    </Container>
  )
}
