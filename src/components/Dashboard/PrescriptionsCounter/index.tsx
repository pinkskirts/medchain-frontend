import * as _ from "./styles";

interface PrescriptionsCounterProp {
  qty: number;
}

export default function PrescriptionsCounter({
  qty,
}: PrescriptionsCounterProp) {
  return (
    <_.PrescriptionsCounterContainer>
      <_.PrescriptionsCounterHeader>
        Receitas Disponíveis:
      </_.PrescriptionsCounterHeader>
      <_.CounterNumber>{qty}</_.CounterNumber>
    </_.PrescriptionsCounterContainer>
  );
}
