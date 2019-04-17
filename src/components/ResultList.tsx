import { Card, Elevation, HTMLTable } from '@blueprintjs/core';
import React from 'react';
import { FindResult } from '../models';

export interface ResultListProps {
  results: FindResult[];
}

export function ResultList(props: ResultListProps) {
  return (
    <Card elevation={Elevation.ONE}>
      {!props.results.length ? (
        'No results here'
      ) : (
        <HTMLTable>
          <thead>
            <tr>
              <th>Tester</th>
              <th>From</th>
              <th>Last login date</th>
              <th>Device</th>
            </tr>
          </thead>
          <tbody>
            {props.results.map(result => (
              <tr key={result.bug.bugId}>
                <td>
                  {[result.tester.firstName, result.tester.lastName].join(' ')}
                </td>
                <td>{result.tester.country}</td>
                <td>{result.tester.lastLogin}</td>
                <td>{result.device.description}</td>
              </tr>
            ))}
          </tbody>
        </HTMLTable>
      )}
    </Card>
  );
}
