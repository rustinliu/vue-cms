interface IPropListConfig {
  prop?: string;
  label: string;
  minWidth: string;
  slotName?: string;
}

interface ITable {
  title: string;
  isShowIndexColumn: boolean;
  isShowSelectColumn: boolean;
  propListConfig: IPropListConfig[];
}

export { IPropListConfig, ITable };
