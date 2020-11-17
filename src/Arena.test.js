import { render, fireEvent } from '@testing-library/react';
import Arena from "./Arena"

it('increment by one', () => {
  const { getByTestId } = render(<Arena />);

  fireEvent.click(getByTestId('buy-hotdog'))

  expect(getByTestId('sum-hotdogs')).toHaveTextContent('2')
});
