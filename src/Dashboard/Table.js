import React, { useContext } from 'react';
import styled from 'styled-components';
import { tableRows, tableColumns } from './Data';
import { AutoSizer, Column, Table } from 'react-virtualized';
import 'react-virtualized/styles.css';
import { Card } from './Card';
import { medGrey } from './GlobalStyle';

const ROW_HEIGHT = 48;

class ReactVirtualizedTable extends React.Component {
  render() {
    const { columns } = this.props;
    return (
      <AutoSizer>
        {({ height, width }) => (
          <Table
            height={height}
            width={width}
            rowHeight={ROW_HEIGHT}
            headerHeight={ROW_HEIGHT}
            rowCount={tableRows.length}
            rowGetter={({ index }) => tableRows[index]}
            rowStyle={{
              borderBottom: `1px solid ${medGrey}`,
              boxSizing: 'border-box',
            }}
            gridStyle={{ outline: 0 }}
          >
            {columns.map(({dataKey, ...other}, index) => {
              return <Column key={dataKey} dataKey={dataKey} {...other} />
            })}
          </Table>
        )}
      </AutoSizer>
    );
  }
}

export function VirtualizedTable() {
  return (
    <Card height={400}>
      <ReactVirtualizedTable columns={tableColumns} />
    </Card>
  );
}