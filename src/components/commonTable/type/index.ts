interface IPropListConfig {
  prop?: string;
  label: string;
  minWidth: string;
  slotName?: string;
}

interface IChildrenProps {
  rowKey: string;
  treeProp: any;
}

interface ITable {
  title: string;
  isShowIndexColumn: boolean;
  isShowSelectColumn: boolean;
  propListConfig: IPropListConfig[];
  childrenProps?: IChildrenProps;
  isShowFooter?: boolean;
}

export { IPropListConfig, ITable };
