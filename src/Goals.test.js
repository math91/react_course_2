import { render } from '@testing-library/react';
import Goals from "./Goals"

it('should equal to 0', () => {
  const { getByTestId } = render(<Goals />);
  expect(getByTestId('goals')).toHaveTextContent(0)
 });
