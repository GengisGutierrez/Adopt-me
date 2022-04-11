import { createContext, useDebugValue} from "react";

const ThemeContext = createContext(["green", () => {}]);

export default ThemeContext