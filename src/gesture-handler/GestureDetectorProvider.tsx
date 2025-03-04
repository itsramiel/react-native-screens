import React from 'react';
import { GHContext } from '../native-stack/contexts/GHContext';
import ScreenGestureDetector from './ScreenGestureDetector';
import type { GestureProviderProps } from '../native-stack/types';

function GHWrapper(props: GestureProviderProps) {
  return <ScreenGestureDetector {...props} />;
}

export default function GestureDetectorProvider(props: {
  children: React.ReactNode;
}) {
  return (
    <GHContext.Provider value={GHWrapper}>{props.children}</GHContext.Provider>
  );
}
