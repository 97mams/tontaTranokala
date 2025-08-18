export function CardListPlatform({ platforms }: { platforms: Platform[] }) {
  return (
    <div>
      {platforms.map((platform) => (
        <Card key={platform.id} platform={platform} />
      ))}
    </div>
  );
}

const Card = ({ platform }: { platform: Platform }) => {
  return (
    <div>
      <h2>Y« Retrouvez ici vos informations de connexion organisées par groupe de plateformes (ex. : réseaux sociaux, e-commerce…). »</h2>
    </div>
  );
};
