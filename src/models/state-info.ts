export interface State {
  state_id: number;
  state_name: string;
}

export interface StateList {
  states: State[];
  ttl: number;
}
