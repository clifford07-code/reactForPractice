import Page1 from "./components/page1/page1";


const App = () => {
  const user= [
  {
    img: 'https://images.unsplash.com/photo-1498758536662-35b82cd15e29?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8bWFuJTIwaW4lMjBvZmZpY2V8ZW58MHx8MHx8fDA%3D',
    intro: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore corrupti similique reiciendis quos magnam sit.',
    color:'blue',
    tag:'setisfied'
  },
  {
    img: 'https://images.unsplash.com/photo-1675434303084-05da9d9aee1d?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fG1hbiUyMGluJTIwb2ZmaWNlfGVufDB8fDB8fHww',
    intro: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore corrupti similique reiciendis quos magnam sit.',
     color:'green',
    tag:'Underserved'

  },
  {
    img: 'https://images.unsplash.com/photo-1670401042459-f1578ff39799?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTh8fG1hbiUyMGluJTIwb2ZmaWNlfGVufDB8fDB8fHww',
    intro: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore corrupti similique reiciendis quos magnam sit.',
     color:'green',
    tag:'Underbandked'

  },
    {
    img: 'https://images.unsplash.com/photo-1507537297725-24a1c029d3ca?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fG1hbiUyMGluJTIwb2ZmaWNlfGVufDB8fDB8fHww',
    intro: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore corrupti similique reiciendis quos magnam sit.',
    color:'blue',
    tag:'setisfied'
  }
]
  return (
    <>
      <Page1 user={user}/>
    
    </>
  );
};

export default App;
