import { useState } from 'react';
import { FadeLoader } from 'react-spinners';
import { CSSProperties } from 'styled-components';

const override: CSSProperties = {
  display: 'block',
  margin: '0 auto',
  borderColor: 'red',
};

const Spinner = () => {
  const [color, setcolor] = useState('#14000e');
  return (
    <>
      <FadeLoader color={color} loading={true} cssOverride={override} />
    </>
  );
};

export default Spinner;
