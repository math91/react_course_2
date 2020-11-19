import { render, screen } from '@testing-library/react';
import App from "./App"
import {TeamProvider} from "./teamContext"

test('app renders with main title', async () => {
  render(<TeamProvider><App /></TeamProvider>);
  await screen.findByText('Create your Dog Soccer Team');
});
