import React from 'react';

interface HomeProps {
    children: React.ReactNode;
}

const Home: React.FC<HomeProps> = ({children}) => {
  return (
    <div>{children}</div>
  )
}

export default Home;
