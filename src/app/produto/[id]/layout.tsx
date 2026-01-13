// Gerar rotas estáticas para todos os produtos
export async function generateStaticParams() {
  // IDs dos produtos principais (1-9)
  const mainProductIds = ['1', '2', '3', '4', '5', '6', '7', '8', '9'];
  
  // IDs dos produtos de gatos (101-108)
  const catProductIds = ['101', '102', '103', '104', '105', '106', '107', '108'];
  
  const allIds = [...mainProductIds, ...catProductIds];
  
  return allIds.map((id) => ({
    id: id,
  }));
}

export default function ProductLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
