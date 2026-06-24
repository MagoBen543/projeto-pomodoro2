import {
  createContext,
  type Dispatch,
} from 'react';

import type { TaskStateModel } from '../../models/TaskStateModel';

import { initialTaskState } from './initialTaskState';

import type { TaskActionModel } from './TaskActions';

export type TaskContextProps = {
  state: TaskStateModel;

  dispatch: Dispatch<TaskActionModel>;
};

const initialContextValue: TaskContextProps =
  {
    state: initialTaskState,
    dispatch: () => {},
  };

export const TaskContext =
  createContext<TaskContextProps>(
    initialContextValue,
  );