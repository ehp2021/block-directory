import { Center, 
  Box,Input, 
  InputGroup, 
  InputLeftAddon, 
  Stack, Button, Radio, RadioGroup, 
  Textarea } from '@chakra-ui/react';
  import emailjs from 'emailjs-com';
  const {REACT_APP_YOUR_SERVICE_ID, REACT_APP_USER_ID, REACT_APP_TEMPLATE_ID } = process.env;

//https://stackoverflow.com/questions/55795125/how-to-send-email-from-my-react-web-application

function Footer() {
  function sendEmail(e) {
    e.preventDefault();   

    emailjs.sendForm(REACT_APP_YOUR_SERVICE_ID, REACT_APP_TEMPLATE_ID, e.target, REACT_APP_USER_ID)
      .then((result) => {
          window.location.reload()  
      }, (error) => {
          console.log(error.text);
      });
  }

  return (
    <>
    {/*
    <Center flexDirection='row'>
       <Box maxW='md' overflow='hidden'>
        <Stack spacing={4}>
          <h3>Submit your healthcare blockchain company, journal, group, or conference to our directory:</h3>
          <Input placeholder='Name of Your Company, etc' size='sm'/>
          <Input placeholder='Name of Submitting Person' size='sm'/>
          <Input placeholder='Email of Submitting Person' size='sm'/>
          <InputGroup size='sm'>
            <InputLeftAddon children='https://' />
            <Input placeholder='website' />

          </InputGroup>

          <div>Which best describes your company?</div>W
            <RadioGroup >
              <Stack direction='row'>
                <Radio>Company</Radio>
                <Radio >Conference</Radio>
                <Radio > Project or Working Group</Radio>
                <Radio >Journal</Radio>
              </Stack>
            </RadioGroup>
          <div>Anything else you want us to know? Questions, suggestions, etc.</div>
          <Textarea placeholder='' />

          <Button colorScheme='white' size="sm" variant="outline" onSubmit={sendEmail}>Submit</Button>
        </ Stack>
      </Box> 
      </Center>   
    */}

      <form className="contact-form" onSubmit={sendEmail}>
      <input type="hidden" name="contact_number" />
      <label>Your Name</label>
        <input type="text" name="from_name" />
      <label>Email</label>
        <input type="email" name="from_email" />
      <label>Company, Project, Consortium, etc Name</label>
        <input type="text" name="company_name" />
      <label>Company, Project, Consortium, etc Website</label>
        <input type="text" name="company_website" />
      <label>Description</label>
        <textarea name="company_description" />
      <input type="submit" value="Send" />
    </form>

    </>
  )
}

export default Footer;