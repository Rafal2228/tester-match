import { Bug, Device, FindResult, Tester } from './models';

export function findBugs(
  testers: Tester[],
  devices: Device[],
  bugs: Bug[],
  selectedCountries: string[],
  selectedDevices: Device[]
): FindResult[] {
  let selectedTesters = testers;

  if (!!selectedCountries.length) {
    selectedTesters = selectedTesters.filter(
      t => selectedCountries.indexOf(t.country) !== -1
    );
  }

  if (selectedTesters.length < 1) {
    return [];
  }

  return bugs.reduce(
    (acc, bug) => {
      const tester = selectedTesters.find(t => t.testerId === bug.testerId);
      const considerSelectedDevices = !!selectedDevices.length;
      const device = (considerSelectedDevices ? selectedDevices : devices).find(
        d => d.deviceId === bug.deviceId
      );

      if (!!tester && (!considerSelectedDevices || !!device)) {
        acc.push({ bug, tester, device: device as Device });
      }

      return acc;
    },
    [] as FindResult[]
  );
}
