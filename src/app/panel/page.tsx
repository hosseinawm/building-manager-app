import PanelLayout from 'layout/PanelLayout';
import AuthGuard from 'utils/route-guard/AuthGuard';
import Panel from 'views/Panel';

export default function Page() {
  return (
    <AuthGuard>
      <PanelLayout>
        <Panel />
      </PanelLayout>
    </AuthGuard>
  );
}
