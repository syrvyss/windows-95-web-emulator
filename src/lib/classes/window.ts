type window = {
  name: string;
  icon: string;
  type: string;
  readonly id: string;
  minimized: boolean;
  maximized: boolean;
  position: { x: number; y: number };
};

export default window;
