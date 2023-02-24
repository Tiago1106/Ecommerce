import React, { useState } from 'react';

import { Container, Button, ContainerInput, Input, Title } from './styles';

const Newsletter: React.FC = () => {
  const [value, setValue] = useState<string>('')
  
  return (
    <Container>
      <Title>Receba Nossa Newsletter</Title>
      <ContainerInput>
        <Input type='text' placeholder='Digite seu e-mail' value={value} onChange={(event) => setValue(event.target.value)}/>
        <Button>Enviar</Button>
      </ContainerInput>
    </Container>
  );
}

export default Newsletter;