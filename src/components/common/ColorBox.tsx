import { ColorConsumer } from '@/util/colorContext';

function ColorBox() {
  return (
    <ColorConsumer>
      {({ state }) => (
        <>
          <div
            style={{
              width: '32px',
              height: '32px',
              background: state.color,
            }}
          />
          <div
            style={{
              width: '32px',
              height: '32px',
              background: state.subcolor,
            }}
          />
        </>
      )}
    </ColorConsumer>
  );
}

export default ColorBox;