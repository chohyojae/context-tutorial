import React from 'react';
import { ColorConsumer } from '../contexts/color';

const colors = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet'];

const SelectColors = () => {
  return (
    <div>
      <h2>색상을 선택하세요.</h2>
      <ColorConsumer>
        {({ actions }) => (
          <div style={{ display: 'flex' }}>
            {colors.map((color) => {
              return (
                <div
                  key={color}
                  style={{
                    background: color,
                    width: '24px',
                    height: '24px',
                    cursor: 'pointer',
                  }}
                  onClick={() => {
                    //set mainColor when the mouse left button is clicked
                    actions.setColor(color);
                  }}
                  onContextMenu={(e) => {
                    //set subColor when the mouse right button is clicked
                    e.preventDefault();
                    actions.setSubcolor(color);
                  }}
                />
              );
            })}
          </div>
        )}
      </ColorConsumer>
      <hr />
    </div>
  );
};

export default SelectColors;
