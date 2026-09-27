import { ReactNode } from 'react';

export default function DashboardLayout({ children }: { children: ReactNode }) {
  return (
    <div className="w-full flex-1">
      {children}
    </div>
  );
}
