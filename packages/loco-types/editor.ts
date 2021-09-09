export type EditorPlugin = {
  name: string;
  id: string;
  install: (editor: any) => void;
};
