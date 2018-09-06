import React from 'react';

import './CardContent.scss';

const CardContent = props => {
  return (
    <div
      className="CardContent"
      style={{
        backgroundColor: props.on ? "#574b90" : "#303952"
      }}
    >
      <h1 
        onClick={props.toggle}
      >
        {props.on ? "Close" : "Open"} Navigation
      </h1>

      <p
        style={{
          color: props.on ? "white" : "rgb(197, 197, 197)"
        }}
      >
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Officiis eos blanditiis quisquam maiores sed, quae dolorem laudantium reprehenderit quod magni perferendis repellendus libero placeat necessitatibus, facilis iusto? Distinctio, saepe iusto!
        Nam qui inventore officiis, aperiam odit impedit ea harum quaerat provident quisquam molestias commodi corporis blanditiis delectus, suscipit debitis architecto doloremque ab aliquid explicabo modi! Nobis corrupti vitae laborum architecto.
        Distinctio laboriosam dolores cum natus quas amet sit maxime unde laborum quasi totam vitae sunt quo quibusdam harum reprehenderit facilis fugit dolor rerum rem ad deleniti, ex commodi? Eligendi, aut.
        Officia corporis quasi dolor dicta quos quisquam incidunt, illum delectus eos atque! Animi nulla eum nemo nisi corporis eos, incidunt dolore, culpa quis in minus sequi hic, facere alias consectetur!
        
        <br />
        <br />
        
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Officiis eos blanditiis quisquam maiores sed, quae dolorem laudantium reprehenderit quod magni perferendis repellendus libero placeat necessitatibus, facilis iusto? Distinctio, saepe iusto!
        Nam qui inventore officiis, aperiam odit impedit ea harum quaerat provident quisquam molestias commodi corporis blanditiis delectus, suscipit debitis architecto doloremque ab aliquid explicabo modi! Nobis corrupti vitae laborum architecto.
      </p>
    </div>
  );
};

export default CardContent;