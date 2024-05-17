import type { Metrics } from './SafeArea.types';
import NativeSafeAreaContext from './specs/NativeSafeAreaContext';

export const initialWindowMetrics = NativeSafeAreaContext?.getConstants() as Promise<Metrics>;

/**
 * @deprecated
 */
export const initialWindowSafeAreaInsets = initialWindowMetrics;
