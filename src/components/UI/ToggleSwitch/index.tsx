import * as _ from "./styles";

interface ToggleSwitchProps {
  isDarkMode?: boolean;
  toggleTheme?: () => void;
}

export default function ToggleSwitch({
  isDarkMode,
  toggleTheme,
}: ToggleSwitchProps) {
  return (
    <_.ToggleSwitchContainer>
      <_.ToggleSwitch>
        <input type="checkbox" onChange={toggleTheme} checked={isDarkMode} />
        <span className="slider"></span>
      </_.ToggleSwitch>
    </_.ToggleSwitchContainer>
  );
}
