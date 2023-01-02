import React from 'react';
import {useNavigate} from 'react-router'

const AboutPage = () => {

    const nav = useNavigate()
  return (
    <div>
      <h1>Страница информации</h1>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam,
        pariatur voluptates! Earum amet harum reprehenderit, natus deleniti
        mollitia a minima, voluptatibus perferendis soluta impedit optio.
        Adipisci dicta sapiente quia veritatis. Deleniti incidunt temporibus
        deserunt aut natus omnis possimus enim ipsam ipsum nesciunt ratione
        nobis aliquam eos in exercitationem sit consequuntur, maiores vel
        perferendis harum blanditiis perspiciatis. Cum molestiae optio sit?
        Cupiditate veniam dicta et repudiandae odit nostrum earum fugit
        laboriosam, laborum deserunt, facere dolore adipisci maxime deleniti cum
        corporis, quaerat vitae doloribus quo perferendis! Accusantium veritatis
        fugit modi ad blanditiis.
      </p>
      <button className='btn' onClick={() => nav('/')}>Обратно к списку дел</button>
    </div>
  );
};

export default AboutPage;
