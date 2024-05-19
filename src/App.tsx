import { useContext } from "react"
import { ThemeContext } from "./context/theme-context-provider"

export const App = () => {
  if (!ThemeContext) {
    return (
      <div>
        Can't find context
      </div>
    )
  } else {
    const { theme } = useContext(ThemeContext)
    return (
      <>
        <p>PupFacts</p>
        <p>{theme}</p>
      </>
    )
  }
}
