import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './app.jsx';

import { QueryClientProvider } from "@tanstack/react-query";
import { queryClient } from "./useQueryClient.jsx";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
<React.StrictMode>
<QueryClientProvider client={queryClient}>
      <App />
</QueryClientProvider>
</React.StrictMode>
);