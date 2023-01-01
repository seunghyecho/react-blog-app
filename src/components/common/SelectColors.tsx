import { ColorConsumer } from '@/util/colorContext';

function SelectColors() {
  const colors = ['red', 'orange', 'yellow', 'green', 'blue', 'purple', 'pink'];
  return (
    <div>
      <h2>색상을 선택하세요.</h2>
      <ColorConsumer>
        {({ actions }) => (
          <div style={{ display: 'flex' }}>
            {colors.map(color => (
              <div
                key={color}
                style={{
                  background: color,
                  width: '32px',
                  height: '32px',
                }}
                onClick={() => actions.setColor(color)}
                onContextMenu={e => {
                  e.preventDefault();
                  actions.setSubcolor(color);
                }}
              />
            ))}
          </div>
        )}
      </ColorConsumer>
    </div>
  );
}

export default SelectColors;