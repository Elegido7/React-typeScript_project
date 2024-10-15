import React from 'react';

interface Greet {
  name: string;
}

const Greeting: React.FC<Greet> = ({ name }) => {
  return <div>Hello, {name}!</div>;
};

export default Greeting;
