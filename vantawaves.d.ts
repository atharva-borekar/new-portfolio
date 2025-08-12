export interface WaveParams {
  el: string;
  mouseControls: boolean;
  touchControls: boolean;
  gyroControls: boolean;
  minHeight: number;
  minWidth: number;
  xOffset?: number;
  yOffset?: number;
  size?: number;
  backgroundColor?: string;
}

export interface WaveInstance {
  setOptions: ({
    el,
    mouseControls,
    touchControls,
    gyroControls,
    minHeight,
    minWidth,
    size,
    xOffset,
    yOffset,
    backgroundColor,
  }: Omit<HaloParams, "el">) => void;
  resize: () => void;
  destroy: () => void;
}

declare global {
  interface Window {
    VANTA: {
      Wave: ({
        el,
        mouseControls,
        touchControls,
        gyroControls,
        minHeight,
        minWidth,
        size,
        xOffset,
        yOffset,
        backgroundColor,
      }: HaloParams) => HaloInstance;
    };
  }
}
