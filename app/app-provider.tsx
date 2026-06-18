'use client';
import { TooltipProvider } from '@/components/ui/tooltip';
import { ReactNode } from 'react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

const queryClient = new QueryClient();

const AppProvider = ({ children }: { children: ReactNode }) => {
	return (
		<TooltipProvider>
			<QueryClientProvider client={queryClient}>
				{children}
			</QueryClientProvider>
		</TooltipProvider>
	);
};

export default AppProvider;
