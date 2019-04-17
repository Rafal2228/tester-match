export interface Device {
  deviceId: number;
  description: string;
}

export interface Tester {
  testerId: number;
  firstName: string;
  lastName: string;
  country: string;
  lastLogin: string;
}

export interface Bug {
  bugId: number;
  deviceId: number;
  testerId: number;
}

export interface FindResult {
  device: Device;
  tester: Tester;
  bug: Bug;
}
