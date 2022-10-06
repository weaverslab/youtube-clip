import {
  createContext,
  ReactNode,
  useCallback,
  useContext,
  useMemo,
  useState,
} from 'react';
import { normalizePolygon } from '../utils';

// DUMMY
const TEMPLATES: Template[] = [
  {
    no: 0,
    value: [
      'polygon(1% 1%, 60% 1%, 40% 24%, 1% 24%)',
      'polygon(61% 1%, 99% 1%, 99% 24%, 41% 24%)',
      'polygon(1% 25%, 99% 25%, 99% 75%, 1% 75%)',
      'polygon(1% 76%, 40% 76%, 40% 99%, 1% 99%)',
      'polygon(41% 76%, 99% 76%, 99% 99%, 41% 99%)',
    ].map((v) => normalizePolygon(v)),
  },
  {
    no: 1,
    value: [
      'polygon(41% 1%, 74% 1%, 65% 24%, 41% 24%)',
      'polygon(75% 1%, 99% 1%, 99% 24%, 66% 24%)',
      'polygon(41% 25%, 99% 25%, 99% 75%, 41% 75%)',
      'polygon(1% 1%, 40% 1%, 40% 99%, 1% 99%)',
      'polygon(41% 76%, 99% 76%, 99% 99%, 41% 99%)',
    ].map((v) => normalizePolygon(v)),
  },
  {
    no: 2,
    value: [
      'polygon(1% 1%, 60% 1%, 60% 24%, 1% 24%)',
      'polygon(61% 1%, 99% 1%, 99% 99%, 61% 99%)',
      'polygon(1% 25%, 60% 25%, 60% 75%, 1% 75%)',
      'polygon(1% 76%, 25% 76%, 25% 99%, 1% 99%)',
      'polygon(26% 76%, 60% 76%, 60% 99%, 26% 99%)',
    ].map((v) => normalizePolygon(v)),
  },
];

const VIDEOS: string[] = [
  '_Z3QKkl1WyM',
  'Go8nTmfrQd8',
  'ZYzbalQ6Lg8',
  'TcMBFSGVi1c',
  'aWzlQ2N6qqg',
];

export interface Template {
  no: number;
  value: string[];
}

interface AppContextValue {
  videos: string[];
  templates: Template[];
  currentTemplate?: Template;
  changeTemplate: (templateNo: number) => void;
  frameColor: string;
  changeFrameColor: (nextColor: string) => void;
  playState: 'play' | 'stop';
  changePlayState: (nextState: 'play' | 'stop') => void;
}

const AppContext = createContext<AppContextValue | undefined>(undefined);

interface ChildrenProps {
  children: ReactNode;
}

export function AppProvider({ children }: ChildrenProps) {
  const [videos] = useState<Array<string>>(VIDEOS);
  const [templates] = useState<Array<Template>>(TEMPLATES);
  const [currentTemplate, setCurrentTemplate] = useState<Template | undefined>(
    TEMPLATES[0]
  );
  const [frameColor, setFrameColor] = useState<string>('light');
  const [playState, setPlayState] = useState<'play' | 'stop'>('stop');

  const changeTemplate = useCallback(
    (templateNo: number) => {
      setCurrentTemplate(templates[templateNo]);
    },
    [setCurrentTemplate, templates]
  );

  const changePlayState = useCallback(
    (nextState: 'play' | 'stop') => {
      setPlayState(nextState);
    },
    [setPlayState]
  );

  const changeFrameColor = useCallback(
    (nextColor: string) => {
      setFrameColor(nextColor);
    },
    [setFrameColor]
  );

  const value = useMemo(
    () => ({
      videos,
      templates,
      currentTemplate,
      changeTemplate,
      frameColor,
      changeFrameColor,
      playState,
      changePlayState,
    }),
    [
      videos,
      templates,
      currentTemplate,
      changeTemplate,
      frameColor,
      changeFrameColor,
      playState,
      changePlayState,
    ]
  );

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
}

export function useApp() {
  const context = useContext(AppContext);
  if (context === undefined) {
    throw new Error(`\`useApp\` must be used within a \`<AppProvider />\``);
  }

  return context;
}
