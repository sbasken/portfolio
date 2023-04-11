import Carousel from 'react-bootstrap/Carousel';

function Slides() {
  return (
    <Carousel className="w-75 mx-auto">
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://images.unsplash.com/photo-1533090161767-e6ffed986c88?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2069&q=80"
          alt="First slide"
        />
        <Carousel.Caption className="text-light bg-secondary opacity-75 rounded">
          <h3>My First Portfolio Website</h3>
          <p >I created this website to showcase what I have been working on.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2072&q=80"
          alt="Second slide"
        />
        <Carousel.Caption className="text-light bg-secondary opacity-75 rounded">
          <h3 className='w-75 mx-auto'>⬇️ Languages and Other Technical Skills Used ⬇️ </h3>
          <p>JaveScript, React, Bootstrap, Python, and Flask.</p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default Slides;