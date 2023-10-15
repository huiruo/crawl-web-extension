import type { ACTIONS } from "~common/action";

export type TabInfo = {
  active: boolean;
  audible: boolean;
  autoDiscardable: boolean;
  discarded: boolean;
  favIconUrl: string;
  groupId: number;
  height: number;
  highlighted: boolean;
  id: number;
  incognito: boolean;
  index: number;
  mutedInfo: {
    muted: boolean;
  };
  pinned: boolean;
  selected: boolean;
  status: string;
  title: string;
  url: string;
  width: number;
  windowId: number;
};

type ActionKeys = typeof ACTIONS[keyof typeof ACTIONS];

export interface MsgRes<T extends ActionKeys, I> {
  type: T
  result: I
}