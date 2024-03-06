import React from 'react';

import People from './Assets/people.svg';

import Arrow from './Assets/arrow.svg';

import { 
  Container, 
  Image, 
  ContainerItems, 
  H1, 
  InputLabel, 
  Input, 
  Button 
} from './style';

function App () {

  const users = [
    { id: Math.random(), name:"Rodolfo", age:28},
    { id: Math.random(), name:"Maria", age:21},
  ];

  return (
    <Container>
      <Image alt="logo-image" src={People}/>
      <ContainerItems>
          
        <H1>Olá!</H1>
          
        <InputLabel>Nome</InputLabel>
        <Input placeholder="Nome"/>
          
        <InputLabel>Idade</InputLabel>
        <Input placeholder="Idade"/>
          
        <Button>Cadastrar <img alt="seta" src={Arrow}/></Button>

        <ul>
          {users.map((user) =>(
            <li key={user.id}>
              {user.name} - {user.age}
              </li>
          ))}
        </ul>
        
      </ContainerItems>
    </Container>
  );
}

export default App;


