import {
  Button,
  Card,
  Elevation,
  FormGroup,
  MenuItem,
} from '@blueprintjs/core';
import { MultiSelect } from '@blueprintjs/select';
import React from 'react';
import { Device } from '../models';

export interface FiltersProps {
  countries: string[];
  selectedCountries: string[];
  devices: Device[];
  selectedDevices: Device[];
  onChangeCountries(countries: string[]): void;
  onChangeDevices(devices: Device[]): void;
}

export function Filters(props: FiltersProps) {
  const countriesClearButton =
    props.countries.length > 0 ? (
      <Button
        icon="cross"
        minimal={true}
        onClick={() => props.onChangeCountries([])}
      />
    ) : (
      undefined
    );

  const devicesClearButton =
    props.devices.length > 0 ? (
      <Button
        icon="cross"
        minimal={true}
        onClick={() => props.onChangeDevices([])}
      />
    ) : (
      undefined
    );

  return (
    <Card elevation={Elevation.TWO}>
      <FormGroup label="Countries">
        <MultiSelect
          items={props.countries}
          tagRenderer={country => country}
          itemRenderer={(country, itemProps) => {
            return (
              <MenuItem
                active={itemProps.modifiers.active}
                disabled={itemProps.modifiers.disabled}
                icon={
                  props.selectedCountries.indexOf(country) !== -1
                    ? 'tick'
                    : 'blank'
                }
                key={country}
                onClick={itemProps.handleClick}
                text={country}
                shouldDismissPopover={false}
              />
            );
          }}
          selectedItems={props.selectedCountries}
          popoverProps={{ minimal: true }}
          tagInputProps={{
            onRemove: country => {
              props.onChangeCountries(
                props.selectedCountries.filter(t => t !== country)
              );
            },
            rightElement: countriesClearButton,
            tagProps: {
              minimal: true,
            },
          }}
          onItemSelect={country => {
            const selectedCountries =
              props.selectedCountries.indexOf(country) !== -1
                ? props.selectedCountries.filter(t => t !== country)
                : [...props.selectedCountries, country];

            props.onChangeCountries(selectedCountries);
          }}
        />
      </FormGroup>
      <FormGroup label="Devices">
        <MultiSelect
          items={props.devices}
          tagRenderer={device => device.description}
          itemRenderer={(device, itemProps) => {
            return (
              <MenuItem
                active={itemProps.modifiers.active}
                disabled={itemProps.modifiers.disabled}
                icon={
                  props.selectedDevices.indexOf(device) !== -1
                    ? 'tick'
                    : 'blank'
                }
                key={device.deviceId}
                onClick={itemProps.handleClick}
                text={device.description}
                shouldDismissPopover={false}
              />
            );
          }}
          selectedItems={props.selectedDevices}
          popoverProps={{ minimal: true }}
          tagInputProps={{
            onRemove: (device, index) => {
              props.onChangeDevices(
                props.selectedDevices.filter((t, i) => i !== index)
              );
            },
            rightElement: devicesClearButton,
            tagProps: {
              minimal: true,
            },
          }}
          onItemSelect={device => {
            const selectedDevices =
              props.selectedDevices.indexOf(device) !== -1
                ? props.selectedDevices.filter(t => t !== device)
                : [...props.selectedDevices, device];

            props.onChangeDevices(selectedDevices);
          }}
        />
      </FormGroup>
    </Card>
  );
}
