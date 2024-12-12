import { DashboardMenu } from "../components/DashboardMenu";
import { GridWrapper } from "../components/GridWrapper";

export default function RootLayout({ children }) {
  return (
    <main className="flex-grow w-full">
      <GridWrapper>
        <DashboardMenu />
        {children}
      </GridWrapper>
    </main>
  );
}
