import type CodeMirror from "codemirror";
import type { DataTree, ENTITY_TYPE } from "entities/DataTree/dataTreeFactory";
import type { AdditionalDynamicDataTree } from "utils/autocomplete/customTreeTypeDefCreator";
import type { AutocompleteDataType } from "utils/autocomplete/CodemirrorTernService";
import type { EntityNavigationData } from "selectors/navigationSelectors";
import type { ExpectedValueExample } from "utils/validation/common";

export enum EditorModes {
  TEXT = "text/plain",
  SQL = "sql",
  TEXT_WITH_BINDING = "text-js",
  JSON = "application/json",
  JSON_WITH_BINDING = "json-js",
  SQL_WITH_BINDING = "sql-js",
  JAVASCRIPT = "javascript",
  GRAPHQL = "graphql",
  GRAPHQL_WITH_BINDING = "graphql-js",
}

export enum EditorTheme {
  LIGHT = "LIGHT",
  DARK = "DARK",
}
export enum TabBehaviour {
  INPUT = "INPUT",
  INDENT = "INDENT",
}

export enum EditorSize {
  COMPACT = "COMPACT",
  EXTENDED = "EXTENDED",
  COMPACT_RETAIN_FORMATTING = "COMPACT_RETAIN_FORMATTING",
}

export type EditorConfig = {
  theme: EditorTheme;
  mode: EditorModes;
  tabBehaviour: TabBehaviour;
  size: EditorSize;
  hinting: Array<HintHelper>;
  marking: Array<MarkHelper>;
  folding?: boolean;
};

export const EditorThemes: Record<EditorTheme, string> = {
  [EditorTheme.LIGHT]: "duotone-light",
  [EditorTheme.DARK]: "duotone-dark",
};

export type FieldEntityInformation = {
  entityName?: string;
  expectedType?: AutocompleteDataType;
  entityType?: ENTITY_TYPE;
  entityId?: string;
  propertyPath?: string;
  blockCompletions?: Array<{ parentPath: string; subPath: string }>;
  example?: ExpectedValueExample;
  mode?: EditorModes;
};

export type HintHelper = (
  editor: CodeMirror.Editor,
  data: DataTree,
  customDataTree?: AdditionalDynamicDataTree,
) => Hinter;
export type Hinter = {
  showHint: (
    editor: CodeMirror.Editor,
    entityInformation: FieldEntityInformation,
    additionalData?: any,
  ) => boolean;
  update?: (data: DataTree) => void;
  fireOnFocus?: boolean;
};

export type MarkHelper = (
  editor: CodeMirror.Editor,
  entityNavigationData: EntityNavigationData,
  from?: CodeMirror.Position,
  to?: CodeMirror.Position,
) => void;

export enum CodeEditorBorder {
  NONE = "none",
  ALL_SIDE = "all-side",
  BOTTOM_SIDE = "bottom-side",
}

export enum AUTOCOMPLETE_CLOSE_KEY {
  Enter,
  Escape,
  Comma,
  Semicolon,
  Space,
  Delete,
  "Ctrl+Backspace",
  OSLeft,
  "(",
  ")",
}

export const isCloseKey = (key: any): key is AUTOCOMPLETE_CLOSE_KEY => {
  return AUTOCOMPLETE_CLOSE_KEY.hasOwnProperty(key);
};

export enum MODIFIER {
  Control,
  Meta,
  Alt,
  Shift,
}

export const isModifierKey = (key: any): key is MODIFIER => {
  return MODIFIER.hasOwnProperty(key);
};

export enum AUTOCOMPLETE_NAVIGATION {
  ArrowUp,
  ArrowDown,
  ArrowRight,
  ArrowLeft,
}

export const INDENTATION_CHARACTERS = {
  " ": " ",
  "\t": "\t",
  "\n": "\n",
};

export const isNavKey = (key: any): key is AUTOCOMPLETE_NAVIGATION => {
  return AUTOCOMPLETE_NAVIGATION.hasOwnProperty(key);
};
