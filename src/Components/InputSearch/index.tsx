import React, { useState } from 'react';

import { Container, Button, Input } from './styles';

type InputSearchProps = {
  placeholder: string;
  onSearch: (query: string) => void;
};

const InputSearch: React.FC<InputSearchProps> = ({onSearch, placeholder}) => {
  const [search, setSearch] = useState<string>('');
  
  const handleSearch = () => {
    onSearch(search);
  };

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(event.target.value);
  };

  return (
    <Container>
      <Input type="text" placeholder={placeholder} value={search} onChange={handleInputChange} />
      <Button onClick={handleSearch}>Buscar</Button>
    </Container>
  );
}

export default InputSearch;