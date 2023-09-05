import Cell from "./Cell";

const Row = ({ cells, onCellClicked, index }) => (
  <tr>
    {cells.map((val, cellIndex) => (
      <Cell
        key={cellIndex}
        val={val}
        onCellClicked={() => onCellClicked(index, cellIndex)}
      />
    ))}
  </tr>
);

export default Row;
