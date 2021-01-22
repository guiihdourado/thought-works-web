import { useState } from 'react';
import { useRouter } from 'next/router';

import api from '../services/api';

import { Container, Title, InputDiv, Button } from '../styles/pages/Home';

export default function Home() {
  const router = useRouter()
  const [name, setName] = useState('');

  function handleSubmit() {
    api.post('/accounts', {
      name,
    }).then(({ data }) => {
      router.push(`/${data.slug}`);
    }).catch((error) => {
      console.log(error);
    });
  }
  
  return (
    <Container>
      <Title>Create Account</Title>
      <InputDiv>
        <input placeholder="Name" name="name" value={name} onChange={(e) => setName(e.target.value)}/>
      </InputDiv>
      <Button type="button" onClick={handleSubmit}>Create</Button>
    </Container>
  )
}
