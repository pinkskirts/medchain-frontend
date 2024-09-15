import * as _ from "./styles";
import * as icon from "@theme/icons";
import { Role } from "types/auth";

export interface SelectRole {
  value: string;
  identifier: Role;
}

interface SelectUserProps {
  options: SelectRole[];
  value: string;
  onChange: (event: React.ChangeEvent<HTMLSelectElement>) => void;
}

export default function SelectUser({
  options,
  value,
  onChange,
}: SelectUserProps) {

  return (
    <_.SelectWrapper>
      <_.SelectUser value={value} onChange={onChange}>
        {value === "Selecione uma opção" && (
          <option value="Selecione uma opção" hidden>
            Selecione uma opção
          </option>
        )}
        {options.map((option) => (
          <option key={option.identifier} value={option.identifier}>
            {option.value}
          </option>
        ))}
      </_.SelectUser>
      <_.ArrowDiv>
        <icon.ArrowDown />
      </_.ArrowDiv>
    </_.SelectWrapper>
  );
}
