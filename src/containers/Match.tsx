import React, { useMemo, useState } from 'react';
import styled from 'styled-components';
import { Filters } from '../components/Filters';
import { ResultList } from '../components/ResultList';
import { findBugs } from '../helpers';
import { Bug, Device, Tester } from '../models';

const Wrapper = styled.div`
  padding: 1em;
  display: flex;
  align-items: flex-start;
`;

const Spacer = styled.div`
  width: 1em;
  height: 1em;
`;

const FilterWrapper = styled.div`
  position: sticky;
  top: 1em;
  width: 190px;
`;

export interface MatchProps {
  countries: string[];
  devices: Device[];
  testers: Tester[];
  bugs: Bug[];
}

export function Match(props: MatchProps) {
  const [selectedDevices, setSelectedDevices] = useState<Device[]>([]);
  const [selectedCountries, setSelectedCountries] = useState<string[]>([]);

  const results = useMemo(
    () =>
      findBugs(
        props.testers,
        props.devices,
        props.bugs,
        selectedCountries,
        selectedDevices
      ),
    [
      props.testers,
      props.devices,
      props.bugs,
      selectedCountries,
      selectedDevices,
    ]
  );

  return (
    <Wrapper>
      <FilterWrapper>
        <Filters
          countries={props.countries}
          devices={props.devices}
          onChangeCountries={setSelectedCountries}
          onChangeDevices={setSelectedDevices}
          selectedCountries={selectedCountries}
          selectedDevices={selectedDevices}
        />
      </FilterWrapper>
      <Spacer />
      <ResultList results={results} />
    </Wrapper>
  );
}
